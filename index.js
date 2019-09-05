require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

morgan.token('res-body', function getId(req) {
  return JSON.stringify(req.body)
})

const Person = require('./models/Person')
// let persons = [
//   {name: 'Arto Hellas', number: '040-123456', id: 1},
//   {name: 'Ada Lovelace', number: '39-44-5323523', id: 2},
//   {name: 'Dan Abramov', number: '12-43-234345', id: 3},
//   {name: 'Mary Poppendieck', number: '39-23-6423122', id: 4}
// ]

const app = express()
app.use(bodyParser.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :res-body '))
app.use(express.static('build'))

app.get('/api/persons', (req, res) => {
  Person.find({}).then(persons => {
    res.status(200).json(persons.map(p => p.toJSON()))
  })
})

app.post('/api/persons', (req, res, next) => {
  const newPerson = new Person({
    ...req.body
  })
  console.log('req body: ', req.body)
  newPerson.save()
    .then(person => {
      res.json(person.toJSON())
    })
    .catch(err => next(err))
})

app.get('/api/persons/:id', (req, res, next) => {
  Person.findById(req.params.id)
    .then(person => {
      if (person) {
        res.json(person.toJSON())
      } else {
        res.status(404).end()
      }
    })
    .catch(err => next(err))
})

app.delete('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(204).end()
    })
    .catch(err => next(err))
})

app.put('/api/persons/:id', (req, res, next) => {
  const person = {
    ...req.body
  }
  Person.findByIdAndUpdate(req.params.id, person, {
    new: true
  })
    .then(updatedPerson => {
      res.json(updatedPerson.toJSON())
    })
    .catch(err => next(err))
})

app.get('/info', (req, res, next) => {
  Person.countDocuments({})
    .then(count => {
      res.send(`
        <p>Phonebook has info for ${count} people</p>
        <p>${Date()}</p>
      `)
    })
    .catch(err => next(err))
})

const errorHandler = (err, req, res, next) => {
  console.log(err.message)
  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    return res.status(400).send({
      error: 'malformed id'
    })
  } else if (err.name === 'ValidationError') {
    return res.status(400).send({
      error: err.message
    })
  }
  next(err)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
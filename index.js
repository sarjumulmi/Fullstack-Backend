const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
morgan.token('res-body', function getId (req) {
  return JSON.stringify(req.body)
})

let persons = [
  {name: 'Arto Hellas', number: '040-123456', id: 1},
  {name: 'Ada Lovelace', number: '39-44-5323523', id: 2},
  {name: 'Dan Abramov', number: '12-43-234345', id: 3},
  {name: 'Mary Poppendieck', number: '39-23-6423122', id: 4}
]

const app = express()
app.use(bodyParser.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :res-body '))
app.use(express.static('build'))

app.get('/api/persons', (req, res) => {
  res.status(200).json(persons)
})

app.post('/api/persons', (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({error: 'body must contain name'})
  }
  if (!req.body.number) {
    return res.status(400).send({error: 'body must contain number'})
  }
  const personExists = persons.map(p => p.name).includes(req.body.name)
  if (personExists) {
    return res.status(400).send({error: 'name must be unique'})
  }

  const newPerson = {...req.body, id: Math.floor(Math.random()* 99999999)}
  persons = [...persons, newPerson]
  res.status(201).send(newPerson)
})

app.get('/api/persons/:id', (req, res) => {
  const person = persons.find(p => p.id === Number(req.params.id))
  if (person) {
    res.status(200).json(person)
  } else {
    res.status(404).end()
  }
  
})

app.delete('/api/persons/:id', (req, res) => {
  persons = persons.filter(p => p.id !== Number(req.params.id))
  res.status(204).end()
})

app.get('/info', (req, res) => {

  res.send(`
  <p>Phonebook has info for ${persons.length} people</p>
  <p>${Date()}</p>
  `)
})

// app.get('/', (req, res) => {
//   res.status(200).json({hello: 'world'})
// })

// app.get('*', (req, res) => {
//   res.status(404).json({msg: 'route not found'})
// })


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
})
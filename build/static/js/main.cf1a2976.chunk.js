(window.webpackJsonppart2e=window.webpackJsonppart2e||[]).push([[0],{17:function(e,n,t){e.exports=t(41)},40:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(15),o=t.n(c),u=t(3),l=t(5),i=t.n(l),s=t(16),m=t(2),d=t(4),f=t.n(d),h="/api/persons",b={getAllPersons:function(){return f.a.get(h).then(function(e){return e.data})},createPerson:function(e){return f.a.post(h,e).then(function(e){return e.data})},updatePerson:function(e,n){return f.a.put("".concat(h,"/").concat(n),e).then(function(e){return e.data})},deletePerson:function(e){return f.a.delete("".concat(h,"/").concat(e)).then(function(e){return e.data})}},p=function(e){var n=e.searchName,t=e.handleSearchChange;return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:n,onChange:t}))},g=function(e){var n=e.newName,t=e.number,a=e.handleNameChange,c=e.handleNumberChange,o=e.handleFormSubmit;return r.a.createElement("form",{onSubmit:o},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:n,onChange:a}),r.a.createElement("br",null),"number: ",r.a.createElement("input",{value:t,onChange:c})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},v=function(e){return(0,e.personsToDisplay)()},E=function(e){var n=e.handleClick,t=e.text;return r.a.createElement("button",{onClick:n},t)},w=function(e){var n=e.msg;if(null===n)return null;var t=n.text,a=n.type;return console.log("message: ",n),r.a.createElement("div",{className:a},t)},j=(t(40),function(){var e=Object(a.useState)([]),n=Object(m.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(""),l=Object(m.a)(o,2),d=l[0],f=l[1],h=Object(a.useState)(""),j=Object(m.a)(h,2),O=j[0],C=j[1],y=Object(a.useState)(""),k=Object(m.a)(y,2),x=k[0],P=k[1],N=Object(a.useState)({}),S=Object(m.a)(N,2),T=S[0],D=S[1],A=Object(a.useState)(null),F=Object(m.a)(A,2),J=F[0],L=F[1];Object(a.useEffect)(function(){function e(){return(e=Object(s.a)(i.a.mark(function e(){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.getAllPersons();case 2:n=e.sent,c(n);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]);var B=function(e){var n=t.find(function(n){return n.id===e});window.confirm("Delete ".concat(n.name,"?"))&&(console.log(e),b.deletePerson(e).then(function(){c(Object(u.a)(t.filter(function(n){return n.id!==e}))),L({text:"".concat(n.name," deleted."),type:"info"}),setTimeout(function(){L(null)},5e3)}).catch(function(a){c(Object(u.a)(t.filter(function(n){return n.id!==e}))),L({text:"".concat(n.name," doesnot exist in the server."),type:"error"}),setTimeout(function(){L(null)},5e3)}))};return r.a.createElement("div",null,r.a.createElement(w,{msg:J}),r.a.createElement("h2",null,"Phonebook"),r.a.createElement(p,{searchName:x,handleSearchChange:function(e){var n=e.target.value;P(n),console.log("searched name",x);var a=Object(u.a)(t).filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});console.log("searched Person",a),D(void 0!==a?a:{})}}),r.a.createElement("h2",null,"Add a new"),r.a.createElement(g,{newName:d,number:O,handleNameChange:function(e){f(e.target.value)},handleNumberChange:function(e){C(e.target.value)},handleFormSubmit:function(e){e.preventDefault();var n=t.find(function(e){return e.name===d});n&&window.confirm("".concat(d," already exists, update phonebook with new number?"))?b.updatePerson({name:d,number:O},n.id).then(function(e){c(Object(u.a)(t.map(function(t){return n.id===t.id?e:t}))),L({text:"".concat(e.name,"'s number updated in the Phonebook"),type:"success"}),f(""),C(""),setTimeout(function(){console.log("message: ",J),L(null)},5e3)}):b.createPerson({name:d,number:O}).then(function(e){c([].concat(Object(u.a)(t),[e])),L({text:"".concat(e.name," added to Phonebook"),type:"success"}),f(""),C(""),setTimeout(function(){L(null)},5e3)})}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(v,{personsToDisplay:function(){return""===x?t.map(function(e){return r.a.createElement("div",{key:e.name},e.name," ",e.number,r.a.createElement(E,{text:"delete",handleClick:function(){B(e.id)}}))}):T.length>0?(console.log("matching person",T),T.map(function(e){return r.a.createElement("div",{key:e.name},e.name," ",e.number,r.a.createElement(E,{text:"delete",handleClick:function(){B(e.id)}}))})):(console.log("no matching person"),r.a.createElement("div",null,"No matching person found"))}}))});o.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.cf1a2976.chunk.js.map
(this.webpackJsonpexpanse=this.webpackJsonpexpanse||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(6),s=a.n(c),r=(a(17),a(18),a(9),a(4)),o=a(12),l=a(5),d=function(e,t){switch(t.type){case"Delete_Transaction":return Object(l.a)(Object(l.a)({},e),{},{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case"Add_Transaction":return Object(l.a)(Object(l.a)({},e),{},{transactions:[t.payload].concat(Object(o.a)(e.transactions))});default:return e}},m=a(1),j={transactions:[]},u=Object(n.createContext)(j),_=function(e){var t=e.children,a=Object(n.useReducer)(d,j),i=Object(r.a)(a,2),c=i[0],s=i[1];return Object(m.jsx)(u.Provider,{value:{transactions:c.transactions,deleteTransition:function(e){s({type:"Delete_Transaction",payload:e})},addTransaction:function(e){s({type:"Add_Transaction",payload:e})}},children:t})};function b(){var e=Object(n.useContext)(u).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return Object(m.jsxs)("div",{children:[Object(m.jsxs)("h1",{className:"h1 animate__animated animate__jackInTheBox animate__repeat-1",children:["Expanse Trackig App"," "]}),Object(m.jsx)("h4",{className:"c1 c2 animate__animated animate__rollIn animate__repeat-1",children:"Current Balance"}),Object(m.jsxs)("h1",{className:"c1  animate__animated animate__rollIn animate__repeat-1",children:["$ ",e]})]})}var O=function(){var e=Object(n.useContext)(u).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),a=e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0).toFixed(2);return Object(m.jsxs)("div",{className:"status-container animate__animated animate__rotateInDownLeft animate__repeat-1  ",children:[Object(m.jsx)("div",{className:"income-shadow animate__animated animate__rotateInDownLeft animate__repeat-1 animate__slow ",children:Object(m.jsxs)("div",{children:[Object(m.jsx)("h4",{style:{boxShadow:"none"},children:"INCOME"}),Object(m.jsxs)("p",{className:"money plus",style:{boxShadow:"none"},children:["$ ",t]})]})}),Object(m.jsx)("div",{className:"expanse-shadow animate__animated animate__rotateInDownLeft animate__repeat-1 animate__slow ",children:Object(m.jsxs)("div",{children:[Object(m.jsx)("h4",{style:{boxShadow:"none"},children:"EXPANSE"}),Object(m.jsxs)("p",{className:"money minus",style:{boxShadow:"none"},children:["$ ",a]})]})})]})},h=a(11),x=a(2),p=(a(10),function(){var e=Object(n.useContext)(u).transactions,t=Object(n.useContext)(u).deleteTransition;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h4",{className:"thistory animate__animated animate__rotateInDownLeft animate__repeat-1",children:"Transaction HISTORY"}),Object(m.jsx)("ul",{id:"List ",className:"list animate__animated animate__rotateInDownLeft animate__repeat-1",children:e.map((function(e){var a=e.amount<0?"-":"+";return Object(m.jsxs)("li",{className:e.amount<0?"minus":"plus",children:[e.Description,Object(m.jsxs)("span",{className:"amount",children:[a," $ ",Math.abs(e.amount)]}),Object(m.jsx)("button",{type:"button",id:"delete-btn",onClick:function(){var a;t(e.id),a=e.Description,Object(x.b)("\u274c Transation Deleted!"+a,{position:"top-left"})},children:Object(m.jsx)(h.a,{})})]},e.id)}))}),Object(m.jsx)(x.a,{})]})}),f=function(){var e,t=Object(n.useState)(""),a=Object(r.a)(t,2),i=a[0],c=a[1],s=Object(n.useState)(""),o=Object(r.a)(s,2),l=o[0],d=o[1],j=Object(n.useContext)(u).addTransaction,_=Object(n.useContext)(u).transactions;return Object(m.jsxs)("div",{children:[Object(m.jsx)(p,{}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("h4",{className:"thistory animate__animated animate__rotateInDownLeft animate__repeat-1",children:["Add New Transaction"," "]}),Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:(new Date).getTime(),Description:i,amount:+l};j(t)},children:[Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label animate__animated animate__rotateInDownLeft animate__repeat-1 animate__delay-1s",style:{color:"#fff"},children:"Description"}),Object(m.jsx)("input",{type:"text",className:"form-control animate__animated animate__rotateInDownLeft animate__repeat-1 animate__delay-1s",id:"typeamount","aria-describedby":"emailHelp",placeholder:"Detail Of Transaction",value:i,onChange:function(e){c(e.target.value)}})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label animate__animated animate__rotateInDownLeft animate__repeat-1 animate__delay-1s",style:{color:"#fff"},children:"Transaction Amount"}),Object(m.jsx)("input",{type:"number",className:"form-control animate__animated animate__rotateInDownLeft animate__repeat-1 animate__delay-1s",id:"amount",placeholder:"Dollar Value Of Transaction",value:l,onChange:function(e){d(e.target.value)}})]}),Object(m.jsx)("button",{className:"btn-hover color-3 ",onClick:(e=_.Description,void Object(x.b)("\u2714\ufe0f Transaction Added ! "+{des:e},{position:"top-left"})),children:"ADD Transaction"})]})]}),Object(m.jsx)(x.a,{})]})};var v=function(){return Object(m.jsxs)(_,{children:[Object(m.jsx)(b,{}),Object(m.jsx)(O,{}),Object(m.jsx)(f,{})]})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,21)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),c(e),s(e)}))};s.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root")),y()}},[[20,1,2]]]);
//# sourceMappingURL=main.5273652f.chunk.js.map
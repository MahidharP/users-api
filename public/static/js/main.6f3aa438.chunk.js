(this["webpackJsonpcognizant-assignment"]=this["webpackJsonpcognizant-assignment"]||[]).push([[0],{36:function(e,t,c){},62:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(11),r=c.n(a),i=(c(36),c(12)),o=c(4),j=c(10),u=c(9),l=c(16),d=c.n(l),b=function(e){return{type:"SEARCH_USER",payload:e}},O=function(e){return function(t){d.a.get("/users/filter?search=".concat(e)).then((function(e){var c=e.data;t(b(c))})).catch((function(e){alert(e.message)}))}},h=c(65),f=c(1),x=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),r=Object(j.a)(a,2),l=r[0],x=r[1],p=Object(n.useState)({name:!0,email:!0,city:!0,username:!0}),g=Object(j.a)(p,2),m=g[0],S=g[1],v=Object(n.useState)(!1),y=Object(j.a)(v,2),C=(y[0],y[1],Object(u.c)((function(e){return e.users}))),E=Object(u.b)();Object(n.useEffect)((function(){E((function(e){d.a.get("/users").then((function(t){var c=t.data;e(function(e){return{type:"SET_USERS",payload:e}}(c))})).catch((function(e){alert(e.message)}))}))}),[E]);var R=function(e){var t=Object(o.a)(Object(o.a)({},m),{},Object(i.a)({},e,!m[e]));S(t),E(function(e,t){return function(c){d.a.get("/users/sort?sortBy=".concat(e,"&order=").concat(t)).then((function(e){var t=e.data;c(b(t))})).catch((function(e){alert(e.message)}))}}(e,m[e]?"desc":"asc"))};return Object(f.jsxs)("div",{children:[Object(f.jsxs)("h3",{children:[" Users Count : - ",C.users.length]}),Object(f.jsx)("input",{type:"text",value:c,className:"searchByName",onChange:function(e){var t=e.target.value;s(t),E(O(t))},placeholder:"Search..."}),Object(f.jsxs)("select",{value:l,onChange:function(e){var t=e.target.value;x(t),E(O(t))},className:"dropDownList",children:[Object(f.jsx)("option",{value:"",children:" Select City  "}),C.dropDownList.map((function(e){return Object(f.jsxs)("option",{value:e.address.city,children:[" ",e.address.city," "]},e.id)}))]}),Object(f.jsxs)(h.a,{responsive:!0,hover:!0,"data-toggle":"table",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsxs)("th",{children:[" Name ",Object(f.jsx)("i",{class:"sort icon",onClick:function(e){R("name")}})]}),Object(f.jsxs)("th",{children:[" Username ",Object(f.jsx)("i",{class:"sort icon",onClick:function(e){R("username")}})]}),Object(f.jsxs)("th",{children:[" Email ",Object(f.jsx)("i",{class:"sort icon",onClick:function(e){R("email")}})]}),Object(f.jsxs)("th",{children:[" City ",Object(f.jsx)("i",{class:"sort icon",onClick:function(e){R("address.city")}})]})]})}),Object(f.jsx)("tbody",{children:C.users.map((function(e){return Object(f.jsxs)("tr",{children:[Object(f.jsxs)("td",{children:[" ",e.name," "]}),Object(f.jsxs)("td",{children:[" ",e.username," "]}),Object(f.jsxs)("td",{children:[" ",e.email," "]}),Object(f.jsxs)("td",{children:[" ",e.address.city," "]})]},e.id)}))})]})]})},p=function(){return Object(f.jsx)("div",{children:Object(f.jsx)(x,{})})},g=(c(62),c(63),c(66)),m=c(6),S=c(30),v=c(7),y={users:[],dropDownList:[]},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USERS":return Object(o.a)(Object(o.a)({},e),{},{users:Object(v.a)(t.payload),dropDownList:Object(v.a)(t.payload)});case"SEARCH_USER":case"CITY_FILTER":case"SORT_ASC":return Object(o.a)(Object(o.a)({},e),{},{users:Object(v.a)(t.payload)});default:return Object(o.a)({},e)}},E=function(){return Object(m.d)(Object(m.c)({users:C}),Object(m.a)(S.a))}();console.log("Store Value",E.getState()),E.subscribe((function(){console.log("Updated State",E.getState())})),r.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(g.a,{children:Object(f.jsx)(u.a,{store:E,children:Object(f.jsx)(p,{})})})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.6f3aa438.chunk.js.map
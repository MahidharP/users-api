(this["webpackJsonpcognizant-assignment"]=this["webpackJsonpcognizant-assignment"]||[]).push([[0],{36:function(e,t,c){},62:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(9),r=c.n(a),i=(c(36),c(10)),o=c(5),j=c(15),u=c(8),d=c(14),l=c.n(d),b=function(e){return{type:"SEARCH_USER",payload:e}},O=function(e){return function(t){l.a.get("/users/filter?search=".concat(e)).then((function(e){var c=e.data;t(b(c))})).catch((function(e){alert(e.message)}))}},h=c(65),f=c(1),x=function(e){var t=e.user;return Object(f.jsxs)("tr",{children:[Object(f.jsxs)("td",{children:[" ",t.id," "]}),Object(f.jsxs)("td",{children:[" ",t.name," "]}),Object(f.jsxs)("td",{children:[" ",t.username," "]}),Object(f.jsxs)("td",{children:[" ",t.email," "]}),Object(f.jsxs)("td",{children:[" ",t.address.city," "]})]},t.id)},m=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),r=Object(j.a)(a,2),d=r[0],m=r[1],p=Object(n.useState)({name:!0,email:!0,city:!0,username:!0}),v=Object(j.a)(p,2),g=v[0],y=v[1],S=Object(u.c)((function(e){return e.users})),C=Object(u.b)();Object(n.useEffect)((function(){C((function(e){l.a.get("/users").then((function(t){var c=t.data;e(function(e){return{type:"SET_USERS",payload:e}}(c))})).catch((function(e){alert(e.message)}))}))}),[C]),Object(n.useEffect)((function(){document.title="Users - ".concat(S.users.length)}),[S]);var E=function(e){var t=Object(o.a)(Object(o.a)({},g),{},Object(i.a)({},e,!g[e]));y(t),C(function(e,t){return function(c){l.a.get("/users/sort?sortBy=".concat(e,"&order=").concat(t)).then((function(e){var t=e.data;c(b(t))})).catch((function(e){alert(e.message)}))}}(e,g[e]?"desc":"asc"))};return Object(f.jsxs)("div",{className:"divDashboard",children:[Object(f.jsxs)("h2",{className:"h2Dashboard",children:[" Users Count : ",S.users.length]}),Object(f.jsx)("input",{type:"text",value:c,className:"searchByName",onChange:function(e){var t=e.target.value;s(t),C(O(t))},placeholder:"Search..."}),Object(f.jsxs)("select",{value:d,onChange:function(e){var t=e.target.value;m(t),C(O(t))},className:"dropDownList",children:[Object(f.jsx)("option",{value:"",children:" Select City  "}),S.dropDownList.map((function(e){return Object(f.jsxs)("option",{value:e.address.city,children:[" ",e.address.city," "]},e.id)}))]}),Object(f.jsxs)(h.a,{responsive:!0,hover:!0,striped:!0,children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsxs)("th",{children:[" Id ",Object(f.jsx)("i",{className:"sort icon",onClick:function(e){E("id")}})]}),Object(f.jsxs)("th",{children:[" Name ",Object(f.jsx)("i",{className:"sort icon",onClick:function(e){E("name")}})]}),Object(f.jsxs)("th",{children:[" Username ",Object(f.jsx)("i",{className:"sort icon",onClick:function(e){E("username")}})]}),Object(f.jsxs)("th",{children:[" Email ",Object(f.jsx)("i",{className:"sort icon",onClick:function(e){E("email")}})]}),Object(f.jsxs)("th",{children:[" City ",Object(f.jsx)("i",{className:"sort icon",onClick:function(e){E("address.city")}})]})]})}),Object(f.jsx)("tbody",{children:S.users.map((function(e){return Object(f.jsx)(x,{user:e},e.id)}))})]})]})},p=function(){return Object(f.jsx)("div",{children:Object(f.jsx)(m,{})})},v=(c(62),c(63),c(66)),g=c(6),y=c(30),S=c(16),C={users:[],dropDownList:[]},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USERS":return Object(o.a)(Object(o.a)({},e),{},{users:Object(S.a)(t.payload),dropDownList:Object(S.a)(t.payload)});case"SEARCH_USER":return Object(o.a)(Object(o.a)({},e),{},{users:Object(S.a)(t.payload)});default:return Object(o.a)({},e)}},N=function(){return Object(g.d)(Object(g.c)({users:E}),Object(g.a)(y.a))}();console.log("Store Value",N.getState()),N.subscribe((function(){console.log("Updated State",N.getState())})),r.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(v.a,{children:Object(f.jsx)(u.a,{store:N,children:Object(f.jsx)(p,{})})})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.5c764ffb.chunk.js.map
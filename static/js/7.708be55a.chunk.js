(this["webpackJsonpkabzda-1"]=this["webpackJsonpkabzda-1"]||[]).push([[7],{226:function(e,t,r){e.exports={formControl:"FormsControls_formControl__3BXei",error:"FormsControls_error__20QsI",formSummaryError:"FormsControls_formSummaryError__B4cbn"}},227:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}));var n=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},228:function(e,t,r){"use strict";r.d(t,"b",(function(){return m})),r.d(t,"a",(function(){return s})),r.d(t,"c",(function(){return d}));var n=r(230),a=r(0),o=r.n(a),c=r(109),i=r(226),u=r.n(i),l=function(e){e.input;var t=e.meta,r=(e.child,Object(n.a)(e,["input","meta","child"])),a=t.touched&&t.error;return o.a.createElement("div",{className:u.a.formControl+" "+(a?u.a.error:"")},o.a.createElement("div",null,r.children),a&&o.a.createElement("span",null," ",t.error," "))},m=function(e){var t=e.input,r=(e.meta,e.child,Object(n.a)(e,["input","meta","child"]));return o.a.createElement(l,e,o.a.createElement("textarea",Object.assign({},t,r)))},s=function(e){var t=e.input,r=(e.meta,e.child,Object(n.a)(e,["input","meta","child"]));return o.a.createElement(l,e,o.a.createElement("input",Object.assign({},t,r)))},d=function(e,t,r,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(c.a,Object.assign({placeholder:e,name:t,validate:r,component:n},a)),i)}},300:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(26),c=r(110),i=r(227),u=r(228),l=r(25),m=r(6),s=r(226),d=r.n(s),f=Object(c.a)({form:"login"})((function(e){var t=e.handleSubmit,r=e.error;return a.a.createElement("form",{onSubmit:t},Object(u.c)("Email","email",[i.b],u.a),Object(u.c)("Password","password",[i.b],u.a,{type:"password"}),Object(u.c)(null,"rememberMe",[],u.a,{type:"checkbox"},"remember me"),r&&a.a.createElement("div",{className:d.a.formSummaryError},r),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))}));t.default=Object(o.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:l.c})((function(e){return e.isAuth?a.a.createElement(m.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(f,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))}))}}]);
//# sourceMappingURL=7.708be55a.chunk.js.map
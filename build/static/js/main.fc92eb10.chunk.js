(this.webpackJsonpfrontendfitnesstracker=this.webpackJsonpfrontendfitnesstracker||[]).push([[0],{15:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n(7),s=n.n(c),i=n(1),a=n(8),o=n.n(a),u=n(10),j=n(2),l=n(0),h=function(e){e.userToken;var t=Object(j.f)(),n=Object(i.useState)(""),c=Object(r.a)(n,2),s=c[0],a=c[1],h=Object(i.useState)(""),d=Object(r.a)(h,2),b=d[0],O=d[1];function p(){return(p=Object(u.a)(o.a.mark((function e(n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s!=s&&alert("invalid username or password"),n.preventDefault(),r=500,e.next=5,fetch("https://fitnesstrac-kr.herokuapp.com/api/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n.target.username.value,password:n.target.password.value})}).then((function(e){return console.log(e),r=!e.ok,e.json()})).then((function(e){r&&alert(e.message),localStorage.setItem("token",e.token),console.log(e),t.push("/")})).catch(console.error);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(l.jsxs)("div",{id:"lilo",children:[Object(l.jsx)("h1",{children:"LOGIN"}),Object(l.jsxs)("form",{id:"form",onSubmit:function(e){return p.apply(this,arguments)},children:[Object(l.jsx)("input",{type:"text",onChange:function(e){return a(e.target.value)},value:s,required:!0,name:"username",placeholder:"username"}),Object(l.jsx)("input",{type:"password",onChange:function(e){return O(e.target.value)},value:b,required:!0,name:"password",placeholder:"password"}),Object(l.jsx)("button",{children:"Log In"})]}),Object(l.jsx)("h2",{children:"Not a member? Create an account to create routines! Otherwise, login with existing account!"})]})},d=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{id:"welcome",children:"Welcome to My Fitness Tracker"}),Object(l.jsx)("p",{id:"body",children:"The place to track your weight."})]})},b=function(e){var t=e.activitiesList,n=e.setActivitiesList;Object(i.useEffect)((function(){fetch("https://fitnesstrac-kr.herokuapp.com/api/activities").then((function(e){return e.json()})).then((function(e){console.log(e),n(e)})).catch((function(e){console.log("something"),console.error(e)}))}),[]),console.log(t);var r=t.map((function(e){return Object(l.jsxs)("div",{id:"listOfActivities",children:[Object(l.jsxs)("h1",{children:["Activity#: ",e.id]}),Object(l.jsxs)("h2",{children:["Name: ",e.name]}),Object(l.jsxs)("h3",{children:["Description: ",e.description]})]})}));return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{id:"actheader",children:"Activities"}),r]})},O=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(i.useState)(""),a=Object(r.a)(s,2),o=a[0],u=a[1],j=Object(i.useState)(""),h=Object(r.a)(j,2),d=h[0],b=h[1];return console.log(o,d),Object(l.jsxs)("div",{id:"myroutines",children:[Object(l.jsx)("h1",{children:"My Routines"}),Object(l.jsx)("button",{className:"createAct",onClick:function(){return c(!0)},children:"Create Activity"}),n?Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{type:"text",onChange:function(e){return u(e.target.value)},value:o,placeholder:"Name"}),Object(l.jsx)("input",{type:"text",onChange:function(e){return b(e.target.value)},value:d,placeholder:"Goal"}),Object(l.jsx)("button",{onClick:!0,children:" Create"})]}):null]})},p=n(6),x=(n(15),function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(p.b,{to:"/",children:"Home"}),Object(l.jsx)(p.b,{to:"/myroutines",children:"My Routines"}),Object(l.jsx)(p.b,{to:"/activities",children:"Activities"}),Object(l.jsx)(p.b,{to:"/routines",children:"Routines"}),Object(l.jsx)(p.b,{to:"/login",children:"Login"}),Object(l.jsx)(p.b,{to:"/register",children:"Register"})]})}),f=function(){Object(j.f)();var e=Object(i.useState)(""),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(i.useState)(""),a=Object(r.a)(s,2),h=a[0],d=a[1];function b(){return(b=Object(u.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n.length<1)){e.next=5;break}return alert("username is required to register"),e.abrupt("return");case 5:if(!(h.length<1)){e.next=10;break}return alert("password is required to register"),e.abrupt("return");case 10:if(!(n.length<3)){e.next=15;break}return alert("username must be longer than 3 characters"),e.abrupt("return");case 15:if(!(h.length<3)){e.next=18;break}return alert("password must be longer than 3 characters"),e.abrupt("return");case 18:return t.preventDefault(),r=!1,e.next=22,fetch("https://fitnesstrac-kr.herokuapp.com/api/users/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t.target.username.value,password:t.target.password.value})}).then((function(e){return console.log(e),r=!e.ok,e.json()})).then((function(e){if(r)throw new Error(e.message);alert("You're signed up!"),localStorage.setItem("token",e.token),console.log(e)})).catch(alert);case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(l.jsxs)("div",{id:"register",children:[Object(l.jsx)("h1",{children:"REGISTER"}),Object(l.jsxs)("form",{onSubmit:function(e){return b.apply(this,arguments)},children:[Object(l.jsx)("input",{type:"text",onChange:function(e){return c(e.target.value)},value:n,required:!0,name:"username",placeholder:"username"}),Object(l.jsx)("input",{type:"password",onChange:function(e){return d(e.target.value)},value:h,required:!0,name:"password",placeholder:"password"}),Object(l.jsx)("button",{children:"Register"})]}),Object(l.jsx)("h2",{children:"Already a member? Head over to the Login page and get signed in!"})]})},g=function(e){var t=e.routinesList,n=e.setRoutinesList;Object(i.useEffect)((function(){fetch("https://fitnesstrac-kr.herokuapp.com/api/routines").then((function(e){return e.json()})).then((function(e){console.log(e),n(e)})).catch((function(e){console.log("something"),console.error(e)}))}),[]),console.log(t);var r=t.map((function(e){return Object(l.jsxs)("div",{id:"listOfRoutines",children:[Object(l.jsxs)("h1",{children:["User: ",e.creatorName]}),Object(l.jsxs)("h2",{children:["Name: ",e.name]}),Object(l.jsxs)("h3",{children:["goal: ",e.goal]})]})}));return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{id:"routinesheader",children:"Routines"}),r]})},m=function(){var e=Object(i.useState)(!0),t=Object(r.a)(e,2),n=(t[0],t[1],Object(i.useState)([])),c=Object(r.a)(n,2),s=c[0],a=c[1],o=Object(i.useState)([]),u=Object(r.a)(o,2),m=u[0],v=u[1];return console.log(s),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(p.a,{children:[Object(l.jsx)("div",{id:"navbar",children:Object(l.jsx)(x,{})}),Object(l.jsx)("main",{children:Object(l.jsx)(j.c,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)(j.a,{exact:!0,path:"/login",children:Object(l.jsx)(h,{})}),Object(l.jsx)(j.a,{exact:!0,path:"/activities",children:Object(l.jsx)(b,{activitiesList:m,setActivitiesList:v})}),Object(l.jsx)(j.a,{exact:!0,path:"/myroutines",children:Object(l.jsx)(O,{})}),Object(l.jsx)(j.a,{exact:!0,path:"/register",children:Object(l.jsx)(f,{})}),Object(l.jsx)(j.a,{exact:!0,path:"/",children:Object(l.jsx)(d,{})}),Object(l.jsx)(j.a,{exact:!0,path:"/routines",children:Object(l.jsx)(g,{routinesList:s,setRoutinesList:a})})]})})})]})})};s.a.render(Object(l.jsx)(m,{}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.fc92eb10.chunk.js.map
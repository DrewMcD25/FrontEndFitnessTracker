(this.webpackJsonpfrontendfitnesstracker=this.webpackJsonpfrontendfitnesstracker||[]).push([[0],{15:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(5),r=n(8),s=n.n(r),i=n(1),o=n(7),a=n.n(o),j=n(10),u=n(2),l=n(0),h=function(e){e.userToken;var t=Object(u.f)(),n=Object(i.useState)(""),r=Object(c.a)(n,2),s=r[0],o=r[1],h=Object(i.useState)(""),d=Object(c.a)(h,2),b=d[0],O=d[1];function x(){return(x=Object(j.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t.push("/");case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(l.jsxs)("div",{id:"lilo",children:[Object(l.jsx)("h1",{children:"LOGIN"}),Object(l.jsxs)("form",{id:"form",onSubmit:function(e){return x.apply(this,arguments)},children:[Object(l.jsx)("input",{type:"text",onChange:function(e){return o(e.target.value)},value:s,required:!0,name:"username",placeholder:"username"}),Object(l.jsx)("input",{type:"password",onChange:function(e){return O(e.target.value)},value:b,required:!0,name:"password",placeholder:"password"}),Object(l.jsx)("button",{children:"Log In"})]}),Object(l.jsx)("h2",{children:"Not a member? Create an account to create routines! Otherwise, login with existing account!"})]})},d=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{id:"welcome",children:"Welcome to My Fitness Tracker"}),Object(l.jsx)("p",{id:"body",children:"The place to track your weight."})]})},b=function(e){var t=e.activitiesList,n=e.setActivitiesList;Object(i.useEffect)((function(){fetch("https://fitnesstrac-kr.herokuapp.com/api/activities").then((function(e){return e.json()})).then((function(e){console.log(e),n(e)})).catch((function(e){console.log("something"),console.error(e)}))}),[]),console.log(t);var c=t.map((function(e){return Object(l.jsxs)("div",{id:"listOfActivities",children:[Object(l.jsxs)("h1",{children:["Activity#: ",e.id]}),Object(l.jsxs)("h2",{children:["Name: ",e.name]}),Object(l.jsxs)("h3",{children:["Description: ",e.description]})]})}));return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{id:"actheader",children:"Activities"}),c]})},O=function(){var e=Object(i.useState)(!1),t=Object(c.a)(e,2),n=t[0],r=t[1],s=Object(i.useState)(""),o=Object(c.a)(s,2),a=o[0],j=o[1],u=Object(i.useState)(""),h=Object(c.a)(u,2),d=h[0],b=h[1];return console.log(a,d),Object(l.jsxs)("div",{id:"myroutines",children:[Object(l.jsx)("h1",{children:"My Routines"}),Object(l.jsx)("button",{className:"createAct",onClick:function(){return r(!0)},children:"Create Activity"}),n?Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{type:"text",onChange:function(e){return j(e.target.value)},value:a,placeholder:"Name"}),Object(l.jsx)("input",{type:"text",onChange:function(e){return b(e.target.value)},value:d,placeholder:"Goal"}),Object(l.jsx)("button",{onClick:!0,children:" Create"})]}):null]})},x=n(6),p=(n(15),function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(x.b,{to:"/",children:"Home"}),Object(l.jsx)(x.b,{to:"/myroutines",children:"My Routines"}),Object(l.jsx)(x.b,{to:"/activities",children:"Activities"}),Object(l.jsx)(x.b,{to:"/routines",children:"Routines"}),Object(l.jsx)(x.b,{to:"/login",children:"Login"}),Object(l.jsx)(x.b,{to:"/register",children:"Register"})]})}),f=function(){function e(){return(e=Object(j.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("https://fitnesstrac-kr.herokuapp.com/api/users/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t.target.username.value,password:t.target.password.value})}).then((function(e){return e.json()})).then((function(e){localStorage.setItem("token",e.token),console.log(e)})).catch(console.error);case 3:alert(error.message)("Uh Oh Something Went Wrong");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(l.jsxs)("div",{id:"register",children:[Object(l.jsx)("h1",{children:"REGISTER"}),Object(l.jsxs)("form",{onSubmit:function(t){return e.apply(this,arguments)},children:[Object(l.jsx)("input",{type:"text",required:!0,name:"username",placeholder:"username"}),Object(l.jsx)("input",{type:"password",required:!0,name:"password",placeholder:"password"}),Object(l.jsx)("button",{children:"Register"})]}),Object(l.jsx)("h2",{children:"Already a member? Head over to the Login page and get signed in!"})]})},m=function(e){var t=e.routinesList,n=e.setRoutinesList;Object(i.useEffect)((function(){fetch("https://fitnesstrac-kr.herokuapp.com/api/routines").then((function(e){return e.json()})).then((function(e){console.log(e),n(e)})).catch((function(e){console.log("something"),console.error(e)}))}),[]),console.log(t);var c=t.map((function(e){return Object(l.jsxs)("div",{id:"listOfRoutines",children:[Object(l.jsxs)("h1",{children:["User: ",e.creatorName]}),Object(l.jsxs)("h2",{children:["Name: ",e.name]}),Object(l.jsxs)("h3",{children:["goal: ",e.goal]})]})}));return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{id:"routinesheader",children:"Routines"}),c]})},v=function(){var e=Object(i.useState)(!0),t=Object(c.a)(e,2),n=(t[0],t[1],Object(i.useState)([])),r=Object(c.a)(n,2),s=r[0],o=r[1],a=Object(i.useState)([]),j=Object(c.a)(a,2),v=j[0],g=j[1];return console.log(s),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(x.a,{children:[Object(l.jsx)("div",{id:"navbar",children:Object(l.jsx)(p,{})}),Object(l.jsx)("main",{children:Object(l.jsx)(u.c,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)(u.a,{exact:!0,path:"/login",children:Object(l.jsx)(h,{})}),Object(l.jsx)(u.a,{exact:!0,path:"/activities",children:Object(l.jsx)(b,{activitiesList:v,setActivitiesList:g})}),Object(l.jsx)(u.a,{exact:!0,path:"/myroutines",children:Object(l.jsx)(O,{})}),Object(l.jsx)(u.a,{exact:!0,path:"/register",children:Object(l.jsx)(f,{})}),Object(l.jsx)(u.a,{exact:!0,path:"/",children:Object(l.jsx)(d,{})}),Object(l.jsx)(u.a,{exact:!0,path:"/routines",children:Object(l.jsx)(m,{routinesList:s,setRoutinesList:o})})]})})})]})})};s.a.render(Object(l.jsx)(v,{}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.9d34b532.chunk.js.map
(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{118:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),r=a(6),s=a.n(r),o=a(64),l=a(8);a(73);var i=function(){return Object(n.jsx)("div",{className:"container login-container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(n.jsx)("h3",{children:"Ingreso"}),Object(n.jsxs)("form",{children:[Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo"})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a"})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(n.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(n.jsx)("h3",{children:"Registro"}),Object(n.jsxs)("form",{children:[Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre"})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo"})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a"})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a"})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})},j=a(23),d=a(15),b=a.n(d),u=(a(75),a(52));a(78);var m=function(){return Object(n.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(n.jsx)("span",{className:"navbar-brand",children:"Hello"}),Object(n.jsxs)("button",{className:"btn btn-outline-danger",children:[Object(n.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(n.jsx)("span",{children:" Salir"})]})]})},O={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}};var v=function(e){var t=e.event,a=t.title,c=t.user;return Object(n.jsxs)("div",{children:[Object(n.jsx)("strong",{children:a}),Object(n.jsxs)("span",{children:["- ",c.name]})]})},p=a(34),f=a(7),h=a(45),x=a.n(h),g=a(46),N=a.n(g),y=a(62),E=a.n(y),w=a(11),C="[UI] Open modal",S="[UI] Close modal",D="[Event] Set active",k="[Event] Add new event",I="[Event] Clear active event",_="[Event] Event updated",T="[Event] Event deleted",A=function(){return{type:C}},R=function(){return{type:I}},H={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};x.a.setAppElement("#root");var M=b()().minutes(0).seconds(0).add(1,"hours"),V=M.clone().add(1,"hours"),F={title:"",notes:"",start:M.toDate(),end:V.toDate()};var U=function(){var e=Object(w.c)((function(e){return e.ui})).modalOpen,t=Object(w.c)((function(e){return e.calendar})).activeEvent,a=Object(w.b)(),r=Object(c.useState)(M.toDate()),s=Object(j.a)(r,2),o=s[0],l=s[1],i=Object(c.useState)(V.toDate()),d=Object(j.a)(i,2),u=d[0],m=d[1],O=Object(c.useState)(!0),v=Object(j.a)(O,2),h=v[0],g=v[1],y=Object(c.useState)(F),C=Object(j.a)(y,2),D=C[0],I=C[1],T=D.title,A=D.notes,U=D.start,L=D.end;Object(c.useEffect)((function(){I(t||F)}),[t,I]);var q=function(e){var t=e.target;I(Object(f.a)(Object(f.a)({},D),{},Object(p.a)({},t.name,t.value)))},B=function(){a({type:S}),I(F),a(R())};return Object(n.jsxs)(x.a,{isOpen:e,style:H,onRequestClose:B,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo",children:[Object(n.jsxs)("h1",{children:[" ",t?"Editando evento":"Crear evento"," "]}),Object(n.jsx)("hr",{}),Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=b()(U),c=b()(L);if(n.isSameOrAfter(c))E.a.fire("Error","La fecha de fin debe ser mayor que la de inicio.","error");else{if(T.trim().length<2)return g(!1);a(t?{type:_,payload:D}:function(e){return{type:k,payload:e}}(Object(f.a)(Object(f.a)({},D),{},{id:(new Date).getTime(),user:{_id:12391,name:"Marcos"}}))),g(!0),B()}},className:"container",children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Fecha y hora inicio"}),Object(n.jsx)(N.a,{className:"form-control",onChange:function(e){console.log(e),l(e),I(Object(f.a)(Object(f.a)({},D),{},{start:e}))},value:o})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Fecha y hora fin"}),Object(n.jsx)(N.a,{className:"form-control",onChange:function(e){m(e),I(Object(f.a)(Object(f.a)({},D),{},{end:e}))},minDate:o,value:u})]}),Object(n.jsx)("hr",{}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Titulo y notas"}),Object(n.jsx)("input",{type:"text",className:"form-control ".concat(!h&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:T,onChange:q}),Object(n.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:A,onChange:q}),Object(n.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(n.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(n.jsx)("i",{className:"far fa-save"}),Object(n.jsx)("span",{children:" Guardar"})]})]})]})};var L=function(){var e=Object(w.b)();return Object(n.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(A())},children:Object(n.jsx)("i",{className:"fas fa-plus"})})};var q=function(){var e=Object(w.c)((function(e){return e.calendar})).activeEvent,t=Object(w.b)();return Object(n.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){t({type:T,payload:e})},children:[Object(n.jsx)("i",{className:"fas fa-trash"}),Object(n.jsx)("span",{children:" Borrar evento"})]})};b.a.locale("es");var B=Object(u.b)(b.a);var G=function(){var e=Object(c.useState)(localStorage.getItem("lastView")||"month"),t=Object(j.a)(e,2),a=t[0],r=t[1],s=Object(w.b)(),o=Object(w.c)((function(e){return e.calendar})),l=o.events,i=o.activeEvent;return Object(n.jsxs)("div",{className:"calendar-screen",children:[Object(n.jsx)(m,{}),Object(n.jsx)(u.a,{localizer:B,events:l,startAccessor:"start",endAccessor:"end",messages:O,eventPropGetter:function(e,t,a,n){return{style:{backgroundColor:"#367CF7",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(e){s(A())},onSelectEvent:function(e){s({type:D,payload:e})},onView:function(e){r(e),localStorage.setItem("lastView",e)},onSelectSlot:function(e){s(R())},selectable:!0,view:a,components:{event:v}}),i&&Object(n.jsx)(q,{}),Object(n.jsx)(L,{}),Object(n.jsx)(U,{})]})};var J=function(){return Object(n.jsx)(o.a,{children:Object(n.jsx)("div",{children:Object(n.jsxs)(l.d,{children:[Object(n.jsx)(l.b,{exact:!0,path:"/login",component:i}),Object(n.jsx)(l.b,{exact:!0,path:"/",component:G}),Object(n.jsx)(l.a,{to:"/"})]})})})},P=a(20),X={modalOpen:!1},z=a(67),K={events:[{id:(new Date).getTime(),title:"Cumplea\xf1os del jefe",start:b()().toDate(),end:b()().add(2,"hours").toDate(),user:{_id:"123",name:"Andres"}}],activeEvent:null},Q=Object(P.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(f.a)(Object(f.a)({},e),{},{modalOpen:!0});case S:return Object(f.a)(Object(f.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(f.a)(Object(f.a)({},e),{},{activeEvent:t.payload});case k:return Object(f.a)(Object(f.a)({},e),{},{events:[t.payload].concat(Object(z.a)(e.events))});case I:return Object(f.a)(Object(f.a)({},e),{},{activeEvent:null});case _:return Object(f.a)(Object(f.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case T:return Object(f.a)(Object(f.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});default:return e}}}),W=a(66),Y="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||P.d,Z=Object(P.e)(Q,Y(Object(P.a)(W.a))),$=function(){return Object(n.jsx)(w.a,{store:Z,children:Object(n.jsx)(J,{})})};a(118);s.a.render(Object(n.jsx)($,{}),document.getElementById("root"))},73:function(e,t,a){}},[[120,1,2]]]);
//# sourceMappingURL=main.7c465629.chunk.js.map
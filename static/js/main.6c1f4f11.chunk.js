(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{35:function(e,t,c){},36:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(26),i=c.n(a),j=(c(35),c(10)),r=c(12),h=c(3),l=(c(36),c(2)),o=function(e){var t=e.show;return Object(l.jsx)("div",{className:t?"sidenav active":"sidenav",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"/",children:"Latest"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"/about",children:"New posts"})}),Object(l.jsx)("a",{href:"https://google.com",children:Object(l.jsx)("svg",{className:"navbar-svg",xmlns:"http://www.w3.org/2000/svg",width:"28",fill:"#fb5607",height:"28",viewBox:"0 0 24 24",children:Object(l.jsx)("path",{d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"})})}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/ivan-nikolic-750881186/",children:Object(l.jsx)("svg",{className:"navbar-svg",xmlns:"http://www.w3.org/2000/svg",width:"28",fill:"#fb5607",height:"28",viewBox:"0 0 24 24",children:Object(l.jsx)("path",{d:"M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"})})}),Object(l.jsx)("a",{href:"https://google.com",children:Object(l.jsx)("svg",{className:"navbar-svg",xmlns:"http://www.w3.org/2000/svg",width:"28",fill:"#fb5607",height:"28",viewBox:"0 0 24 24",children:Object(l.jsx)("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})})]})})},b=c(28),d=c.n(b),O=c(29),x=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(6),i=Object(j.a)(a,2),r=i[0],h=i[1],o=Object(s.useState)(!0),b=Object(j.a)(o,2),x=b[0],m=b[1],u=Object(s.useState)(""),v=Object(j.a)(u,2),p=v[0],w=v[1];return Object(s.useEffect)((function(){d.a.get("https://ivans-blog.herokuapp.com/api/posts/").then((function(e){console.log(e.data),n(e.data),m(!1)}))}),[]),x?Object(l.jsx)(O.a,{className:"spinner",size:58}):Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{className:"input-search",type:"search",placeholder:"Search title...",onChange:function(e){w(e.target.value)}}),Object(l.jsx)("h5",{className:"main-title",children:"New Posts"}),c.filter((function(e){return""==p||e.title.toLowerCase().includes(p.toLowerCase())?e:void 0})).slice(0,r).map((function(e){return Object(l.jsxs)("div",{className:"mainDiv",children:[Object(l.jsx)("h5",{children:e.title}),Object(l.jsx)("img",{src:e.image,alt:"New"}),Object(l.jsx)("p",{children:e.description}),Object(l.jsx)("p",{children:e.date})]},e.id)})),Object(l.jsx)("button",{className:"load-more",onClick:function(){h((function(e){return e+6}))},children:"Load more..."})]})},m=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"About"})})},u=c(30);var v=function(){var e=Object(s.useState)(!1),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(r.a,{children:[Object(l.jsxs)("header",{children:[Object(l.jsx)(u.a,{className:"giHam",onClick:function(){n(!c)}}),Object(l.jsxs)("p",{children:["BLOG",Object(l.jsx)("span",{children:"man"})]})]}),Object(l.jsx)(o,{show:c}),Object(l.jsxs)("div",{className:"main",children:[Object(l.jsx)(h.a,{path:"/",exact:!0,component:x}),Object(l.jsx)(h.a,{path:"/about",exact:!0,component:m})]})]})})};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.6c1f4f11.chunk.js.map
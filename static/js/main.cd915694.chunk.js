(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{35:function(e,t,c){},36:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(26),i=c.n(n),j=(c(35),c(36),c(10)),r=c(2),l=function(e){var t=e.show;return Object(r.jsx)("div",{className:t?"sidenav":"sidenav active",children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("a",{href:"https://google.com",children:Object(r.jsx)("svg",{className:"navbar-svg",xmlns:"http://www.w3.org/2000/svg",width:"28",fill:"#fb5607",height:"28",viewBox:"0 0 24 24",children:Object(r.jsx)("path",{d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"})})}),Object(r.jsx)("a",{href:"https://www.linkedin.com/in/ivan-nikolic-750881186/",children:Object(r.jsx)("svg",{className:"navbar-svg",xmlns:"http://www.w3.org/2000/svg",width:"28",fill:"#fb5607",height:"28",viewBox:"0 0 24 24",children:Object(r.jsx)("path",{d:"M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"})})}),Object(r.jsx)("a",{href:"https://google.com",children:Object(r.jsx)("svg",{className:"navbar-svg",xmlns:"http://www.w3.org/2000/svg",width:"28",fill:"#fb5607",height:"28",viewBox:"0 0 24 24",children:Object(r.jsx)("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})}),Object(r.jsx)("p",{className:"name",children:"Ivan Nikolic 2021"})]})})},o=c(27),h=c.n(o),b=c(28),d=c(29),O=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(6),i=Object(j.a)(n,2),o=i[0],O=i[1],x=Object(s.useState)(!0),m=Object(j.a)(x,2),p=m[0],v=m[1],u=Object(s.useState)(""),f=Object(j.a)(u,2),g=f[0],w=f[1],N=Object(s.useState)(!0),k=Object(j.a)(N,2),z=k[0],S=k[1];return Object(s.useEffect)((function(){h.a.get("https://ivans-blog.herokuapp.com/api/posts/").then((function(e){console.log(e.data),a(e.data),v(!1)}))}),[]),p?Object(r.jsx)(b.a,{className:"spinner",size:58}):Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{className:"input-search",type:"search",placeholder:"Search title...",onChange:function(e){w(e.target.value)}}),Object(r.jsx)(l,{show:z}),Object(r.jsxs)("header",{children:[Object(r.jsx)(d.a,{className:"giHam",onClick:function(){S(!z)}}),Object(r.jsxs)("p",{children:["BLOG",Object(r.jsx)("span",{children:"man"})]})]}),Object(r.jsx)("h5",{className:"main-title",children:"New Posts"}),c.filter((function(e){return""===g||e.title.toLowerCase().includes(g.toLowerCase())?e:void 0})).slice(0,o).map((function(e){return Object(r.jsxs)("div",{className:"mainDiv",children:[Object(r.jsx)("h5",{children:e.title}),Object(r.jsx)("img",{src:e.image,alt:"New"}),Object(r.jsx)("p",{children:e.description}),Object(r.jsx)("p",{children:e.date})]},e.id)})),Object(r.jsx)("button",{className:"load-more",onClick:function(){O((function(e){return e+6}))},children:"Load more..."})]})},x=c.p+"static/media/avatar.b7fa7d63.jpg",m=function(){return Object(r.jsxs)("div",{className:"main-portfolio",children:[Object(r.jsxs)("div",{className:"portfolio",children:[Object(r.jsxs)("h2",{children:["Hi, I'm ",Object(r.jsx)("br",{})," Ivan Nikolic"]}),Object(r.jsx)("h4",{children:"I am front-end developer,father,traveller,bla bla bla..."})]}),Object(r.jsx)("br",{}),Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:x,alt:"avatar"})})]})},p=c(12),v=c(3),u=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(p.a,{children:[Object(r.jsxs)("div",{className:"links",children:[Object(r.jsx)(p.b,{className:"link1",to:"/",children:"Blogs"}),Object(r.jsx)(p.b,{className:"link2",to:"/portfolio",children:"Portfolio"})]}),Object(r.jsx)("div",{className:"main",children:Object(r.jsxs)(v.c,{children:[Object(r.jsx)(v.a,{exact:!0,path:"/",component:O}),Object(r.jsx)(v.a,{path:"/portfolio",component:m}),Object(r.jsx)(v.a,{render:function(){return Object(r.jsx)("h1",{children:"Choose your path......"})}})]})})]})})};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(u,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.cd915694.chunk.js.map
_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"23aj":function(e,t,n){"use strict";n.r(t);var r=n("pcGQ"),i=n.n(r),a=n("5k4D"),o=n("6e2+"),l=n("z3wr"),s=n.n(l),c=n("r0ML"),u=n.n(c),m=n("1m5I"),f=n("2bGm"),b=n("NgSL"),d=n("clan"),p=u.a.createElement,x=function(){var e=function(){var e=Object(m.useQuery)(d.default,null);return Object(o.a)(e,1)[0]}(),t=Object(m.useMutation)(b.default),n=Object(o.a)(t,1)[0];return e?p(u.a.Fragment,null,p("button",{className:"button small",onClick:Object(a.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:case"end":return e.stop()}}),e)})))},"Logout"),p("div",null,"User id: ",p("code",null,e.id),p("br",null),"User role: ",p("code",null,e.role))):p(u.a.Fragment,null,p(m.Link,{href:"/signup"},p("a",{className:"button small"},p("strong",null,"Sign Up"))),p(m.Link,{href:"/login"},p("a",{className:"button small"},p("strong",null,"Login"))))},g=function(){return p("div",{className:"jsx-3936102615 container"},p("main",{className:"jsx-3936102615"},p("div",{className:"jsx-3936102615 logo"},p("img",{src:"/logo.png",alt:"blitz.js",className:"jsx-3936102615"})),p("p",{className:"jsx-3936102615"},p("strong",{className:"jsx-3936102615"},"Congrats!")," Your app is ready, including user sign-up and log-in."),p("div",{style:{marginTop:"1rem",marginBottom:"1rem"},className:"jsx-3936102615 buttons"},p(c.Suspense,{fallback:"Loading..."},p(x,null))),p("p",{className:"jsx-3936102615"},p("strong",{className:"jsx-3936102615"},"To add a new model to your app, ",p("br",{className:"jsx-3936102615"}),"run the following in your terminal:")),p("pre",{className:"jsx-3936102615"},p("code",{className:"jsx-3936102615"},"blitz generate all project name:string")),p("pre",{className:"jsx-3936102615"},p("code",{className:"jsx-3936102615"},"blitz prisma migrate dev --preview-feature")),p("div",{className:"jsx-3936102615"},p("p",{className:"jsx-3936102615"},"Then ",p("strong",{className:"jsx-3936102615"},"restart the server")),p("pre",{className:"jsx-3936102615"},p("code",{className:"jsx-3936102615"},"Ctrl + c")),p("pre",{className:"jsx-3936102615"},p("code",{className:"jsx-3936102615"},"blitz start")),p("p",{className:"jsx-3936102615"},"and go to"," ",p(m.Link,{href:"/projects"},p("a",{className:"jsx-3936102615"},"/projects")))),p("div",{style:{marginTop:"5rem"},className:"jsx-3936102615 buttons"},p("a",{href:"https://blitzjs.com/docs/getting-started?utm_source=blitz-new&utm_medium=app-template&utm_campaign=blitz-new",target:"_blank",rel:"noopener noreferrer",className:"jsx-3936102615 button"},"Documentation"),p("a",{href:"https://github.com/blitz-js/blitz",target:"_blank",rel:"noopener noreferrer",className:"jsx-3936102615 button-outline"},"Github Repo"),p("a",{href:"https://slack.blitzjs.com",target:"_blank",rel:"noopener noreferrer",className:"jsx-3936102615 button-outline"},"Slack Community"))),p("footer",{className:"jsx-3936102615"},p("a",{href:"https://blitzjs.com?utm_source=blitz-new&utm_medium=app-template&utm_campaign=blitz-new",target:"_blank",rel:"noopener noreferrer",className:"jsx-3936102615"},"Powered by Blitz.js")),p(s.a,{id:"3936102615"},['@import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;700&display=swap");','html,body{padding:0;margin:0;font-family:"Libre Franklin",-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen, Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;}',"*{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;box-sizing:border-box;}",".container{min-height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","main{padding:5rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","main p{font-size:1.2rem;}","p{text-align:center;}","footer{width:100%;height:60px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#45009d;}","footer a{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","footer a{color:#f4f4f4;-webkit-text-decoration:none;text-decoration:none;}",".logo{margin-bottom:2rem;}",".logo img{width:300px;}",".buttons{display:grid;grid-auto-flow:column;grid-gap:0.5rem;}",".button{font-size:1rem;background-color:#6700eb;padding:1rem 2rem;color:#f4f4f4;text-align:center;}",".button.small{padding:0.5rem 1rem;}",".button:hover{background-color:#45009d;}",".button-outline{border:2px solid #6700eb;padding:1rem 2rem;color:#6700eb;text-align:center;}",".button-outline:hover{border-color:#45009d;color:#45009d;}","pre{background:#fafafa;border-radius:5px;padding:0.75rem;text-align:center;}","code{font-size:0.9rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono, Bitstream Vera Sans Mono,Courier New,monospace;}",".grid{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;margin-top:3rem;}","@media (max-width:600px){.grid{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}"]))};g.getLayout=function(e){return p(f.a,{title:"Home"},e)};t.default=g},"2bGm":function(e,t,n){"use strict";var r=n("r0ML"),i=n.n(r),a=n("1m5I"),o=i.a.createElement;t.a=function(e){var t=e.title,n=e.children;return o(i.a.Fragment,null,o(a.Head,null,o("title",null,t||"blitz-tutorial"),o("link",{rel:"icon",href:"/favicon.ico"})),n)}},"5k4D":function(e,t,n){"use strict";function r(e,t,n,r,i,a,o){try{var l=e[a](o),s=l.value}catch(c){return void n(c)}l.done?t(s):Promise.resolve(s).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,a){var o=e.apply(t,n);function l(e){r(o,i,a,l,s,"next",e)}function s(e){r(o,i,a,l,s,"throw",e)}l(void 0)}))}}n.d(t,"a",(function(){return i}))},"6e2+":function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,a=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(s){i=!0,a=s}finally{try{r||null==l.return||l.return()}finally{if(i)throw a}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return i}))},"7dp0":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},AWZb:function(e,t){},NgSL:function(e,t,n){"use strict";var r=n("pis2"),i=n("AWZb");t.default=Object(r.getIsomorphicEnhancedResolver)(i,"app/_resolvers/auth/mutations/logout","logout","mutation",void 0,{warmApiEndpoints:!1})},S9G4:function(e,t){},clan:function(e,t,n){"use strict";var r=n("pis2"),i=n("S9G4");t.default=Object(r.getIsomorphicEnhancedResolver)(i,"app/_resolvers/users/queries/getCurrentUser","getCurrentUser","query",void 0,{warmApiEndpoints:!1})},z3wr:function(e,t,n){e.exports=n("PuOg")}},[["7dp0",1,2,0,3]]]);
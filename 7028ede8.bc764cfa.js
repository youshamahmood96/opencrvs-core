(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{172:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var a=r(2),i=r(10),n=(r(0),r(203)),o={id:"overviewUserTypes",title:"Overview"},s={id:"system_overview/user_types/overviewUserTypes",title:"Overview",description:"OpenCRVS has 6 user types that reflect common user roles present in civil registration workflows. Each user has different roles and responsibilities and has a different set of workqueues that helps them manage their work.",source:"@site/docs/system_overview/user_types/Overview_0b0ded13be854399a6c4d21348abde7b.md",permalink:"/opencrvs-core/docs/system_overview/user_types/overviewUserTypes",sidebar:"docs",previous:{title:"Sitemap",permalink:"/opencrvs-core/docs/system_overview/siteMap"},next:{title:"Field agents",permalink:"/opencrvs-core/docs/system_overview/user_types/fieldAgents"}},l=[{value:"Field agent",id:"field-agent",children:[]},{value:"Registration agent",id:"registration-agent",children:[]},{value:"Registration agent with delegated authority",id:"registration-agent-with-delegated-authority",children:[]},{value:"Registrar",id:"registrar",children:[]},{value:"Registration manager",id:"registration-manager",children:[]},{value:"System administrator",id:"system-administrator",children:[]}],c={rightToc:l};function b(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"OpenCRVS has 6 user types that reflect common user roles present in civil registration workflows. Each user has different roles and responsibilities and has a different set of workqueues that helps them manage their work."),Object(n.b)("h3",{id:"field-agent"},"Field agent"),Object(n.b)("p",null,"This user is usually a community actor who operates in some capacity at the community level e.g. Community Health Worker, local leader, police"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Able to create birth and death registration applications using a tablet/mobile device and send these for review by registration staff"),Object(n.b)("li",{parentName:"ul"},"Able to view their performance stats")),Object(n.b)("h3",{id:"registration-agent"},"Registration agent"),Object(n.b)("p",null,"This user responds to the reality in many countries that the Registrar does not conduct digital activities and instead delegates this responsibility to a data clerk of some description."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Able to create birth and death registration applications in an office setting and send these for approval by the Registrar"),Object(n.b)("li",{parentName:"ul"},"Able to review and validate applications sent from a field agent"),Object(n.b)("li",{parentName:"ul"},"Able to send reviewed applications for approval and registration by the Registrar"),Object(n.b)("li",{parentName:"ul"},"Able to request a correction to a record to the Registrar")),Object(n.b)("h3",{id:"registration-agent-with-delegated-authority"},"Registration agent with delegated authority"),Object(n.b)("p",null,"This user type extends the Registration Agents permissions, as detailed above, to allow the Registration agent to (i) register vital events and (ii) issue a certificate with the digital signature of the Registrar, with the authority delegated by the Registrar themselves."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Able to create birth and death registration applications and register these events"),Object(n.b)("li",{parentName:"ul"},"Able to request a correction to a record to Registration Manager"),Object(n.b)("li",{parentName:"ul"},"Able to assign a Registrar's digital signature to a certificate and issue it")),Object(n.b)("h3",{id:"registrar"},"Registrar"),Object(n.b)("p",null,"This user is the officially mandated individual responsible for civil registration"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Able to create birth and death registration applications and register these events"),Object(n.b)("li",{parentName:"ul"},"Able to view performance reports"),Object(n.b)("li",{parentName:"ul"},"Able to view operational dashboard"),Object(n.b)("li",{parentName:"ul"},"Able to review record correction requests and send for approval to Registration Manager"),Object(n.b)("li",{parentName:"ul"},"Able to request a correction to a record to Registration Manager"),Object(n.b)("li",{parentName:"ul"},"Able to audit users and records")),Object(n.b)("h3",{id:"registration-manager"},"Registration manager"),Object(n.b)("p",null,"This user is responsible for reviewing and processing record correction requests and viewing performance management reports and dashboards"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Able to view performance reports"),Object(n.b)("li",{parentName:"ul"},"Able to view operational dashboard"),Object(n.b)("li",{parentName:"ul"},"Able to review, approve or reject record correction requests submitted from registration offices"),Object(n.b)("li",{parentName:"ul"},"Able to audit users and records")),Object(n.b)("h3",{id:"system-administrator"},"System administrator"),Object(n.b)("p",null,"This user is responsible for administering the system and monitoring performance"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Able to create users and edit user details"),Object(n.b)("li",{parentName:"ul"},"Able to add offices and edit office details"),Object(n.b)("li",{parentName:"ul"},"Able to view performance reports"),Object(n.b)("li",{parentName:"ul"},"Able to view operational dashboard"),Object(n.b)("li",{parentName:"ul"},"Able to audit users and records")))}b.isMDXComponent=!0},203:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var a=r(0),i=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=b(r),p=a,m=d["".concat(o,".").concat(p)]||d[p]||u[p]||n;return r?i.a.createElement(m,s(s({ref:t},c),{},{components:r})):i.a.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<n;c++)o[c]=r[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);
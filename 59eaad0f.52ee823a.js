(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(10),i=(n(0),n(203)),o=(n(205),{id:"technologyIntroduction",title:"Introduction"}),c={id:"technology/technologyIntroduction",title:"Introduction",description:"This is a placeholder so I can complete broken links. It will be ready for review by the 1st June.",source:"@site/docs/technology/Technology_3e6dabd017a0439492c1c65b43d5e4b4.mdx",permalink:"/opencrvs-core/docs/technology/technologyIntroduction",sidebar:"docs",previous:{title:"Configuration management",permalink:"/opencrvs-core/docs/system_admin/configManagement"}},l=[{value:"Architecture",id:"architecture",children:[]},{value:"Interoperability via OpenHIM and FHIR",id:"interoperability-via-openhim-and-fhir",children:[]},{value:"Scalability",id:"scalability",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Security",id:"security",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This is a placeholder so I can complete broken links. It will be ready for review by the 1st June."),Object(i.b)("h2",{id:"architecture"},"Architecture"),Object(i.b)("p",null,"The technical architecture of OpenCRVS was designed to conform to the OpenHIE architectural standard and FHIR."),Object(i.b)("p",null,"The Open Health Information Exchange (OpenHIE) initiative is a Global Mission-Driven Community of Practice. Dedicated to improving the health of the underserved through open and collaborative development & interoperable data standards"),Object(i.b)("p",null,"The OpenHIE framework supports interoperability by creating a reusable architectural framework that introduces a service oriented approach, maximally leveraging health information standards, enabling flexible implementation by country partners, and supporting interchangeability of individual components."),Object(i.b)("p",null,"OpenCRVS architecture follows this framework by being service oriented, modular, scalable and fully configurable to any country context using the OpenHIE reference middleware OpenHIM, a FHIR standardised interoperability system."),Object(i.b)("h2",{id:"interoperability-via-openhim-and-fhir"},"Interoperability via OpenHIM and FHIR"),Object(i.b)("p",null,"If you are aware of FHIR then you may know it was created by Health Level Seven International (HL7) a not-for-profit, ANSI-accredited standards developing organization dedicated to providing a comprehensive framework and related standards for the exchange, integration, sharing and retrieval of electronic health information that supports clinical practice and the management, delivery and evaluation of health services."),Object(i.b)("p",null,"By using FHIR as a database and interoperability standard, OpenCRVS seamlessly connects civil registration to health services. We can receive birth and death notifications from the hospital setting and expose registration events to any other technical system, such as vital statistics databases, or any E services such as National ID, via our FHIR standard API gateways in OpenHIM. OpenHIM can convert in real-time any data format to and from FHIR and we have an example of this integration into DHIS2 and National ID in operation in Bangladesh."),Object(i.b)("h2",{id:"scalability"},"Scalability"),Object(i.b)("p",null,"OpenCRVS is vertically scalable and our pilot is live in Bangladesh a country with a huge population. It can be distributedly deployed on public or private cloud servers across multiple nodes, or installed in a small data centre and easily managed and maintained by a very small team."),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"It is easy to configure and localise using a number of config text files in a resources package."),Object(i.b)("h2",{id:"security"},"Security"),Object(i.b)("p",null,"OpenCRVS uses OAuth 2-Factor authentication in single sign-on across the product and can plugin to ISO 27001 information security standard organisations."),Object(i.b)("p",null,"User roles and access controls are managed in order to segregate personally identifiable data to only to the users who need it. These configurations can be managed in the admin system thus protecting citizen rights."),Object(i.b)("p",null,"All OpenCRVS data is encrypted in transit and at rest and includes daily, automated external back up as an option. Our system has been security tested to UK government standards by an independent CREST certified organisation."))}u.isMDXComponent=!0},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,b=d["".concat(o,".").concat(h)]||d[h]||p[h]||i;return n?a.a.createElement(b,c(c({ref:t},s),{},{components:n})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},204:function(e,t,n){"use strict";var r=n(0),a=n(55);t.a=function(){return Object(r.useContext)(a.a)}},205:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(206);var r=n(204);function a(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},206:function(e,t,n){"use strict";var r=n(8),a=n(20),i=n(207),o="".startsWith;r(r.P+r.F*n(208)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return o?o.call(t,r,n):t.slice(n,n+r.length)===r}})},207:function(e,t,n){var r=n(76),a=n(28);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},208:function(e,t,n){var r=n(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(a){}}return!0}}}]);
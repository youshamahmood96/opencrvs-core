(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{198:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(10),i=(n(0),n(203)),a={id:"configuration",title:"Configuration"},c={id:"system_overview/configuration",title:"Configuration",description:"You are viewing functional documentation that reflects OpenCRVS configured for the Zambia and Bangladesh contexts. In order to use OpenCRVS in your country you will need to configure your own Resources Package that will make OpenCRVS work for you e.g. show the right form fields, include the right users, show the right reference data, and conduct the right client-side validations on things like phone numbers.",source:"@site/docs/system_overview/Configuration_3eb99d0aa2a64f6dbfa192bb8234c1f4.mdx",permalink:"/opencrvs-core/docs/system_overview/configuration",sidebar:"docs",previous:{title:"Interoperability",permalink:"/opencrvs-core/docs/system_overview/interoperability"},next:{title:"Sitemap",permalink:"/opencrvs-core/docs/system_overview/siteMap"}},s=[{value:"What you need to configure OpenCRVS in your country",id:"what-you-need-to-configure-opencrvs-in-your-country",children:[]},{value:"How to get ready for configuration",id:"how-to-get-ready-for-configuration",children:[]}],u={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You are viewing functional documentation that reflects OpenCRVS configured for the Zambia and Bangladesh contexts. In order to use OpenCRVS in your country you will need to configure your own ",Object(i.b)("em",{parentName:"p"},"Resources Package")," that will make OpenCRVS work for you e.g. show the right form fields, include the right users, show the right reference data, and conduct the right client-side validations on things like phone numbers."),Object(i.b)("h2",{id:"what-you-need-to-configure-opencrvs-in-your-country"},"What you need to configure OpenCRVS in your country"),Object(i.b)("p",null,"To configure your resources package, follow the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../technology/technologyIntroduction"}),"technical documentation")," and the instructions detailed in ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"(https://github.com/opencrvs/opencrvs-zambia#can-you-explain-the-resources-module-features-in-more-detail)"}),"GitHub for an example configuration for Zambia"),"."),Object(i.b)("p",null,"The resources package allows you to edit the following items:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default, factory settings database backup zips containing development users, facilities and administrative locations for the nation saved as FHIR resources."),Object(i.b)("li",{parentName:"ul"},"Birth and Death registration form configuration as JSON"),Object(i.b)("li",{parentName:"ul"},"Birth and Death certificate PDF templates as JSON"),Object(i.b)("li",{parentName:"ul"},"Internationalised text as JSON"),Object(i.b)("li",{parentName:"ul"},"SMS gateway provider selection between\xa0",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.clickatell.com/"}),"Clickatell"),"\xa0&\xa0",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.infobip.com/"}),"Infobip")),Object(i.b)("li",{parentName:"ul"},"Country specific environment variables in Docker compose files"),Object(i.b)("li",{parentName:"ul"},"Country specific client config variables in .js files"),Object(i.b)("li",{parentName:"ul"},"Logo for the Civil Registrar department that appears on the certificates and on the review page of the UI"),Object(i.b)("li",{parentName:"ul"},"Any 3rd party API interoperability integrations you require into your OpenCRVS core from")),Object(i.b)("h2",{id:"how-to-get-ready-for-configuration"},"How to get ready for configuration"),Object(i.b)("p",null,"Before you configure OpenCRVS for your context, we suggest spending some time to understand your country's needs and shape your requirements for your version of OpenCRVS around that. A good way of doing this is:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"1.")," Use the ",Object(i.b)("strong",{parentName:"p"},"CRVS Digitisation Guidebook")," to analyse and design your digitized CRVS system."),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.crvs-dgb.org/en/"}),"http://www.crvs-dgb.org/en/")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"2. Conduct a Proof of Concept")),Object(i.b)("p",null,"A proof of concept (PoC) is a demonstration, the purpose of which is to verify that certain concepts or theories have the potential for real-world application. The OpenCRVS PoC is therefore a version of OpenCRVS that is designed for you to determine applicability for your context. It requires 3-4 months (depending on your requirements) and the result is a version of OpenCRVS ready for testing in your country. The country configuration will be based on:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Design research:")," speak to a range of civil registration service providers, stakeholders and customers to establish how the civil registration system should work for them. Civil registration needs to be easy."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Requirements:")," these are outlined in the resources package above.")))}l.isMDXComponent=!0},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,d=p["".concat(a,".").concat(b)]||p[b]||f[b]||i;return n?o.a.createElement(d,c(c({ref:t},u),{},{components:n})):o.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
(()=>{"use strict";var u={},m={};function a(n){var r=m[n];if(r!==void 0)return r.exports;var e=m[n]={id:n,loaded:!1,exports:{}};return u[n].call(e.exports,e,e.exports,a),e.loaded=!0,e.exports}a.m=u,(()=>{var n=[];a.O=(r,e,t,i)=>{if(e){i=i||0;for(var o=n.length;o>0&&n[o-1][2]>i;o--)n[o]=n[o-1];n[o]=[e,t,i];return}for(var s=1/0,o=0;o<n.length;o++){for(var[e,t,i]=n[o],c=!0,l=0;l<e.length;l++)(i&!1||s>=i)&&Object.keys(a.O).every(j=>a.O[j](e[l]))?e.splice(l--,1):(c=!1,i<s&&(s=i));if(c){n.splice(o--,1);var f=t();f!==void 0&&(r=f)}}return r}})(),a.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return a.d(r,{a:r}),r},(()=>{var n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r;a.t=function(e,t){if(t&1&&(e=this(e)),t&8||typeof e=="object"&&e&&(t&4&&e.__esModule||t&16&&typeof e.then=="function"))return e;var i=Object.create(null);a.r(i);var o={};r=r||[null,n({}),n([]),n(n)];for(var s=t&2&&e;typeof s=="object"&&!~r.indexOf(s);s=n(s))Object.getOwnPropertyNames(s).forEach(c=>o[c]=()=>e[c]);return o.default=()=>e,a.d(i,o),i}})(),a.d=(n,r)=>{for(var e in r)a.o(r,e)&&!a.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},a.f={},a.e=n=>Promise.all(Object.keys(a.f).reduce((r,e)=>(a.f[e](n,r),r),[])),a.u=n=>""+({46:"content-type-builder-translation-zh-Hans-json",90:"i18n-translation-de-json",92:"api-tokens-edit-page",96:"email-translation-de-json",123:"ru-json",129:"i18n-translation-es-json",302:"sso-settings-page",320:"en-json",349:"review-workflows-settings-list-view",395:"tr-json",435:"email-translation-it-json",562:"no-json",585:"upload-translation-pt-json",606:"sk-json",615:"upload-translation-uk-json",695:"upload-settings",742:"content-type-builder-translation-th-json",744:"email-translation-cs-json",749:"th-json",801:"Admin-authenticatedApp",830:"he-json",931:"content-type-builder-translation-en-json",994:"content-manager",1001:"content-type-builder-translation-nl-json",1009:"upload-translation-ms-json",1011:"zh-json",1018:"email-translation-ko-json",1023:"content-type-builder-translation-it-json",1056:"upload-translation-tr-json",1157:"email-translation-pt-BR-json",1167:"users-permissions-translation-ko-json",1180:"i18n-translation-tr-json",1312:"ja-json",1331:"upload-translation-es-json",1375:"upload-translation-pt-BR-json",1377:"ko-json",1442:"users-permissions-translation-cs-json",1495:"email-settings-page",1674:"users-permissions-translation-ru-json",1930:"users-permissions-translation-pt-json",2137:"i18n-translation-fr-json",2151:"content-type-builder-translation-id-json",2246:"content-type-builder-translation-dk-json",2248:"gu-json",2282:"users-providers-settings-page",2380:"users-permissions-translation-tr-json",2411:"email-translation-tr-json",2464:"users-permissions-translation-de-json",2489:"upload-translation-ko-json",2492:"transfer-tokens-edit-page",2544:"admin-edit-roles-page",2553:"zh-Hans-json",2567:"content-type-builder-translation-ko-json",2603:"email-translation-en-json",2648:"email-translation-ar-json",2657:"content-type-builder-translation-cs-json",2671:"nl-json",2742:"users-permissions-translation-zh-Hans-json",2812:"audit-logs-settings-page",3025:"ms-json",3038:"upload-translation-sk-json",3043:"email-translation-zh-Hans-json",3095:"users-permissions-translation-sk-json",3098:"users-permissions-translation-fr-json",3166:"email-translation-pt-json",3206:"email-translation-nl-json",3278:"vi-json",3304:"content-type-builder-translation-tr-json",3340:"pt-json",3455:"admin-roles-list",3516:"ca-json",3530:"users-permissions-translation-vi-json",3552:"i18n-settings-page",3650:"upload",3677:"Admin_pluginsPage",3702:"users-permissions-translation-pl-json",3825:"email-translation-dk-json",3948:"content-type-builder-translation-pl-json",3964:"content-type-builder-translation-ms-json",3981:"Admin_homePage",4021:"upload-translation-de-json",4121:"webhook-list-page",4179:"users-permissions-translation-id-json",4263:"admin-edit-users",4299:"api-tokens-create-page",4302:"content-type-builder-translation-zh-json",4409:"review-workflows-settings-edit-view",4587:"email-translation-th-json",4693:"email-translation-fr-json",4804:"upload-translation-ru-json",4816:"transfer-tokens-create-page",4987:"upload-translation-pl-json",5053:"upload-translation-zh-json",5162:"webhook-edit-page",5199:"admin-users",5222:"upload-translation-it-json",5296:"i18n-translation-dk-json",5388:"email-translation-ru-json",5396:"users-permissions-translation-zh-json",5516:"Admin_marketplace",5538:"admin-app",5751:"email-translation-es-json",5880:"upload-translation-ja-json",5894:"hu-json",5895:"Admin_settingsPage",5905:"content-type-builder-list-view",5906:"content-type-builder-translation-pt-BR-json",6232:"upload-translation-th-json",6280:"i18n-translation-ko-json",6332:"hi-json",6377:"users-permissions-translation-dk-json",6434:"upload-translation-en-json",6460:"users-permissions-translation-en-json",6745:"email-translation-uk-json",6784:"email-translation-ms-json",6817:"it-json",6831:"upload-translation-zh-Hans-json",6836:"users-permissions-translation-uk-json",6848:"email-translation-zh-json",6901:"de-json",7048:"users-permissions-translation-nl-json",7094:"users-permissions-translation-ar-json",7155:"content-type-builder-translation-de-json",7186:"content-type-builder-translation-ru-json",7327:"email-translation-vi-json",7347:"highlight.js",7403:"uk-json",7465:"upload-translation-dk-json",7519:"cs-json",7663:"email-translation-id-json",7808:"i18n-translation-zh-json",7817:"users-permissions-translation-es-json",7828:"users-permissions-translation-th-json",7833:"upload-translation-fr-json",7846:"pl-json",7898:"dk-json",7934:"content-type-builder-translation-pt-json",7958:"ar-json",7997:"content-type-builder-translation-sk-json",8006:"fr-json",8056:"api-tokens-list-page",8175:"i18n-translation-en-json",8178:"email-translation-ja-json",8329:"content-type-builder-translation-sv-json",8342:"content-type-builder-translation-es-json",8360:"eu-json",8367:"es-json",8418:"users-email-settings-page",8423:"upload-translation-ca-json",8467:"users-permissions-translation-sv-json",8481:"email-translation-pl-json",8573:"content-type-builder-translation-uk-json",8736:"users-permissions-translation-pt-BR-json",8853:"users-roles-settings-page",8880:"content-type-builder",8897:"id-json",8907:"content-type-builder-translation-ja-json",8936:"review-workflows-settings-create-view",8965:"content-type-builder-translation-fr-json",9220:"users-permissions-translation-ms-json",9303:"sv-json",9366:"i18n-translation-pl-json",9412:"email-translation-sk-json",9460:"users-advanced-settings-page",9497:"Admin_profilePage",9501:"Admin_InternalErrorPage",9502:"users-permissions-translation-ja-json",9511:"content-type-builder-translation-ar-json",9514:"Upload_ConfigureTheView",9600:"transfer-tokens-list-page",9647:"pt-BR-json",9726:"sa-json",9737:"i18n-translation-ru-json",9762:"i18n-translation-zh-Hans-json",9797:"upload-translation-he-json",9903:"ml-json",9905:"users-permissions-translation-it-json"}[n]||n)+"."+{46:"21c530ec",90:"41f8dc03",92:"18ae4304",96:"8f6e4015",123:"6151b060",129:"9eaf7c99",169:"8f1522f6",302:"98a18507",320:"9c81d370",349:"f5995cf8",395:"2ffedaf5",435:"86b4c206",562:"f50e9835",566:"cd3da88f",568:"a473d800",585:"1ebe1af0",606:"acfda7a5",615:"5858ed8b",695:"8de792de",742:"9e25c9d4",744:"7a3c00a1",749:"d3c3a93c",801:"b3bfae07",830:"3d977273",931:"d73dcde1",994:"0ec5af47",1001:"af464145",1009:"15453a48",1011:"2ba77861",1018:"e949bc93",1023:"9b71854c",1056:"7e3dc8d5",1057:"30c84b8d",1157:"72951123",1167:"39157426",1180:"58e2d493",1312:"09f8f2fc",1331:"cc00d4dd",1375:"22dab30e",1377:"95b35a2f",1442:"dfd02a69",1470:"f5eadf35",1495:"58a6353e",1588:"83be99d5",1674:"be8bca40",1924:"de30ead3",1930:"1cc7d3e3",2137:"7882f8d2",2151:"cfcd9929",2246:"9b8b78ea",2248:"bfda6109",2282:"1295602d",2380:"64e2b982",2411:"74f4e6c7",2458:"41a62144",2464:"1db80eb3",2489:"1c7e2e5d",2492:"6fd8f55b",2501:"afb38326",2544:"c7764420",2553:"b2f757db",2567:"170bc1cd",2603:"03273fca",2648:"743a6463",2657:"24ea4ee5",2671:"d56562c5",2742:"79f55333",2786:"02196178",2812:"8458ec44",3025:"9e421aa7",3038:"d6ffdeea",3043:"aee1409d",3095:"ea61376c",3098:"6e16b07a",3166:"748f9986",3206:"8181ab2c",3278:"9a57ac13",3304:"8ee50f63",3340:"e2ccdc17",3455:"631e79c5",3467:"3e7fe47d",3516:"bbbff621",3530:"26c89c79",3552:"724741f6",3650:"c466f9d2",3677:"6b51fd03",3683:"ab529410",3702:"eed1709a",3825:"d14efc92",3948:"00338b44",3964:"d8390233",3981:"65dc543e",4021:"61031c3a",4121:"289fac0f",4179:"e79bf9fd",4263:"3d60e6ff",4299:"ef2b3fbd",4302:"92645ffc",4409:"bc0b5ee2",4565:"75e71c7b",4587:"0a97377c",4693:"f0a14eb1",4804:"cfd207b5",4816:"a66e1056",4972:"278064bf",4987:"c89727df",5013:"630928de",5053:"8d9de585",5162:"65bce600",5199:"be0643a9",5222:"610891c0",5296:"9440e2e3",5388:"89d13dca",5396:"110c5797",5481:"9c76f6c8",5516:"00a237f0",5538:"024b4b6a",5751:"1a9db483",5833:"745b23d0",5880:"71c0db2c",5894:"f8d1936c",5895:"6ad3e3e4",5905:"c7e72160",5906:"8b0ee861",6033:"7eac53d9",6232:"ef187168",6280:"3aff5209",6332:"3ccf897c",6377:"60bf7b42",6394:"199d4916",6434:"823db706",6460:"6767992c",6630:"8ab9b8a7",6745:"c69282e3",6784:"d59dd04a",6817:"7cc5a21e",6831:"662bf089",6836:"d4df6a04",6848:"e2464572",6901:"0f6d12cd",6992:"737827a0",7048:"eb93041f",7094:"47cfe824",7155:"eb40a0f5",7186:"ddbb5262",7242:"9103eac0",7327:"c9ce1b87",7347:"d4504c2a",7403:"fff9a3ba",7465:"f2bb495e",7519:"379bd5e2",7663:"9f244f6c",7808:"08d8bde1",7817:"4766af26",7828:"4a25d3a3",7833:"65e5dda5",7846:"5385aaf7",7898:"a4b4e8d1",7934:"05744044",7958:"54a8b8c6",7974:"91d3f644",7997:"e8156d47",8006:"bca60ccb",8056:"874d9717",8175:"9fa4f36d",8178:"0df7d294",8296:"cdcdf55b",8329:"b54979df",8342:"967f971e",8360:"e0711d71",8367:"7854111c",8385:"23542d0c",8418:"974de7d4",8423:"ff96dd5b",8467:"e0b43f30",8481:"c371f7c5",8573:"22eb7698",8736:"774c3887",8853:"ae7bd322",8880:"3a5dcc9f",8897:"e701a679",8907:"e927584c",8936:"2c89a072",8965:"d864efa5",9133:"2b99e7ce",9220:"12ccc410",9303:"4b813920",9329:"715c8dae",9350:"66712de6",9366:"096deeed",9412:"a7704b81",9460:"548be7fa",9497:"ac0836d3",9501:"d8fcfa04",9502:"0941f0a7",9508:"3034aa8c",9511:"5f1f144c",9514:"05a2dc2e",9600:"a69052a6",9647:"8df4f6ba",9726:"8ba982b0",9737:"d196810b",9762:"71d65260",9797:"e92d0387",9903:"7c375cd8",9905:"07aee85b"}[n]+".chunk.js",a.miniCssF=n=>{},a.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),a.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n={},r="prova:";a.l=(e,t,i,o)=>{if(n[e]){n[e].push(t);return}var s,c;if(i!==void 0)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var d=l[f];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==r+i){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",r+i),s.src=e),n[e]=[t];var b=(g,j)=>{s.onerror=s.onload=null,clearTimeout(p);var h=n[e];if(delete n[e],s.parentNode&&s.parentNode.removeChild(s),h&&h.forEach(v=>v(j)),g)return g(j)},p=setTimeout(b.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=b.bind(null,s.onerror),s.onload=b.bind(null,s.onload),c&&document.head.appendChild(s)}})(),a.r=n=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.nmd=n=>(n.paths=[],n.children||(n.children=[]),n),a.p="/admin/",(()=>{a.b=document.baseURI||self.location.href;var n={1303:0};a.f.j=(t,i)=>{var o=a.o(n,t)?n[t]:void 0;if(o!==0)if(o)i.push(o[2]);else if(t!=1303){var s=new Promise((d,b)=>o=n[t]=[d,b]);i.push(o[2]=s);var c=a.p+a.u(t),l=new Error,f=d=>{if(a.o(n,t)&&(o=n[t],o!==0&&(n[t]=void 0),o)){var b=d&&(d.type==="load"?"missing":d.type),p=d&&d.target&&d.target.src;l.message="Loading chunk "+t+` failed.
(`+b+": "+p+")",l.name="ChunkLoadError",l.type=b,l.request=p,o[1](l)}};a.l(c,f,"chunk-"+t,t)}else n[t]=0},a.O.j=t=>n[t]===0;var r=(t,i)=>{var[o,s,c]=i,l,f,d=0;if(o.some(p=>n[p]!==0)){for(l in s)a.o(s,l)&&(a.m[l]=s[l]);if(c)var b=c(a)}for(t&&t(i);d<o.length;d++)f=o[d],a.o(n,f)&&n[f]&&n[f][0](),n[f]=0;return a.O(b)},e=self.webpackChunkprova=self.webpackChunkprova||[];e.forEach(r.bind(null,0)),e.push=r.bind(null,e.push.bind(e))})(),a.nc=void 0})();
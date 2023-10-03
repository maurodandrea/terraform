"use strict";(self.webpackChunkprova=self.webpackChunkprova||[]).push([[5199],{54920:(S,m,e)=>{e.d(m,{R:()=>o});var t=e(67294),l=e(18638),r=e(88767);function o(u={},a={}){const{id:s="",...E}=u,{get:g}=(0,l.kY)(),{data:n,isError:D,isLoading:C,refetch:R}=(0,r.useQuery)(["users",s,E],async()=>{const{data:{data:y}}=await g(`/admin/users/${s}`,{params:E});return y},a);return{users:t.useMemo(()=>s&&n?[n]:Array.isArray(n?.results)?n.results:[],[n,s]),pagination:t.useMemo(()=>n?.pagination??null,[n?.pagination]),isLoading:C,isError:D,refetch:R}}},71359:(S,m,e)=>{e.d(m,{Z:()=>n});var t=e(67294),l=e(16607),r=e(12473),o=e(18638),u=e(52933),a=e(45697),s=e.n(a),E=e(86896);const g=({displayedFilters:D})=>{const[C,R]=(0,t.useState)(!1),{formatMessage:P}=(0,E.Z)(),y=(0,t.useRef)(),W=()=>{R(A=>!A)};return t.createElement(t.Fragment,null,t.createElement(l.x,{paddingTop:1,paddingBottom:1},t.createElement(r.z,{variant:"tertiary",ref:y,startIcon:t.createElement(u.Z,null),onClick:W,size:"S"},P({id:"app.utils.filters",defaultMessage:"Filters"})),C&&t.createElement(o.J5,{displayedFilters:D,isVisible:C,onToggle:W,source:y})),t.createElement(o.W$,{filtersSchema:D}))};g.propTypes={displayedFilters:s().arrayOf(s().shape({name:s().string.isRequired,metadatas:s().shape({label:s().string}),fieldSchema:s().shape({type:s().string})})).isRequired};const n=g},61611:(S,m,e)=>{e.d(m,{W:()=>pe,Z:()=>Ze});var t=e(67294),l=e(40720),r=e(90731),o=e(55040),u=e(34726),a=e(18638),s=e(80129),E=e.n(s),g=e(86896),n=e(88767),D=e(86706),C=e(16550),R=e(54920),P=e(80902),y=e(36364),W=e(71359),A=e(12473),Z=e(24116),se=e(45697),d=e.n(se);const q=({onClick:i})=>{const{formatMessage:M}=(0,g.Z)();return t.createElement(A.z,{onClick:i,startIcon:t.createElement(Z.Z,null),size:"S"},M({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}))};q.propTypes={onClick:d().func.isRequired};var ne=e(35752),F=e(29299),G=e(69398),le=e(12803),b=e(10574),j=e(96987),ee=e(96208),p=e(16607),Me=e(2382),fe=e(54425),re=e(96854);const oe=({canDelete:i,headers:M,entriesToDelete:T,onClickDelete:k,onSelectRow:V,withMainAction:z,withBulkActions:K,rows:U})=>{const{push:h,location:{pathname:H}}=(0,C.k6)(),{formatMessage:O}=(0,g.Z)();return t.createElement(ne.p,null,U.map(c=>{const $=T.findIndex(I=>I===c.id)!==-1;return t.createElement(F.Tr,{key:c.id,...(0,a.X7)({fn:()=>h(`${H}/${c.id}`),condition:K})},z&&t.createElement(G.Td,{...a.UW},t.createElement(le.C,{"aria-label":O({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,re.Pp)(c.firstname,c.lastname)}),checked:$,onChange:()=>{V({name:c.id,value:!$})}})),M.map(({key:I,cellFormatter:Y,name:x,...N})=>t.createElement(G.Td,{key:I},typeof Y=="function"?Y(c,{key:I,name:x,formatMessage:O,...N}):t.createElement(b.Z,{textColor:"neutral800"},c[x]||"-"))),K&&t.createElement(G.Td,null,t.createElement(j.k,{justifyContent:"end"},t.createElement(ee.h,{onClick:()=>h(`${H}/${c.id}`),label:O({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:(0,re.Pp)(c.firstname,c.lastname)}),noBorder:!0,icon:t.createElement(Me.Z,null)}),i&&t.createElement(p.x,{paddingLeft:1,...a.UW},t.createElement(ee.h,{onClick:()=>k(c.id),label:O({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:(0,re.Pp)(c.firstname,c.lastname)}),noBorder:!0,icon:t.createElement(fe.Z,null)})))))}))};oe.defaultProps={canDelete:!1,entriesToDelete:[],onClickDelete(){},onSelectRow(){},rows:[],withBulkActions:!1,withMainAction:!1},oe.propTypes={canDelete:d().bool,entriesToDelete:d().array,headers:d().array.isRequired,onClickDelete:d().func,onSelectRow:d().func,rows:d().array,withBulkActions:d().bool,withMainAction:d().bool};const ve=oe;var Pe=e(74622),ye=e(36854),he=e(71543),de=e(31988),ie=e(6498),De=e(37022),Ce=e(82392),Ae=e(75071),Oe=e(41054),Te=e(30164),Le=e(85078),J=e(87561);const ue={firstname:"",lastname:"",email:"",roles:[]},Re=[],Ue=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0}]],Ie=J.Ry().shape({firstname:J.Z_().trim().required(a.I0.required),lastname:J.Z_(),email:J.Z_().email(a.I0.email).required(a.I0.required),roles:J.IX().min(1,a.I0.required).required(a.I0.required)}),Be={create:{buttonSubmitLabel:{id:"app.containers.Users.ModalForm.footer.button-success",defaultMessage:"Invite user"},isDisabled:!1,next:"magic-link"},"magic-link":{buttonSubmitLabel:{id:"global.finish",defaultMessage:"Finish"},isDisabled:!0,next:null}},Ee=({onSuccess:i,onToggle:M})=>{const[T,k]=(0,t.useState)("create"),[V,z]=(0,t.useState)(!1),[K,U]=(0,t.useState)(null),{formatMessage:h}=(0,g.Z)(),H=(0,a.lm)(),{lockApp:O,unlockApp:c}=(0,a.o1)(),{post:$}=(0,a.kY)(),I=(0,P.c)(Re,async()=>(await e.e(9329).then(e.bind(e,99329))).ROLE_LAYOUT,{combine(v,B){return[...v,B]},defaultValue:[]}),Y=(0,P.c)(ue,async()=>(await e.e(9329).then(e.bind(e,99329))).FORM_INITIAL_VALUES,{combine(v,B){return{...v,...B}},defaultValue:ue}),x=(0,P.c)(Te.A,async()=>(await e.e(566).then(e.bind(e,20566))).MagicLinkEE),N=(0,n.useMutation)(v=>$("/admin/users",v),{async onSuccess({data:v}){U(v.data.registrationToken),await i(),ae(),z(!1)},onError(v){throw z(!1),H({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),v},onSettled(){c()}}),w=h({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}),te=async(v,{setErrors:B})=>{O(),z(!0);try{await N.mutateAsync(v)}catch(X){c(),X?.response?.data?.error.message==="Email already taken"&&B({email:X.response.data.error.message})}},ae=()=>{f?k(f):M()},{buttonSubmitLabel:_,isDisabled:Q,next:f}=Be[T],Fe=T==="create"?t.createElement(A.z,{type:"submit",loading:V},h(_)):t.createElement(A.z,{type:"button",loading:V,onClick:M},h(_));return x?t.createElement(Pe.P,{onClose:M,labelledBy:"title"},t.createElement(ye.x,null,t.createElement(Ce.O,{label:w},t.createElement(Ae.$,{isCurrent:!0},w))),t.createElement(Oe.J9,{enableReinitialize:!0,initialValues:Y,onSubmit:te,validationSchema:Ie,validateOnChange:!1},({errors:v,handleChange:B,values:X})=>t.createElement(a.l0,null,t.createElement(he.f,null,t.createElement(j.k,{direction:"column",alignItems:"stretch",gap:6},T!=="create"&&t.createElement(x,{registrationToken:K}),t.createElement(p.x,null,t.createElement(b.Z,{variant:"beta",as:"h2"},h({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"User details"})),t.createElement(p.x,{paddingTop:4},t.createElement(j.k,{direction:"column",alignItems:"stretch",gap:1},t.createElement(de.r,{gap:5},Ue.map(me=>me.map(L=>t.createElement(ie.P,{key:L.name,...L.size},t.createElement(a.jm,{...L,disabled:Q,error:v[L.name],onChange:B,value:X[L.name]})))))))),t.createElement(p.x,null,t.createElement(b.Z,{variant:"beta",as:"h2"},h({id:"global.roles",defaultMessage:"User's role"})),t.createElement(p.x,{paddingTop:4},t.createElement(de.r,{gap:5},t.createElement(ie.P,{col:6,xs:12},t.createElement(Le.Z,{disabled:Q,error:v.roles,onChange:B,value:X.roles})),I.map(me=>me.map(L=>t.createElement(ie.P,{key:L.name,...L.size},t.createElement(a.jm,{...L,disabled:Q,onChange:B,value:X[L.name]}))))))))),t.createElement(De.m,{startActions:t.createElement(A.z,{variant:"tertiary",onClick:M,type:"button"},h({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:Fe})))):null};Ee.propTypes={onToggle:d().func.isRequired,onSuccess:d().func.isRequired};const Se=Ee,ce=({pagination:i})=>t.createElement(p.x,{paddingTop:4},t.createElement(j.k,{alignItems:"flex-end",justifyContent:"space-between"},t.createElement(a.v4,null),t.createElement(a.tU,{pagination:i})));ce.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},ce.propTypes={pagination:d().shape({page:d().number,pageCount:d().number,pageSize:d().number,total:d().number})};const We=ce,Ke=[{name:"firstname",metadatas:{label:"Firstname"},fieldSchema:{type:"string"}},{name:"lastname",metadatas:{label:"Lastname"},fieldSchema:{type:"string"}},{name:"email",metadatas:{label:"Email"},fieldSchema:{type:"email"}},{name:"username",metadatas:{label:"Username"},fieldSchema:{type:"string"}},{name:"isActive",metadatas:{label:"Active user"},fieldSchema:{type:"boolean"}}],xe=[{name:"firstname",key:"firstname",metadatas:{label:{id:"Settings.permissions.users.firstname",defaultMessage:"Firstname"},sortable:!0}},{name:"lastname",key:"lastname",metadatas:{label:{id:"Settings.permissions.users.lastname",defaultMessage:"Lastname"},sortable:!0}},{key:"email",name:"email",metadatas:{label:{id:"Settings.permissions.users.email",defaultMessage:"Email"},sortable:!0}},{key:"roles",name:"roles",metadatas:{label:{id:"Settings.permissions.users.roles",defaultMessage:"Roles"},sortable:!1},cellFormatter({roles:i},{formatMessage:M}){return t.createElement(b.Z,{textColor:"neutral800"},i.map(T=>M({id:`Settings.permissions.users.${T.code}`,defaultMessage:T.name})).join(`,
`))}},{key:"username",name:"username",metadatas:{label:{id:"Settings.permissions.users.username",defaultMessage:"Username"},sortable:!0}},{key:"isActive",name:"isActive",metadatas:{label:{id:"Settings.permissions.users.user-status",defaultMessage:"User status"},sortable:!1},cellFormatter({isActive:i},{formatMessage:M}){return t.createElement(j.k,null,t.createElement(a.qb,{isActive:i,variant:i?"success":"danger"}),t.createElement(b.Z,{textColor:"neutral800"},M({id:i?"Settings.permissions.users.active":"Settings.permissions.users.inactive",defaultMessage:i?"Active":"Inactive"})))}}],ge=["ee","license-limit-info"],pe=()=>{const{post:i}=(0,a.kY)(),{formatAPIError:M}=(0,a.So)(),[T,k]=(0,t.useState)(!1),V=(0,D.v9)(y._),{allowedActions:{canCreate:z,canDelete:K,canRead:U}}=(0,a.ss)(V.settings.users),h=(0,n.useQueryClient)(),H=(0,a.lm)(),{formatMessage:O}=(0,g.Z)(),{search:c}=(0,C.TH)();(0,a.go)();const{users:$,pagination:I,isError:Y,isLoading:x,refetch:N}=(0,R.R)(E().parse(c,{ignoreQueryPrefix:!0}),{cacheTime:0,enabled:U}),w=(0,P.c)(q,async()=>(await e.e(5833).then(e.bind(e,85833))).CreateActionEE),te=xe.map(f=>({...f,metadatas:{...f.metadatas,label:O(f.metadatas.label)}})),ae=O({id:"global.users",defaultMessage:"Users"}),_=()=>{k(f=>!f)},Q=(0,n.useMutation)(async f=>{await i("/admin/users/batch-delete",{ids:f})},{async onSuccess(){await N(),await h.refetchQueries(ge)},onError(f){H({type:"warning",message:{id:"notification.error",message:M(f),defaultMessage:"An error occured"}})}});return w?t.createElement(l.o,{"aria-busy":x},t.createElement(a.SL,{name:"Users"}),t.createElement(r.T,{primaryAction:z&&t.createElement(w,{onClick:_}),title:ae,subtitle:O({id:"Settings.permissions.users.listview.header.subtitle",defaultMessage:"All the users who have access to the Strapi admin panel"})}),U&&t.createElement(o.Z,{startActions:t.createElement(t.Fragment,null,t.createElement(a.m,{label:O({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:ae})}),t.createElement(W.Z,{displayedFilters:Ke}))}),t.createElement(u.D,{canRead:U},!U&&t.createElement(a.ZF,null),Y&&t.createElement("div",null,"TODO: An error occurred"),U&&t.createElement(t.Fragment,null,t.createElement(a.tM,{contentType:"Users",isLoading:x,onConfirmDeleteAll:Q.mutateAsync,onConfirmDelete:f=>Q.mutateAsync([f]),headers:te,rows:$,withBulkActions:!0,withMainAction:K},t.createElement(ve,{canDelete:K,headers:te,rows:$,withBulkActions:!0,withMainAction:K})),I&&t.createElement(We,{pagination:I}))),T&&t.createElement(Se,{onSuccess:async()=>{await N(),await h.refetchQueries(ge)},onToggle:_})):null},Ze=()=>{const i=(0,P.c)(pe,async()=>(await e.e(5481).then(e.bind(e,17403))).UserListPageEE);return i?t.createElement(i,null):null}},87901:(S,m,e)=>{e.r(m),e.d(m,{default:()=>s});var t=e(67294),l=e(18638),r=e(86706),o=e(36364),u=e(61611);const s=()=>{const E=(0,r.v9)(o._);return t.createElement(l.O4,{permissions:E.settings.users.main},t.createElement(u.Z,null))}},6324:(S,m,e)=>{e.d(m,{Z:()=>g});var t=e(67294),l=e(96208),r=e(18638),o=e(43838),u=e(45697),a=e.n(u),s=e(86896);const E=({children:n,target:D})=>{const C=(0,r.lm)(),{formatMessage:R}=(0,s.Z)(),{copy:P}=(0,r.VP)(),y=R({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),W=async()=>{await P(D)&&C({type:"info",message:{id:"notification.link-copied"}})};return t.createElement(r.Y_,{endAction:t.createElement(l.h,{label:y,noBorder:!0,icon:t.createElement(o.Z,null),onClick:W}),title:D,titleEllipsis:!0,subtitle:n,icon:t.createElement("span",{style:{fontSize:32}},"\u2709\uFE0F"),iconBackground:"neutral100"})};E.propTypes={children:a().oneOfType([a().element,a().string]).isRequired,target:a().string.isRequired};const g=E},30164:(S,m,e)=>{e.d(m,{A:()=>s});var t=e(67294),l=e(45697),r=e.n(l),o=e(86896),u=e(95651),a=e(6324);const s=({registrationToken:E})=>{const{formatMessage:g}=(0,o.Z)(),n=`${window.location.origin}${u.Z}auth/register?registrationToken=${E}`;return t.createElement(a.Z,{target:n},g({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"}))};s.defaultProps={registrationToken:""},s.propTypes={registrationToken:r().string}},85078:(S,m,e)=>{e.d(m,{Z:()=>W});var t=e(67294),l=e(59586),r=e(40933),o=e(18638),u=e(2),a=e(45697),s=e.n(a),E=e(86896),g=e(88767),n=e(71997);const D=(0,n.F4)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,C=n.ZP.div`
  animation: ${D} 2s infinite linear;
`,R=()=>t.createElement(C,null,t.createElement(u.Z,null)),P=async()=>{const{get:A}=(0,o.tg)(),{data:Z}=await A("/admin/roles");return Z.data},y=({disabled:A,error:Z,onChange:se,value:d})=>{const{status:q,data:ne}=(0,g.useQuery)(["roles"],P,{staleTime:5e4}),{formatMessage:F}=(0,E.Z)(),G=Z?F({id:Z,defaultMessage:Z}):"",le=F({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),b=F({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),j=F({id:"app.components.Select.placeholder",defaultMessage:"Select"}),ee=q==="loading"?t.createElement(R,null):void 0;return t.createElement(l.P,{id:"roles",disabled:A,error:G,hint:b,label:le,name:"roles",onChange:p=>{se({target:{name:"roles",value:p}})},placeholder:j,multi:!0,startIcon:ee,value:d.map(p=>p.toString()),withTags:!0,required:!0},(ne||[]).map(p=>t.createElement(r.W,{key:p.id,value:p.id.toString()},F({id:`global.${p.code}`,defaultMessage:p.name}))))};y.defaultProps={disabled:!1,error:void 0},y.propTypes={disabled:s().bool,error:s().string,onChange:s().func.isRequired,value:s().array.isRequired};const W=y},55040:(S,m,e)=>{e.d(m,{Z:()=>r});var t=e(85893),l=e(96987);const r=({startActions:o,endActions:u})=>!o&&!u?null:(0,t.jsxs)(l.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,t.jsx)(l.k,{gap:2,wrap:"wrap",children:o}),(0,t.jsx)(l.k,{gap:2,shrink:0,wrap:"wrap",children:u})]})},24116:(S,m,e)=>{e.d(m,{Z:()=>r});var t=e(85893);const l=o=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...o,children:[(0,t.jsx)("path",{fill:"#32324D",d:"M0 2.8A.8.8 0 0 1 .8 2h22.4a.8.8 0 0 1 .8.8v2.71a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2.8Z"}),(0,t.jsx)("path",{fill:"#32324D",d:"M1.922 7.991C.197 6.675 0 6.252 0 5.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873ZM22.8 18H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 21.529.537 22 1.2 22h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053Z"}),(0,t.jsx)("path",{fill:"#32324D",d:"M0 9.555v10.972h24V9.554c-2.633 1.95-8.367 6.113-9.96 7.166-1.595 1.052-3.352.438-4.032 0L0 9.555Z"})]}),r=l}}]);

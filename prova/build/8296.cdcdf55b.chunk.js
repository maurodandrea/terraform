"use strict";(self.webpackChunkprova=self.webpackChunkprova||[]).push([[8296],{99123:(D,s,t)=>{t.d(s,{a:()=>m});var n=t(67294),a=t(18638),o=t(14293),l=t.n(o),c=t(86896),d=t(16550),_=t(75021);const E="strapi-notification-seat-limit",L="https://cloud.strapi.io/profile/billing",r="https://strapi.io/billing/request-seats",m=()=>{const{formatMessage:e}=(0,c.Z)();let{license:f,isError:u,isLoading:T}=(0,_.q)();const g=(0,a.lm)(),{pathname:M}=(0,d.TH)(),{enforcementUserCount:C,permittedSeats:O,licenseLimitStatus:i,isHostedOnStrapiCloud:I}=f;(0,n.useEffect)(()=>{if(u||T)return;const A=!l()(O)&&!window.sessionStorage.getItem(`${E}-${M}`)&&(i==="AT_LIMIT"||i==="OVER_LIMIT");let P;i==="OVER_LIMIT"?P="warning":i==="AT_LIMIT"&&(P="softWarning"),A&&g({type:P,message:e({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:i}),title:e({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:i,enforcementUserCount:C,permittedSeats:O}),link:{url:I?L:r,label:e({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:I})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${E}-${M}`,!0)}})},[g,f,M,e,T,O,i,C,I,u])}},75021:(D,s,t)=>{t.d(s,{q:()=>l});var n=t(67294),a=t(18638),o=t(88767);function l({enabled:c}={enabled:!0}){const{get:d}=(0,a.kY)(),{data:_,isError:E,isLoading:L}=(0,o.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:e}}=await d("/admin/license-limit-information");return e},{enabled:c}),r=n.useMemo(()=>_??{},[_]),m=n.useCallback(e=>(r?.features??[]).find(u=>u.name===e)?.options??{},[r?.features]);return{license:r,getFeature:m,isError:E,isLoading:L}}},66831:(D,s,t)=>{t.r(s),t.d(s,{HomePageEE:()=>l});var n=t(67294),a=t(15494),o=t(99123);function l(){return(0,o.a)(),n.createElement(a.HomePageCE,null)}}}]);

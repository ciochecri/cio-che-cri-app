"use strict";(self.webpackChunktest_netlify_deployment=self.webpackChunktest_netlify_deployment||[]).push([[538],{8538:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var i=n(5043),s=n(2646);const o=(0,n(9).Ay)("div")`
  padding: 10px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 10;
  cursor: pointer;
  background: rgb(241, 242, 243);
  text-align: center;
  align-items: center;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  visibility: ${e=>e.show?"visible":"hidden"};
  opacity: ${e=>e.show?"1":"0"};
  display: flex;

  &:hover,
  &:active,
  &:focus {
    background: rgb(224, 224, 224);
  }

  @media screen and (max-width: 1240px) {
    display: none;
  }
`;var r=n(579);const l=()=>{const[e,t]=(0,i.useState)(!1),n=(0,i.useCallback)((()=>{const n=window.scrollY;!e&&n>350?t(!0):n<=350&&t(!1)}),[e]);(0,i.useEffect)((()=>(window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)})),[n]);return(0,r.jsx)(o,{onClick:()=>{document.getElementById("intro").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},show:e,children:(0,r.jsx)(s.A,{src:"scroll-top.svg",width:"20px",height:"20px"})})}}}]);
//# sourceMappingURL=538.052606b2.chunk.js.map
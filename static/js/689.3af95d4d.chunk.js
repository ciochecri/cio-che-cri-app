"use strict";(self.webpackChunktest_netlify_deployment=self.webpackChunktest_netlify_deployment||[]).push([[689],{7689:(e,t,i)=>{i.r(t),i.d(t,{default:()=>T});var n=i(4647),s=i(827),r=i(3614),l=i(9281),a=i(5639),d=i(2646),o=i(5043),c=i(9);const h=(0,c.Ay)("section")`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media screen and (max-width: 1024px) {
    
  }
`,x=(0,c.Ay)("div")`
  width: 140px;
  height: 150px;
  margin: 10px;
  border: 1px solid white;
  text-align: center;
  padding: 13px;
`;var p=i(5766),g=i.n(p),m=i(579);const u=Math.max(0,Math.round((new Date("03/20/2025").getTime()-(new Date).getTime())/864e5));function f(e){if(0===e)return"#ffffff"}function y(e){return 1===e?"9 giugno\n13 giugno":2===e?"16 giugno\n20 giugno":3===e?"23 giugno\n27 giugno":4===e?"30 giugno\n4 luglio":5===e?"7 luglio\n11 luglio":6===e?"14 luglio\n18 luglio":7===e?"21 luglio\n25 luglio":8===e?"28 luglio\n1 agosto":""}const j=(0,l.C)()((e=>{let{t:t}=e;const[i,n]=(0,o.useState)([]);return(0,o.useEffect)((()=>{(async()=>{var e=await(await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vSiQYKdJisuLcFg0vydiJGGwYTI6wv1SoWVMPECybZhtrkWm4Zsme2yAPeKfKSzkJXBsESxtY60oSrN/pub?gid=574938590&single=true&output=csv")).blob().then((e=>e.text()));const t=g().parse(e,{dynamicTyping:!0,header:!0,skipEmptyLines:!0});if(null!==t&&void 0!==t&&t.data[0]){const e=[t.data[0].S1,t.data[0].S2,t.data[0].S3,t.data[0].S4,t.data[0].S5,t.data[0].S6,t.data[0].S7,t.data[0].S8];n(e)}})()}),[]),(0,m.jsx)(h,{children:i.map(((e,t)=>{return(0,m.jsxs)(x,{style:{backgroundColor:(i=72-e-u,0===i?"#282c34":i<10?"#eb9694":i<30?"#fef3bd":"#c1e1c5"),color:f(72-e-u)},children:[(0,m.jsxs)("h6",{style:{fontSize:"15px"},children:["Settimana ",t+1]}),(0,m.jsx)("div",{style:{whiteSpace:"pre-line",color:f(72-e-u)},children:y(t+1)}),(0,m.jsxs)("div",{children:["Posti rimanenti ",(0,m.jsx)("br",{})," ",(0,m.jsx)("span",{style:{fontWeight:"bold"},children:72-e-u})," / ",72]})]});var i}))})})),w=(0,c.Ay)("section")`
  position: relative;
  padding: 4rem 0 4rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`,A=(0,c.Ay)("p")`
  margin: 1.5rem 0 2rem 0;
`,b=(0,c.Ay)(s.A)`
  flex-direction: ${e=>{let{direction:t}=e;return"left"===t?"row":"row-reverse"}};
`,v=(0,c.Ay)("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`,S=(0,c.Ay)("div")`
  max-width: 100%;
`,C=(0,c.Ay)("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`,k=(0,c.Ay)("p")`
  font-size: 13px;
`,z=(0,c.Ay)("p")`
  font-size: 11px;
  margin-bottom: 0.5em;
`,_=(0,c.Ay)("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;var E=i(8492);const M=e=>`${e} ${1===e?"settimana":"settimane"}`,P=(0,l.C)()((()=>{const[e,t]=(0,o.useState)(1);return(0,m.jsxs)(n.A,{style:{alignItems:"center"},children:[(0,m.jsx)(E.A,{min:1,max:8,onChange:e=>{t(e)},value:"number"===typeof e?e:0,tooltip:{formatter:M,open:!0}}),(0,m.jsxs)("div",{style:{minHeight:170},children:[(0,m.jsx)("h6",{style:{textDecoration:e>3?"line-through":"none",textAlign:"center"},children:110*e+" \u20ac"}),e>3&&(0,m.jsxs)("h6",{style:{textAlign:"center"},children:[e>6?90*e:100*e," \u20ac"]})]})]})})),T=(0,l.C)()((e=>{let{icon:t,title:i,content:l,section:o,button:c,t:h,id:x,direction:p,cards:g,priceCalculator:u,notes:f}=e;return(0,m.jsx)(w,{children:(0,m.jsx)(r.zW,{direction:p,triggerOnce:!0,children:(0,m.jsxs)(b,{justify:"space-between",align:"middle",id:x,direction:p,children:[!g&&!u&&(0,m.jsx)(n.A,{lg:11,md:11,sm:12,xs:24,children:(0,m.jsx)(d.A,{src:t,width:"100%",height:"100%"})}),(0,m.jsx)(n.A,{lg:11,md:11,sm:11,xs:24,children:(0,m.jsxs)(v,{children:[(0,m.jsx)("h6",{children:i}),(0,m.jsx)(A,{children:l}),"right"===p?(0,m.jsx)(_,{children:"object"===typeof c&&c.map(((e,t)=>(0,m.jsx)(a.$,{color:e.color,disabled:e.disabled,onClick:()=>e.href?window.open(e.href,"_blank"):{},children:h(e.title)},t)))}):(0,m.jsxs)(S,{children:[(0,m.jsx)(s.A,{justify:"space-between",children:"object"===typeof o&&o.map(((e,t)=>(0,m.jsxs)(n.A,{span:7,children:[(0,m.jsx)(d.A,{src:e.icon,width:"60px",height:"60px"}),(0,m.jsx)(C,{children:h(e.title)}),(0,m.jsx)(k,{children:h(e.content)})]},t)))}),(0,m.jsx)(n.A,{children:"object"===typeof f&&f.map(((e,t)=>(0,m.jsx)(z,{children:e})))})]})]})}),(g||u)&&(0,m.jsxs)(n.A,{lg:11,md:11,sm:12,xs:24,children:[g&&(0,m.jsx)(j,{}),u&&(0,m.jsx)(P,{})]})]})})})}))}}]);
//# sourceMappingURL=689.3af95d4d.chunk.js.map
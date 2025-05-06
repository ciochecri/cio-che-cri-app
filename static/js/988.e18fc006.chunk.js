"use strict";(self.webpackChunktest_netlify_deployment=self.webpackChunktest_netlify_deployment||[]).push([[988],{4988:(e,i,t)=>{t.r(i),t.d(i,{default:()=>W});var n=t(4647),r=t(7157),s=t(3614),a=t(9281),d=t(5639),l=t(2646),o=t(5043),c=t(9);const x=(0,c.Ay)("section")`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media screen and (max-width: 1024px) {
    
  }
`,h=(0,c.Ay)("div")`
  width: 140px;
  height: 150px;
  margin: 10px;
  border: 1px solid white;
  text-align: center;
  padding: 13px;
`;var m=t(5766),p=t.n(m),g=t(579);const u=Math.max(0,Math.round((new Date("03/20/2025").getTime()-(new Date).getTime())/864e5));function f(e){if(0===e)return"#ffffff"}function y(e){return 1===e?"9 giugno\n13 giugno":2===e?"16 giugno\n20 giugno":3===e?"23 giugno\n27 giugno":4===e?"30 giugno\n4 luglio":5===e?"7 luglio\n11 luglio":6===e?"14 luglio\n18 luglio":7===e?"21 luglio\n25 luglio":8===e?"28 luglio\n1 agosto":""}const j=(0,a.C)()((e=>{let{t:i}=e;const[t,n]=(0,o.useState)([]);return(0,o.useEffect)((()=>{(async()=>{var e=await(await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vSiQYKdJisuLcFg0vydiJGGwYTI6wv1SoWVMPECybZhtrkWm4Zsme2yAPeKfKSzkJXBsESxtY60oSrN/pub?gid=574938590&single=true&output=csv")).blob().then((e=>e.text()));const i=p().parse(e,{dynamicTyping:!0,header:!0,skipEmptyLines:!0});if(null!==i&&void 0!==i&&i.data[0]){const e=[i.data[0].S1,i.data[0].S2,i.data[0].S3,i.data[0].S4,i.data[0].S5,i.data[0].S6,i.data[0].S7,i.data[0].S8];n(e)}})()}),[]),(0,g.jsx)(x,{children:t.map(((e,i)=>{return(0,g.jsxs)(h,{style:{backgroundColor:(t=72-e-u,0===t?"#282c34":t<10?"#eb9694":t<30?"#fef3bd":"#c1e1c5"),color:f(72-e-u)},children:[(0,g.jsxs)("h6",{style:{fontSize:"15px"},children:["Settimana ",i+1]}),(0,g.jsx)("div",{style:{whiteSpace:"pre-line",color:f(72-e-u)},children:y(i+1)}),(0,g.jsxs)("div",{children:["Posti rimanenti ",(0,g.jsx)("br",{})," ",(0,g.jsx)("span",{style:{fontWeight:"bold"},children:72-e-u})," / ",72]})]});var t}))})})),w=(0,c.Ay)("section")`
  position: relative;
  padding: 4rem 0 4rem;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0 3rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 2rem 0 0;
  }
`,v=(0,c.Ay)("p")`
  margin: 1.5rem 0 2rem 0;
`,A=(0,c.Ay)("p")`
  margin: 1rem 0 1rem 0;
  font-size: 18px
`,b=(0,c.Ay)(r.A)`
  flex-direction: ${e=>{let{direction:i}=e;return"left"===i?"row":"row-reverse"}};
`,S=(0,c.Ay)("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 2rem;
  }
`,C=(0,c.Ay)("div")`
  max-width: 100%;
`,k=(0,c.Ay)("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`,z=(0,c.Ay)("p")`
  font-size: 13px;
`,P=(0,c.Ay)("p")`
  font-size: 11px;
  margin-bottom: 0.5em;
`,T=(0,c.Ay)("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  margin: 1.5rem 0 2rem 0;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;var _=t(8492);(0,c.Ay)("section")`
  position: relative;
  padding: 4rem 0 4rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;const D=(0,c.Ay)("div")`
  min-height: 170px;

  @media screen and (max-width: 1024px) {
   min-height: 100px;
  }
`,E=e=>`${e} ${1===e?"settimana":"settimane"}`,M=(0,a.C)()((()=>{const[e,i]=(0,o.useState)(1);return(0,g.jsxs)(n.A,{style:{alignItems:"center",marginTop:"2em"},children:[(0,g.jsx)(_.A,{min:1,max:8,onChange:e=>{i(e)},value:"number"===typeof e?e:0,tooltip:{formatter:E},handleStyle:{width:"2.5em",height:"2.5em",marginTop:"-1em"}}),(0,g.jsxs)(D,{children:[(0,g.jsx)("h6",{style:{textDecoration:e>3?"line-through":"none",textAlign:"center"},children:110*e+" \u20ac"}),e>3&&(0,g.jsxs)("h6",{style:{textAlign:"center"},children:[e>6?90*e:100*e," \u20ac"]})]})]})})),W=(0,a.C)()((e=>{let{icon:i,title:t,content:a,section:o,button:c,t:x,id:h,direction:m,cards:p,priceCalculator:u,notes:f}=e;return(0,g.jsx)(w,{children:(0,g.jsx)(s.zW,{direction:m,triggerOnce:!0,children:(0,g.jsxs)(b,{justify:"space-between",align:"middle",id:h,direction:m,children:[!p&&!u&&(0,g.jsx)(n.A,{lg:11,md:11,sm:12,xs:24,children:(0,g.jsx)(l.A,{src:i,width:"100%",height:"100%"})}),(0,g.jsx)(n.A,{lg:11,md:11,sm:11,xs:24,children:(0,g.jsxs)(S,{children:[(0,g.jsx)("h6",{children:t}),(0,g.jsx)(v,{children:a}),p&&(0,g.jsxs)(A,{children:[(0,g.jsx)("span",{style:{marginBottom:0},children:"Per l\u2019iscrizione prepara: "}),(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:"documento di identit\xe0 tuo e dei delegati"}),(0,g.jsx)("li",{children:"\u2060tessera sanitaria con codice fiscale visibile"}),(0,g.jsx)("li",{children:"ricevuta del bonifico in formato PDF"}),(0,g.jsx)("li",{children:"\u2060libretto dello sportivo valido per la durata di frequenza del centro estivo"})]})]}),c&&(0,g.jsx)(T,{children:"object"===typeof c&&c.map(((e,i)=>(0,g.jsx)(d.$,{color:e.color,disabled:e.disabled,onClick:()=>e.href?window.open(e.href,"_blank"):{},children:x(e.title)},i)))}),o&&(0,g.jsxs)(C,{children:[(0,g.jsx)(r.A,{justify:"space-between",children:"object"===typeof o&&o.map(((e,i)=>(0,g.jsxs)(n.A,{span:7,children:[(0,g.jsx)(l.A,{src:e.icon,width:"60px",height:"60px"}),(0,g.jsx)(k,{children:x(e.title)}),(0,g.jsx)(z,{children:x(e.content)})]},i)))}),(0,g.jsx)(n.A,{children:"object"===typeof f&&f.map(((e,i)=>(0,g.jsx)(P,{children:e})))})]})]})}),(p||u)&&(0,g.jsxs)(n.A,{lg:11,md:11,sm:12,xs:24,children:[p&&(0,g.jsx)(j,{}),u&&(0,g.jsx)(M,{})]})]})})})}))}}]);
//# sourceMappingURL=988.e18fc006.chunk.js.map
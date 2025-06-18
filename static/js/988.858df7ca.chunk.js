"use strict";(self.webpackChunktest_netlify_deployment=self.webpackChunktest_netlify_deployment||[]).push([[988],{4988:(e,i,t)=>{t.r(i),t.d(i,{default:()=>G});var n=t(4647),a=t(7157),r=t(3614),d=t(9281),o=t(5639),s=t(2646),l=t(5043),c=t(9);const m=(0,c.Ay)("section")`
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
`;var p=t(5766),x=t.n(p),g=t(579);const u=72,y=Math.max(0,Math.round((new Date("03/20/2025").getTime()-(new Date).getTime())/864e5));function f(e){if(0===e)return"#ffffff"}function v(e){return 1===e?"9 giugno\n13 giugno":2===e?"16 giugno\n20 giugno":3===e?"23 giugno\n27 giugno":4===e?"30 giugno\n4 luglio":5===e?"7 luglio\n11 luglio":6===e?"14 luglio\n18 luglio":7===e?"21 luglio\n25 luglio":8===e?"28 luglio\n1 agosto":""}const j=(0,d.C)()((e=>{let{t:i}=e;const[t,n]=(0,l.useState)([]);return(0,l.useEffect)((()=>{(async()=>{var e=await(await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vSiQYKdJisuLcFg0vydiJGGwYTI6wv1SoWVMPECybZhtrkWm4Zsme2yAPeKfKSzkJXBsESxtY60oSrN/pub?gid=574938590&single=true&output=csv")).blob().then((e=>e.text())),i=await(await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vR8lYl1nsSky2wAyXJPdIzWyxrLqKYX8GAAPNdavVFDv-VHhzi9hQcgp8n85aUp5UCak91xEnh_NGGL/pub?gid=664164375&single=true&output=csv")).blob().then((e=>e.text()));const t=x().parse(e,{dynamicTyping:!0,header:!0,skipEmptyLines:!0}),a=x().parse(i,{dynamicTyping:!0,header:!0,skipEmptyLines:!0});if(console.log("pippo"),console.log(a),null!==t&&void 0!==t&&t.data[0]){const e=[(null===a||void 0===a?void 0:a.data[0]["Settimana corrente"])<1?t.data[0].S1:u,(null===a||void 0===a?void 0:a.data[0]["Settimana corrente"])<2?t.data[0].S2:u,(null===a||void 0===a?void 0:a.data[0]["Settimana corrente"])<3?t.data[0].S3:u,(null===a||void 0===a?void 0:a.data[0]["Settimana corrente"])<4?t.data[0].S4:u,(null===a||void 0===a?void 0:a.data[0]["Settimana corrente"])<5?t.data[0].S5:u,(null===a||void 0===a?void 0:a.data[0]["Settimana corrente"])<6?t.data[0].S6:u,(null===a||void 0===a?void 0:a.data[0]["Settimana corrente"])<7?t.data[0].S7:u,(null===a||void 0===a?void 0:a.data[0]["Settimana corrente"])<8?t.data[0].S8:u];n(e)}})()}),[]),(0,g.jsx)(m,{children:t.map(((e,i)=>{return(0,g.jsxs)(h,{style:{backgroundColor:(t=u-e-y,0===t?"#282c34":t<10?"#eb9694":t<30?"#fef3bd":"#c1e1c5"),color:f(u-e-y)},children:[(0,g.jsxs)("h6",{style:{fontSize:"15px",color:f(u-e-y)},children:["Settimana ",i+1]}),(0,g.jsx)("div",{style:{whiteSpace:"pre-line",color:f(u-e-y)},children:v(i+1)}),(0,g.jsxs)("div",{children:["Posti rimanenti ",(0,g.jsx)("br",{})," ",(0,g.jsx)("span",{style:{fontWeight:"bold"},children:u-e-y})," / ",u]})]});var t}))})})),w=(0,c.Ay)("section")`
  position: relative;
  padding: 4rem 0 4rem;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0 3rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 2rem 0 0;
  }
`,A=(0,c.Ay)("p")`
  margin: 1.5rem 0 2rem 0;
`,b=(0,c.Ay)("p")`
  margin: 1rem 0 1rem 0;
  font-size: 18px
`,S=(0,c.Ay)(a.A)`
  flex-direction: ${e=>{let{direction:i}=e;return"left"===i?"row":"row-reverse"}};
`,k=(0,c.Ay)("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 2rem;
  }
`,C=(0,c.Ay)("div")`
  max-width: 100%;
`,z=(0,c.Ay)("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`,P=(0,c.Ay)("p")`
  font-size: 13px;
`,T=(0,c.Ay)("p")`
  font-size: 11px;
  margin-bottom: 0.5em;
`,E=(0,c.Ay)("div")`
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
`;var L=t(8492);(0,c.Ay)("section")`
  position: relative;
  padding: 4rem 0 4rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;const Y=(0,c.Ay)("div")`
  min-height: 170px;

  @media screen and (max-width: 1024px) {
   min-height: 100px;
  }
`,_=e=>`${e} ${1===e?"settimana":"settimane"}`,D=(0,d.C)()((()=>{const[e,i]=(0,l.useState)(1);return(0,g.jsxs)(n.A,{style:{alignItems:"center",marginTop:"2em"},children:[(0,g.jsx)(L.A,{min:1,max:8,onChange:e=>{i(e)},value:"number"===typeof e?e:0,tooltip:{formatter:_},handleStyle:{width:"2.5em",height:"2.5em",marginTop:"-1em"}}),(0,g.jsxs)(Y,{children:[(0,g.jsx)("h6",{style:{textDecoration:e>3?"line-through":"none",textAlign:"center"},children:110*e+" \u20ac"}),e>3&&(0,g.jsxs)("h6",{style:{textAlign:"center"},children:[e>6?90*e:100*e," \u20ac"]})]})]})})),G=(0,d.C)()((e=>{let{icon:i,title:t,content:d,section:l,button:c,t:m,id:h,direction:p,cards:x,priceCalculator:u,notes:y}=e;return(0,g.jsx)(w,{children:(0,g.jsx)(r.zW,{direction:p,triggerOnce:!0,children:(0,g.jsxs)(S,{justify:"space-between",align:"middle",id:h,direction:p,children:[!x&&!u&&(0,g.jsx)(n.A,{lg:11,md:11,sm:12,xs:24,children:(0,g.jsx)(s.A,{src:i,width:"100%",height:"100%"})}),(0,g.jsx)(n.A,{lg:11,md:11,sm:11,xs:24,children:(0,g.jsxs)(k,{children:[(0,g.jsx)("h6",{children:t}),(0,g.jsx)(A,{children:d}),x&&(0,g.jsxs)(b,{children:[(0,g.jsx)("span",{style:{marginBottom:0},children:"Per l\u2019iscrizione prepara: "}),(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:"documento di identit\xe0 tuo e dei delegati"}),(0,g.jsx)("li",{children:"\u2060tessera sanitaria con codice fiscale visibile"}),(0,g.jsx)("li",{children:"ricevuta del bonifico in formato PDF intestato all'IBAN IT04Y0846236980000005036590"}),(0,g.jsx)("li",{children:"\u2060libretto dello sportivo valido per la durata di frequenza del centro estivo"})]})]}),c&&(0,g.jsx)(E,{children:"object"===typeof c&&c.map(((e,i)=>(0,g.jsx)(o.$,{color:e.color,disabled:e.disabled,onClick:()=>e.href?window.open(e.href,"_blank"):{},children:m(e.title)},i)))}),l&&(0,g.jsxs)(C,{children:[(0,g.jsx)(a.A,{justify:"space-between",children:"object"===typeof l&&l.map(((e,i)=>(0,g.jsxs)(n.A,{span:7,children:[(0,g.jsx)(s.A,{src:e.icon,width:"60px",height:"60px"}),(0,g.jsx)(z,{children:m(e.title)}),(0,g.jsx)(P,{children:m(e.content)})]},i)))}),(0,g.jsx)(n.A,{children:"object"===typeof y&&y.map(((e,i)=>(0,g.jsx)(T,{children:e})))})]})]})}),(x||u)&&(0,g.jsxs)(n.A,{lg:11,md:11,sm:12,xs:24,children:[x&&(0,g.jsx)(j,{}),u&&(0,g.jsx)(D,{})]})]})})})}))}}]);
//# sourceMappingURL=988.858df7ca.chunk.js.map
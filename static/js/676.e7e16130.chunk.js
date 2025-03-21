"use strict";(self.webpackChunktest_netlify_deployment=self.webpackChunktest_netlify_deployment||[]).push([[676],{1676:(e,r,s)=>{s.r(r),s.d(r,{default:()=>O});var a=s(827),n=s(4647),t=s(9281),i=s(3614),l=s(5043),d=s(6545);const o={name:"",email:"",message:""};function m(e){let r={};return e.name||(r.name="Name is required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(r.email="Email address is invalid"):r.email="Email address is required",e.message||(r.message="Message is required"),r}var c=s(5639),h=s(9);const p=(0,h.Ay)("p")`
  margin-top: 1.5rem;
`,x=(0,h.Ay)("div")`
  position: relative;
  max-width: 700px;
`,g=(0,h.Ay)("div")`
  border-radius: 3rem;
  max-width: 400px;
`;var u=s(579);const y=(0,t.C)()((e=>{let{title:r,content:s,t:a}=e;return(0,u.jsxs)(x,{children:[(0,u.jsx)("h6",{children:a(r)}),(0,u.jsx)(g,{children:(0,u.jsx)(p,{children:a(s)})})]})})),j=(0,h.Ay)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
`,v=(0,h.Ay)("input")`
  font-size: 0.875rem;
`,b=(0,h.Ay)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
  margin-bottom: -0.625rem;
`,A=(0,h.Ay)("textarea")`
  resize: none;
  font-size: 0.875rem;
  height: 185px;
`,f=(0,h.Ay)("label")`
  display: block;
  padding-bottom: 10px;
  text-transform: capitalize;
`,C=(0,t.C)()((e=>{let{name:r,placeholder:s,onChange:a,t:n}=e;return(0,u.jsxs)(j,{children:[(0,u.jsx)(f,{htmlFor:r,children:n(r)}),(0,u.jsx)(v,{placeholder:n(s),name:r,id:r,onChange:a})]})})),w=(0,t.C)()((e=>{let{name:r,placeholder:s,onChange:a,t:n}=e;return(0,u.jsxs)(b,{children:[(0,u.jsx)(f,{htmlFor:r,children:n(r)}),(0,u.jsx)(A,{placeholder:n(s),id:r,name:r,onChange:a})]})})),S=(0,h.Ay)("div")`
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`,k=(0,h.Ay)("form")`
  width: 100%;
  max-width: 520px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`,q=(0,h.Ay)("span")`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`,E=(0,h.Ay)("div")`
  text-align: end;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`,O=(0,t.C)()((e=>{let{title:r,content:s,id:t,t:h}=e;const{values:p,errors:x,handleChange:g,handleSubmit:j}=(e=>{const[r,s]=(0,l.useState)({values:{...o},errors:{...o}});return{handleChange:e=>{e.persist();const{name:r,value:a}=e.target;s((e=>({...e,values:{...e.values,[r]:a},errors:{...e.errors,[r]:""}})))},handleSubmit:async a=>{a.preventDefault();const n=r.values,t=e(n);s((e=>({...e,errors:t})));try{Object.values(t).every((e=>""===e))&&((await fetch("",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).ok?(a.target.reset(),s((()=>({values:{...o},errors:{...o}}))),d.A.success({message:"Success",description:"Your message has been sent!"})):d.A.error({message:"Error",description:"There was an error sending your message, please try again later."}))}catch(i){d.A.error({message:"Error",description:"Failed to submit form. Please try again later."})}},values:r.values,errors:r.errors}})(m),v=e=>{let{type:r}=e;const s=x[r];return(0,u.jsx)(q,{children:s})};return(0,u.jsx)(S,{id:t,children:(0,u.jsxs)(a.A,{justify:"space-between",align:"middle",children:[(0,u.jsx)(n.A,{lg:12,md:11,sm:24,xs:24,children:(0,u.jsx)(i.q7,{direction:"left",triggerOnce:!0,children:(0,u.jsx)(y,{title:r,content:s})})}),(0,u.jsx)(n.A,{lg:12,md:12,sm:24,xs:24,children:(0,u.jsx)(i.q7,{direction:"right",triggerOnce:!0,children:(0,u.jsxs)(k,{autoComplete:"off",onSubmit:j,children:[(0,u.jsxs)(n.A,{span:24,children:[(0,u.jsx)(C,{type:"text",name:"name",placeholder:"Your Name",value:p.name||"",onChange:g}),(0,u.jsx)(v,{type:"name"})]}),(0,u.jsxs)(n.A,{span:24,children:[(0,u.jsx)(C,{type:"text",name:"email",placeholder:"Your Email",value:p.email||"",onChange:g}),(0,u.jsx)(v,{type:"email"})]}),(0,u.jsxs)(n.A,{span:24,children:[(0,u.jsx)(w,{placeholder:"Your Message",value:p.message||"",name:"message",onChange:g}),(0,u.jsx)(v,{type:"message"})]}),(0,u.jsx)(E,{children:(0,u.jsx)(c.$,{name:"submit",children:h("Submit")})})]})})})]})})}))}}]);
//# sourceMappingURL=676.e7e16130.chunk.js.map
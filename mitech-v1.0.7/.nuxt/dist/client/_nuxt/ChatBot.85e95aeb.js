import{e as I,f as y,h as f}from"./state.4da28978.js";import{a as b}from"./axios.28bc18a3.js";import{n as A,f as M,v as w,o as L}from"./entry.0cdb93ce.js";import{aJ as k,$ as o,a0 as n,ai as l,a1 as e,n as h,F as C,as as S,aa as R,aj as p,ak as d,ag as D,U as v,aM as x,aN as B}from"./_plugin-vue_export-helper.2c3522c3.js";const N=""+globalThis.__publicAssetsURL("images/icons/AIRobot.png");const $={props:["prompt"],components:{Close:A,Delete:M},mounted(){if(this.$data.RawAIMessageList.length==0){var i={role:"assistant",content:"有什么我可以帮您？"};this.$data.RawAIMessageList.push(i)}},data(){return{AIMessageList:I().value,RawAIMessageList:y().value,AIavatar:"/images/avator/AIavator.png",Useravatar:"/images/avator/user-default.png",input:"",isSendDisable:!1,showCover:!1}},methods:{send(){if(!this.isSendDisable){if(document.getElementById("myInput").value.length==0)return;this.isSendDisable=!0,this.input="",console.log("send!!");var r={role:"user",content:this.prompt+document.getElementById("myInput").value};this.$data.AIMessageList.push(r);var i={role:"user",content:document.getElementById("myInput").value};this.$data.RawAIMessageList.push(i);var t="https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/completions?access_token="+f().value;const _={messages:JSON.parse(JSON.stringify(this.$data.AIMessageList))};console.log(_);var r={role:"assistant",content:"Loading...Please Wait."};this.$data.AIMessageList.push(r),this.$data.RawAIMessageList.push(r),b.post(t,_,{headers:{"content-type":"application/json"}}).then(a=>{console.log(a),this.$data.AIMessageList[this.$data.AIMessageList.length-1].content=a.data.result,this.$data.RawAIMessageList[this.$data.RawAIMessageList.length-1].content=a.data.result,this.isSendDisable=!1}).catch(a=>{console.log("get ERROR in AIchat ",a),this.isSendDisable=!1})}},returnBack(){this.isSendDisable||(this.showCover=!1)},openChat(){this.showCover=!0},delteMessage(){this.isSendDisable||(this.AIMessageList=[],this.RawAIMessageList=[])}}},u=i=>(x("data-v-3bd5c48a"),i=i(),B(),i),E={class:"container"},O={key:0,class:"bg-cover"},U={key:1,class:"box"},V={class:"top"},T=u(()=>e("span",null,"AI Assistant",-1)),J={class:"center",ref:"center"},j={class:"line"},F={key:0,class:"friend_avatar"},K=["src"],z={key:1,class:"friend_content"},P={class:"title"},W=u(()=>e("br",null,null,-1)),X={class:"content"},q={key:2,class:"my_avatar"},G=["src"],H={key:3,class:"my_content"},Q={class:"title"},Y=u(()=>e("br",null,null,-1)),Z={class:"content"},ss={class:"bottom"},es=["disabled"],ts=u(()=>e("img",{src:N,class:"robotICON"},null,-1)),as=[ts];function os(i,t,r,_,a,c){const g=v("Close"),m=v("Delete");return o(),n("div",E,[a.showCover?(o(),n("div",O)):l("",!0),a.showCover?(o(),n("div",U,[e("div",V,[h(g,{style:{height:"60%"},onClick:t[0]||(t[0]=s=>c.returnBack())}),T,h(m,{style:{height:"60%"},onClick:t[1]||(t[1]=s=>c.delteMessage())})]),e("ul",J,[(o(!0),n(C,null,S(a.RawAIMessageList,s=>(o(),n("li",{key:s.id,class:R({mySay:s.role==="user"})},[e("div",j,[s.role!="user"?(o(),n("div",F,[e("img",{class:"avatar",src:a.AIavatar},null,8,K)])):l("",!0),s.role!="user"?(o(),n("div",z,[e("span",P,[p(d(" "+s.role)+" ",1),W]),e("div",X,d(s.content),1)])):l("",!0),s.role==="user"?(o(),n("div",q,[e("img",{class:"avatar",src:a.Useravatar},null,8,G)])):l("",!0),s.role==="user"?(o(),n("div",H,[e("span",Q,[p(d(" "+s.role)+" ",1),Y]),e("div",Z,d(s.content),1)])):l("",!0)])],2))),128))],512),e("div",ss,[D(e("input",{id:"myInput",type:"text",placeholder:"请输入内容","onUpdate:modelValue":t[2]||(t[2]=s=>a.input=s),onKeydown:t[3]||(t[3]=L(s=>c.send(),["enter"])),class:"inp",ref:"myinp"},null,544),[[w,a.input]]),e("button",{class:"btnn",onClick:t[4]||(t[4]=s=>c.send()),disabled:a.isSendDisable},"发送(S)",8,es)])])):l("",!0),e("div",{class:"robotBOX",onClick:t[5]||(t[5]=s=>c.openChat())},as)])}const cs=k($,[["render",os],["__scopeId","data-v-3bd5c48a"]]);export{cs as _};

(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{142:function(e,t,a){},195:function(e,t,a){e.exports=a(374)},204:function(e,t,a){},317:function(e,t,a){},371:function(e,t,a){},374:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(11),c=a.n(l),s=a(68),o=a(384),i=(a(204),a(58)),m=a(57),u=a(192),p={employee:{},employees:[]},h="SEARCHED_EMPLOYEE",d="ALL_EMPLOYEES",E=Object(m.c)({employee:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:var a=Object(i.a)({},e);return void 0!==t.employee&&(a=Object.assign({},e,{employee:t.employee})),Object(i.a)({},a);case d:return function(e,t){var a=Object(i.a)({},e);return void 0!=t.employees&&(a=Object.assign({},e,{employees:t.employees})),Object(i.a)({},a)}(e,t);default:return e}}}),b=a(40),f=a.n(b),y=a(28),v=function(e){return new Promise(function(t,a){fetch("http://localhost:3010/product?firstName=".concat(e)).then(function(e){t(e.json())})})},g=function(){return new Promise(function(e,t){fetch("http://localhost:3010/products").then(function(t){e(t.json())})})},O=f.a.mark(j);function j(e){var t,a,n;return f.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.prev=1,r.next=4,Object(y.b)(v,t);case 4:return a=r.sent,r.next=7,Object(y.b)(g);case 7:return n=r.sent,r.next=10,Object(y.a)([Object(y.d)({type:d,employees:n}),Object(y.d)({type:h,employee:a[0]})]);case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(1),r.next=16,Object(y.d)({type:"SEARCH_EMPLOYEE_ERROR",error:r.t0});case 16:case"end":return r.stop()}},O,this,[[1,12]])}var k=f.a.mark(S);function S(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.e)(h,j);case 2:case"end":return e.stop()}},k,this)}var w=f.a.mark(x);function x(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.c)(S);case 2:case"end":return e.stop()}},w,this)}var I=function(){var e=Object(u.a)();return Object(i.a)({},Object(m.d)(E,Object(m.a)(e)),{runSaga:e.run(x)})},M=a(46),C=a(47),A=a(50),N=a(48),P=a(49),B=(a(373),a(92)),D=a(31),L=a(177),R=a.n(L),H=a(380),_=a(377),T=a(378),W=a(381),Y=a(133),J=(a(142),function(e){function t(e){var a;return Object(M.a)(this,t),(a=Object(A.a)(this,Object(N.a)(t).call(this,e))).state={},a.handleMessageInput=a.handleMessageInput.bind(Object(D.a)(Object(D.a)(a))),a.handleSubmitMessage=a.handleSubmitMessage.bind(Object(D.a)(Object(D.a)(a))),a}return Object(P.a)(t,e),Object(C.a)(t,[{key:"handleMessageInput",value:function(e){this.setState(Object(B.a)({},e.target.name,e.target.value))}},{key:"handleSubmitMessage",value:function(e){console.log("starting to submit profile");var t={firstName:this.state.firstName,lastName:this.state.lastName,emailAddress:this.state.emailAddress,homePhone:this.state.homePhone,workPhone:this.state.workPhone,dob:this.state.dob};R.a.post("http://localhost:3010/product").send(t).set("Accept","application/json").end(function(e,t){e?console.log("no error"):console.log("success")})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"input-form"},r.a.createElement(H.a,null,r.a.createElement(_.a,null,r.a.createElement(T.a,null,r.a.createElement(W.a,{name:"firstName",type:"text",value:this.state.firstName,onChange:this.handleMessageInput,placeholder:"first name"}),r.a.createElement(W.a,{name:"lastName",type:"value",value:this.state.lastName,onChange:this.handleMessageInput,placeholder:"last name"})),r.a.createElement(T.a,null,r.a.createElement(W.a,{name:"homePhone",type:"value",value:this.state.homePhone,onChange:this.handleMessageInput,placeholder:"home-phone"}),r.a.createElement(W.a,{name:"workPhone",type:"value",value:this.state.workPhone,onChange:this.handleMessageInput,placeholder:"work-phone"}))),r.a.createElement(W.a,{name:"dob",type:"value",value:this.state.dob,onChange:this.handleMessageInput,placeholder:"date of birth"}),r.a.createElement(Y.a,{type:"Submit",onClick:this.handleSubmitMessage},"Submit"))))}}]),t}(n.Component)),z=(a(317),function(e){return{type:h,payload:e}}),F=(a(101),a(379)),K=function(e){function t(e){var a;return Object(M.a)(this,t),(a=Object(A.a)(this,Object(N.a)(t).call(this,e))).state={value:""},a.handleSubmitMessage=a.handleSubmitMessage.bind(Object(D.a)(Object(D.a)(a))),a.handleMessageInput=a.handleMessageInput.bind(Object(D.a)(Object(D.a)(a))),a}return Object(P.a)(t,e),Object(C.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(z())}},{key:"handleSubmitMessage",value:function(e){e.preventDefault();var t=this.state.value;console.log(t),this.props.dispatch(z(t))}},{key:"handleMessageInput",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){var e=this.props.employees;return r.a.createElement("div",null,r.a.createElement("div",{className:"input-form"},r.a.createElement(H.a,{onSubmit:this.handleSubmitMessage},r.a.createElement(W.a,{type:"text",placeholder:"search employee here",value:this.state.value,onChange:this.handleMessageInput}),r.a.createElement(Y.a,{onClick:this.handleSubmitMessage},"search"))),r.a.createElement("div",null,r.a.createElement("p",null," ",this.props.searchedEmployee," "),r.a.createElement("div",null,r.a.createElement(F.a,{columns:[{title:"first name",dataIndex:"firstName"},{title:"lastName",dataIndex:"lastName"},{title:"homePhone",dataIndex:"homePhone"}],dataSource:e,size:"middle"}))))}}]),t}(n.Component),$=Object(s.b)(function(e){return{searchedEmployee:e.employee.employee.firstName,employees:e.employee.employees}})(K),q=a(382),G=a(375),Q=a(17),U=a(386),V=q.a.Header,X=q.a.Content,Z=q.a.Footer,ee=q.a.Sider,te=(q.a.Row,q.a.Col,G.a.SubMenu),ae=function(e){function t(e){var a;return Object(M.a)(this,t),(a=Object(A.a)(this,Object(N.a)(t).call(this,e))).onButtonClicked=function(e){"add"===e?a.setState({isAddEmp:!0,isSearchEmp:!1}):a.setState({isSearchEmp:!0,isAddEmp:!1})},a.state={isAddEmp:!1,isSearchEmp:!1},a}return Object(P.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.isAddEmp,n=t.isSearchEmp;return r.a.createElement(q.a,{style:{minHeight:"100vh"}},r.a.createElement(ee,null,r.a.createElement("div",{className:"logo"}),r.a.createElement(G.a,{defaultSelectedKeys:["1"],mode:"inline"},r.a.createElement("img",{src:"https://rsrit.com/wp-content/uploads/2017/12/logo_dark.png",alt:"image",width:"200px",height:"70px"}),r.a.createElement(te,{key:"sub1",title:r.a.createElement("span",null,r.a.createElement(Q.a,{type:"user"}),r.a.createElement("span",null,"Perosnal Details"))},r.a.createElement(G.a.Item,{key:"1",onClick:function(){return e.onButtonClicked("add")}},"Add Applicant"),r.a.createElement(G.a.Item,{key:"2",onClick:function(){return e.onButtonClicked("")}},"Search Applicant")),r.a.createElement(G.a.Item,{key:"3"},r.a.createElement(Q.a,{type:"desktop"}),r.a.createElement("span",null,"Documents")),r.a.createElement(te,{key:"sub2",title:r.a.createElement("span",null,r.a.createElement(Q.a,{type:"user"}),r.a.createElement("span",null,"Education Details"))},r.a.createElement(G.a.Item,{key:"4"},"Tom"),r.a.createElement(G.a.Item,{key:"5"},"Bill"),r.a.createElement(G.a.Item,{key:"6"},"Alex")),r.a.createElement(te,{key:"sub3",title:r.a.createElement("span",null,r.a.createElement(Q.a,{type:"team"}),r.a.createElement("span",null,"Certifications"))},r.a.createElement(G.a.Item,{key:"7"},"Team 1"),r.a.createElement(G.a.Item,{key:"8"},"Team 2")),r.a.createElement(G.a.Item,{key:"9"},r.a.createElement(Q.a,{type:"file"}),r.a.createElement("span",null,"Language")),r.a.createElement(G.a.Item,{key:"10"},r.a.createElement(Q.a,{type:"file"}),r.a.createElement("span",null,"Work Experience")))),r.a.createElement(q.a,null,r.a.createElement(V,{style:{background:"#fff",padding:0}}),r.a.createElement(X,{style:{margin:"24px 16px",padding:24,background:"#fff",minHeight:580}},r.a.createElement(U.a,{to:{pathname:"/AddEmployee"}},"Add Employee"),"|",r.a.createElement(U.a,{to:{pathname:"/SearchEmployee"}},"Search Employee"),a?r.a.createElement(J,this.props):"",n?r.a.createElement($,this.props):""),r.a.createElement(Z,{style:{textAlign:"center"}})))}}]),t}(n.Component),ne=a(385),re=a(376),le=a(383),ce=(I(),function(){return r.a.createElement(o.a,null,r.a.createElement(ne.a,null,r.a.createElement(re.a,{exact:!0,path:"/DashBoard",render:function(e){return r.a.createElement(ae,e)}}),r.a.createElement(re.a,{exact:!0,path:"/AddEmployee",render:function(e){return r.a.createElement(J,e)}}),r.a.createElement(re.a,{exact:!0,path:"/SearchEmployee",render:function(e){return r.a.createElement($,e)}}),r.a.createElement(le.a,{to:"/DashBoard"})))}),se=(a(371),I(),function(e){function t(){return Object(M.a)(this,t),Object(A.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ce,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=I();c.a.render(r.a.createElement(o.a,null,r.a.createElement(s.a,{store:oe},r.a.createElement(se,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[195,2,1]]]);
//# sourceMappingURL=main.f0ab787d.chunk.js.map
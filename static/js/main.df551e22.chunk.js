(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/windows.23d5e9bf.png"},25:function(e,t,a){e.exports=a.p+"static/media/icon1.bac2d561.png"},26:function(e,t,a){e.exports=a.p+"static/media/icon2.14134a94.png"},27:function(e,t,a){e.exports=a.p+"static/media/icon3.dffa7899.png"},28:function(e,t,a){e.exports=a.p+"static/media/icon4.7fbdffbe.png"},29:function(e,t,a){e.exports=a.p+"static/media/icon6.d2919305.png"},31:function(e,t,a){e.exports=a(59)},36:function(e,t,a){},53:function(e,t,a){},58:function(e,t,a){e.exports=a.p+"static/media/icon5.53c95952.png"},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),i=a.n(c),o=(a(36),a(30)),l=a(2),s=a(3),u=a(5),m=a(4),p=a(6),h=a(23),d=a.n(h),E=(a(53),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("input",{type:"text",onChange:this.props.onChange,value:this.props.firstLetter,maxLength:"20",placeholder:"start typing something"})))}}]),t}(n.Component)),b=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={time:new Date},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval(function(){return e.tick()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({time:new Date})}},{key:"render",value:function(){return r.a.createElement("div",{className:"clock"},r.a.createElement("p",null,this.state.time.toLocaleTimeString()))}}]),t}(n.Component),f=a(10),g=a(9),v=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(n.Fragment,null,this.props.globalError?r.a.createElement("p",{className:"letterOrNumber"},"Please enter a letter or number"):this.props.wholeWordResult.map(function(t,a){return r.a.createElement("button",{key:a,className:"autocompleteItem",tabIndex:"0",onClick:e.props.handleClick},t)}))}}]),t}(n.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,this.props.returnError?r.a.createElement("div",{class:"errorPopup",id:"error"},r.a.createElement("div",{class:"topBanner"},r.a.createElement("p",{class:"error"},"ERROR"),r.a.createElement("button",{class:"x",onClick:this.props.closePopup},"X")),r.a.createElement("p",{class:"errorMessage"},"The word you have entered has no results.")):null)}}]),t}(n.Component),w=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.selectedItem,a=e.clicked,c=e.closeWiki;return r.a.createElement(n.Fragment,null,a?r.a.createElement("div",{className:"wikiPopup",id:"wiki"},r.a.createElement("div",{className:"popupBar"},r.a.createElement("p",null,"TAKE ME TO WIKI"),r.a.createElement("button",{className:"x",onClick:c},"X")),r.a.createElement("p",{className:"wikiMessage"},"Learn more about ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/".concat(t),target:"_blank",className:"wikiLink",rel:"noopener noreferrer"},t))):null)}}]),t}(n.Component),O=a(24),j=a.n(O),y=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{className:"startButton",onMouseDown:this.props.handleMouseDown},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{className:"windows",src:j.a,alt:"retro windows logo"})),r.a.createElement("p",{className:"start"},"Start"))}}]),t}(n.Component),N=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e="startMenu hide";return this.props.menuVisibility&&(e="startMenu show"),r.a.createElement("div",{className:e},r.a.createElement("div",{className:"sideBanner"}),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/RobertJinChun"},"Robert Chun")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/Lobst3rDev"},"Geoff Grossman")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/LC_butWithCode"},"Laura Chuang")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/beckyiscoding"},"Becky Robinson")),r.a.createElement("li",{className:"datamuse"},r.a.createElement("a",{href:"https://www.datamuse.com/api/"},"Made using the Datamuse API."))))}}]),t}(n.Component),C=a(25),x=a.n(C),I=a(26),S=a.n(I),W=a(27),R=a.n(W),A=a(28),M=a.n(A),D=(a(58),a(29)),T=a.n(D),L=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"desktopIcons"},r.a.createElement("div",{className:"iconContainer1"},r.a.createElement("button",{"aria-label":"about this app",className:"instructions"},r.a.createElement("img",{src:x.a,"aria-hidden":"true"})),r.a.createElement("p",{className:"iconText"},"Autocomplete Instructions")),r.a.createElement("div",{className:"iconContainer2"},r.a.createElement("img",{src:S.a,className:"icon2","aria-hidden":"true"}),r.a.createElement("p",{className:"iconText"},"Don't click me")),r.a.createElement("div",{className:"iconContainer3"},r.a.createElement("img",{src:R.a,className:"icon3","aria-hidden":"true"}),r.a.createElement("p",{className:"iconText"},"I do nothing")),r.a.createElement("div",{className:"iconContainer4"},r.a.createElement("img",{src:M.a,className:"icon4","aria-hidden":"true"}),r.a.createElement("p",{className:"iconText"},"Ignore me")),r.a.createElement("div",{className:"iconContainer6"},r.a.createElement("img",{src:T.a,className:"icon6","aria-hidden":"true"}),r.a.createElement("p",{className:"iconText"},"Just an icon")))}}]),t}(n.Component),P=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return console.log(this.props.playAudio),r.a.createElement(n.Fragment,null,this.props.playAudio?r.a.createElement("iframe",{title:"modem",width:"0",height:"0",src:"https://www.youtube.com/embed/gsNaR6FRuO0?rel=0&controls=0&showinfo=0&autoplay=1",frameborder:"0",allowfullscreen:!0}):console.log("nothing"))}}]),t}(n.Component),B=r.a.createElement(f.a,{"aria-hidden":"true",icon:g.b}),F=r.a.createElement(f.a,{"aria-hidden":"true",icon:g.a}),J=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).closePopup=function(){e.setState({returnError:!1})},e.handleClick=function(t){e.setState({selectedItem:t.target.innerText,clicked:!0})},e.closeWiki=function(){e.setState({clicked:!1})},e.handleTextChange=function(t){var a=t.target.value,n=RegExp("([sA-Za-z0-9])"),r=Object(o.a)(a),c=!1;r.map(function(e){return n.test(e)||(c=!0),c}),r.length>0&&!1===c?(e.axiosCall(a),e.setState({globalError:!1})):e.setState({globalError:!0})},e.playSound=function(){console.log("clocked"),e.setState({playAudio:!0},function(){})},e.axiosCall=function(e){var t=this,a=[],n=!1;d()({url:"https://api.datamuse.com/sug?max=10&k=VQE6va&s=".concat(e),method:"GET"}).then(function(e){e.data.map(function(e){return a.push(e.word)}),t.setState({wholeWordResult:a},function(){n=0===t.state.wholeWordResult.length}),t.setState({returnError:n})})},e.state={isLoading:!0,globalError:!1,returnError:!1,wholeWordResult:[],wholeWord:[],filteredArray:[],visible:!1,selectedItem:"",clicked:!1,playAudio:!1},e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"handleMouseDown",value:function(e){this.toggleMenu(),e.stopPropagation()}},{key:"toggleMenu",value:function(){this.setState({visible:!this.state.visible})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"desktopIcons"}),r.a.createElement("div",{className:"container"},r.a.createElement(L,null),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"tabBar"},r.a.createElement("div",{className:"iconContainer"},r.a.createElement("p",{class:"icon"},B),r.a.createElement("button",{onClick:this.playSound,className:"easterEgg"},r.a.createElement("p",{class:"icon"},F)))),r.a.createElement("div",{className:"searchEngine"},r.a.createElement("h1",null,"Autocomplete"),r.a.createElement("div",{className:"inputsContainer"},r.a.createElement("div",{className:"userInput"},r.a.createElement(E,{id:"userInput",onChange:this.handleTextChange,data:this.state.data})),r.a.createElement("div",{className:"userOutput"},r.a.createElement(v,{wholeWordResult:this.state.wholeWordResult,globalError:this.state.globalError,handleClick:this.handleClick.bind(this)})),r.a.createElement(k,{returnError:this.state.returnError,closePopup:this.closePopup}),r.a.createElement(w,{clicked:this.state.clicked,selectedItem:this.state.selectedItem,closeWiki:this.closeWiki}),r.a.createElement(P,{playSound:this.state.playSound,playAudio:this.state.playAudio}))))),r.a.createElement("footer",null,r.a.createElement(y,{handleMouseDown:this.handleMouseDown.bind(this)}),r.a.createElement(N,{menuVisibility:this.state.visible}),r.a.createElement(b,{className:"clock"})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.df551e22.chunk.js.map
(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(6),l=n.n(o),r=n(1),i=n(2),s=n(4),u=n(3),m=(n(12),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={date:new Date},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval((function(){e.setState({date:new Date}),console.log(e.state.date.toLocaleTimeString())}),1e3)}},{key:"componentDidUpdate",value:function(e){var t=e.name,n=this.props.name;e.name!==this.props.name&&console.log("The Clock was renamed from ".concat(t," to ").concat(n))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this.state.date;return c.a.createElement(c.a.Fragment,null,e.toLocaleTimeString())}}]),n}(a.Component)),k=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={isClockVisible:!0,clockName:1},e.hideClock=function(){e.setState({isClockVisible:!1})},e.showClock=function(){e.setState({isClockVisible:!0})},e.renameClock=function(){e.setState({clockName:Math.random()})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.clockName,n=e.isClockVisible;return c.a.createElement("div",{className:"app"},c.a.createElement("h1",null,"React clock"),c.a.createElement("p",null,"Current time:"," ",n&&c.a.createElement(m,{name:t})),c.a.createElement("button",{type:"button",className:"button-clock",onClick:this.showClock},"Show Clock"),c.a.createElement("button",{type:"button",className:"button-clock",onClick:this.hideClock},"Hide Clock"),c.a.createElement("button",{type:"button",className:"button-clock",onClick:this.renameClock},"Set random name"))}}]),n}(a.Component);l.a.render(c.a.createElement(k,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.d1ea294a.chunk.js.map
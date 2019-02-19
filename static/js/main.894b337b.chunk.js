(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(22)},16:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(7),r=n.n(c),s=n(1),o=n(2),l=n(4),u=n(3),m=n(5),h=n(8),f=n.n(h),d=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"classNames",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return f()(t)}},{key:"className",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.classNames.apply(this,t.concat([this.props.className]))}},{key:"style",value:function(e){return Object.assign({},e,this.props.style)}}]),t}(i.a.Component),p=(n(16),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"onClick",value:function(e){this.props.onClick&&this.props.onClick(e)}},{key:"render",value:function(){return i.a.createElement("button",{style:this.style(),className:this.className("base-btn"),onClick:this.onClick.bind(this)},i.a.createElement("span",null,this.props.children))}}]),t}(d)),v=n(9),b={getIntroData:function(){return v}},E={processInput:function(e){return this.isBlank(e)&&(e=""),e},isEmpty:function(e){return null===e||""===e},isNotEmpty:function(e){return!this.isEmpty(e)},isBlank:function(e){return null==e||/^\s*$/.test(e)},isNotBlank:function(e){return!this.isBlank(e)},trim:function(e){return e.replace(/^\s+|\s+$/,"")},trimToEmpty:function(e){return null==e?"":this.trim(e)},startsWith:function(e,t){return 0===e.indexOf(t)},endsWith:function(e,t){return 0===e.lastIndexOf(t)},contains:function(e,t){return e.indexOf(t)>=0},equals:function(e,t){return e===t},equalsIgnoreCase:function(e,t){return e.toLocaleLowerCase()===t.toLocaleLowerCase()},containsWhitespace:function(e){return this.contains(e," ")},repeat:function(e,t){for(var n="",a=0;a<t;a++)n+=e;return n},deleteWhitespace:function(e){return e.replace(/\s+/g,"")},rightPad:function(e,t,n){return e+this.repeat(n,t)},leftPad:function(e,t,n){return this.repeat(n,t)+e},capitalize:function(e){return null==e||0==e.length?e:e.replace(/^[a-z]/,function(e){return e.toLocaleUpperCase()})},uncapitalize:function(e){return null==e||0==e.length?e:e.replace(/^[A-Z]/,function(e){return e.toLocaleLowerCase()})},swapCase:function(e){return e.replace(/[a-z]/gi,function(e){return e>="A"&&e<="Z"?e.toLocaleLowerCase():e>="a"&&e<="z"?e.toLocaleUpperCase():void 0})},countMatches:function(e,t){if(this.isEmpty(e)||this.isEmpty(t))return 0;for(var n=0,a=0;-1!=(a=e.indexOf(t,a));)a+=t.length,n++;return n},isAlpha:function(e){return/^[a-z]+$/i.test(e)},isAlphaSpace:function(e){return/^[a-z\s]*$/i.test(e)},isAlphanumeric:function(e){return/^[a-z0-9]+$/i.test(e)},isAlphanumericSpace:function(e){return/^[a-z0-9\s]*$/i.test(e)},isNumeric:function(e){return/^(?:[1-9]\d*|0)(?:\.\d+)?$/.test(e)},isDecimal:function(e){return/^[-+]?(?:0|[1-9]\d*)\.\d+$/.test(e)},isNegativeDecimal:function(e){return/^\-?(?:0|[1-9]\d*)\.\d+$/.test(e)},isPositiveDecimal:function(e){return/^\+?(?:0|[1-9]\d*)\.\d+$/.test(e)},isInteger:function(e){return/^[-+]?(?:0|[1-9]\d*)$/.test(e)},isPositiveInteger:function(e){return/^\+?(?:0|[1-9]\d*)$/.test(e)},isNegativeInteger:function(e){return/^\-?(?:0|[1-9]\d*)$/.test(e)},isNumericSpace:function(e){return/^[\d\s]*$/.test(e)},isWhitespace:function(e){return/^\s*$/.test(e)},isAllLowerCase:function(e){return/^[a-z]+$/.test(e)},isAllUpperCase:function(e){return/^[A-Z]+$/.test(e)},defaultString:function(e,t){return null==e?t:e},defaultIfBlank:function(e,t){return this.isBlank(e)?t:e},defaultIfEmpty:function(e,t){return this.isEmpty(e)?t:e},removeSpecialCharacter:function(e){return e.replace(/[!-\/:-@\[-`{-~]/g,"")},isSpecialCharacterAlphanumeric:function(e){return/^[!-~]+$/.test(e)}},k=(n(18),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={intro:{head:"",welcome:"",tag:[]}},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({intro:b.getIntroData()})}},{key:"render",value:function(){return i.a.createElement("section",{className:"intro"},i.a.createElement("div",{className:"intro-overlay"}),i.a.createElement("div",{className:"intro-view"},i.a.createElement("div",{className:"head"},E.processInput(this.state.intro.head)),i.a.createElement("div",{className:"welcome"},E.processInput(this.state.intro.welcome)),i.a.createElement("div",{className:"tag"},i.a.createElement("div",{className:"tag-icon left"}),i.a.createElement("div",{className:"tag-item"},E.processInput(this.state.intro.tag[0])),i.a.createElement("div",{className:"divide"}),i.a.createElement("div",{className:"tag-item"},E.processInput(this.state.intro.tag[1])),i.a.createElement("div",{className:"tag-icon right"})),i.a.createElement(p,{className:"more-btn"},"MORE ABOUT ME")))}}]),t}(d)),y=(n(20),function(e){function t(e){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){}},{key:"onContact",value:function(e){switch(e){case"qq":case"wechat":break;case"github":window.open("https://github.com/liuyuqin1991");break;case"csdn":window.open("https://blog.csdn.net/liuyuqin1991");break;case"youku":window.open("")}}},{key:"render",value:function(){return i.a.createElement("div",{className:"home"},i.a.createElement("header",{className:"header"},i.a.createElement("div",{className:"top-bar"})),i.a.createElement(k,null),i.a.createElement("footer",{className:"footer"},i.a.createElement("ul",{className:"menu"},i.a.createElement("li",{key:"menu-about",onClick:this.onContact.bind(this,"qq")},i.a.createElement("div",{className:"icon about"}),i.a.createElement("div",{className:"label"},"\u5173\u4e8e")),i.a.createElement("li",{key:"menu-skills",onClick:this.onContact.bind(this,"wechat")},i.a.createElement("div",{className:"icon skills"}),i.a.createElement("div",{className:"label"},"\u80fd\u529b")),i.a.createElement("li",{key:"menu-work",onClick:this.onContact.bind(this,"github")},i.a.createElement("div",{className:"icon work"}),i.a.createElement("div",{className:"label"},"\u5de5\u4f5c")),i.a.createElement("li",{key:"menu-music",onClick:this.onContact.bind(this,"csdn")},i.a.createElement("div",{className:"icon music"}),i.a.createElement("div",{className:"label"},"\u97f3\u4e50")),i.a.createElement("li",{key:"menu-contact",onClick:this.onContact.bind(this,"youku")},i.a.createElement("div",{className:"icon contact"}),i.a.createElement("div",{className:"label"},"\u8054\u7cfb")))))}}]),t}(d));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));document.body.addEventListener("touchstart",function(){}),r.a.render(i.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e){e.exports={head:"Hello  World",welcome:"welcome",tag:["\u5199\u4ee3\u7801","\u73a9\u97f3\u4e50"]}}},[[10,2,1]]]);
//# sourceMappingURL=main.894b337b.chunk.js.map
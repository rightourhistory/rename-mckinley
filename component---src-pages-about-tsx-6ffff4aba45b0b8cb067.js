/*! For license information please see component---src-pages-about-tsx-6ffff4aba45b0b8cb067.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"2l/u":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var a=n("q1tI"),r=n.n(a),o=n("BNza");function l(){return r.a.createElement("div",null,r.a.createElement(o.a,null),"Hell!o about!")}},"55Sz":function(e,t,n){e.exports=n.p+"static/mckinley-portrait-pukas-7be020484b3787c138515f2efca50705.png"},"6MIl":function(e,t,n){},BNza:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var a=n("dI71"),r=n("q1tI"),o=n.n(r),l=n("TSYQ"),i=n.n(l),h=(n("6MIl"),n("wnus")),c=n.n(h),s=n("RnvD"),v=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={scrolledDown:!1},n}Object(a.a)(t,e);var n=t.prototype;return n.render=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:i()("header",{"header--full":this.state.scrolledDown}),id:"header"},o.a.createElement("div",{className:"header__logo"},o.a.createElement(c.a,{"aria-label":"logo"})),o.a.createElement("a",{className:"header__cta",href:"https://sign.moveon.org/petitions/restore-original-name",target:"_blank"},"Sign the Petition")),o.a.createElement("div",{className:"splash-bottom-observable",id:"splash-bottom-observable"}))},n.componentDidMount=function(){var e=this;if("IntersectionObserver"in window){var t=document.getElementById("splash-bottom-observable");if(!t)return;new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting?(e.setState({scrolledDown:!1}),e.props.onToggleHeader(s.b.Left)):(e.setState({scrolledDown:!0}),e.props.onToggleHeader(s.b.Centered))}))})).observe(t)}},t}(o.a.Component)},RnvD:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return u}));var a,r=n("dI71"),o=n("q1tI"),l=n.n(o),i=n("TSYQ"),h=n.n(i),c=(n("i3ko"),n("55Sz")),s=n.n(c),v=n("qNS0");!function(e){e.Centered="centered",e.Left="left"}(a||(a={}));var u=function(e){function t(t){var n;return(n=e.call(this,t)||this).eyeLeftRef=l.a.createRef(),n.eyeRightRef=l.a.createRef(),n}Object(r.a)(t,e);var n=t.prototype;return n.render=function(){return l.a.createElement("div",{className:h()("head",{"head--left":this.props.position===a.Left})},l.a.createElement("div",{className:"head__container"},l.a.createElement("img",{className:"head__portrait",src:s.a}),l.a.createElement("div",{className:"head__eye head__eye--left",ref:this.eyeLeftRef}),l.a.createElement("div",{className:"head__eye head__eye--right",ref:this.eyeRightRef})))},n.componentWillReceiveProps=function(e){var t=this;if(document)if(e.position===a.Left)document.body.onmousemove=null;else{var n=Object(v.a)((function(e){t.updateEyePosition(e)}),75);document.body.onmousemove=n}},n.updateEyePosition=function(e){[this.eyeLeftRef.current,this.eyeRightRef.current].forEach((function(t){if(t){var n=t.getBoundingClientRect().left+t.clientWidth/2,a=t.getBoundingClientRect().top+t.clientHeight/2+window.scrollY,r=Math.atan2(e.pageX-n,e.pageY-a)*(180/Math.PI)*-1+270;t.style.transform="rotate("+r+"deg) translate3d(0, 0, 0)"}}))},t}(l.a.Component)},TSYQ:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var l=r.apply(null,a);l&&e.push(l)}else if("object"===o)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},i3ko:function(e,t,n){},qNS0:function(e,t,n){"use strict";function a(e,t){var n=null,a=null;return function r(o){a=o,!n&&(e(a),a=null,n=setTimeout((function(){n=null,a&&r(a)}),t))}}n.d(t,"a",(function(){return a}))},wnus:function(e,t,n){var a=n("q1tI");function r(e){return a.createElement("svg",e,[a.createElement("path",{className:"logo__base",d:"M15 15h658v251H15z",key:0}),a.createElement("path",{className:"logo__outline",d:"M680 281H8a8 8 0 01-8-7V8a8 8 0 018-8h673a7 7 0 017 8v266a7 7 0 01-8 7zM15 266h658V15H15z",fill:"var(--text-color--dark-primary)",key:1}),a.createElement("path",{className:"logo__text",d:"M69 244l-8-19h-6v19h-4v-42h11a14 14 0 014 0 9 9 0 013 2 9 9 0 012 4 13 13 0 011 5 14 14 0 010 5 10 10 0 01-2 3 8 8 0 01-2 2 8 8 0 01-3 1l8 20zm-1-31a10 10 0 000-3 6 6 0 00-2-3 6 6 0 00-2-1 11 11 0 00-3 0h-6v15h6a7 7 0 005-2 8 8 0 002-6zM80 244v-42h4v42zM113 244a17 17 0 01-6 1 13 13 0 01-6-1 14 14 0 01-5-5 22 22 0 01-3-7 40 40 0 010-18 24 24 0 013-7 14 14 0 014-4 11 11 0 016-2 13 13 0 016 1 11 11 0 015 4l-3 3a10 10 0 00-3-3 8 8 0 00-4-1 7 7 0 00-5 1 12 12 0 00-3 4 22 22 0 00-2 6 41 41 0 000 14 20 20 0 002 6 11 11 0 003 4 8 8 0 005 1 12 12 0 003 0 7 7 0 003-1v-15h-6v-3h10v20a13 13 0 01-4 2zM146 244v-20h-16v20h-4v-42h4v18h16v-18h5v42zM168 205v39h-4v-39h-9v-3h21v3zM217 223a40 40 0 01-1 9 24 24 0 01-3 7 14 14 0 01-4 5 11 11 0 01-6 1 11 11 0 01-6-1 14 14 0 01-5-5 23 23 0 01-2-7 40 40 0 01-1-9 41 41 0 010-9 23 23 0 013-7 14 14 0 015-5 11 11 0 016-1 11 11 0 016 1 14 14 0 014 5 23 23 0 013 7 40 40 0 011 9zm-5 0a41 41 0 000-7 21 21 0 00-2-6 12 12 0 00-3-4 6 6 0 00-4-1 7 7 0 00-5 1 11 11 0 00-3 4 22 22 0 00-1 6 43 43 0 000 14 23 23 0 001 6 11 11 0 003 4 7 7 0 005 2 7 7 0 004-2 11 11 0 003-4 23 23 0 002-6 41 41 0 000-7zM248 236a15 15 0 01-2 5 10 10 0 01-4 3 12 12 0 01-6 1 12 12 0 01-5-1 10 10 0 01-4-3 15 15 0 01-2-5 31 31 0 01-1-7v-27h4v27a32 32 0 001 4 14 14 0 001 5 7 7 0 002 2 8 8 0 008 0 7 7 0 003-2 14 14 0 001-4 32 32 0 000-5v-27h4v27a29 29 0 010 7zM275 244l-8-19h-5v19h-4v-42h10a14 14 0 014 0 9 9 0 013 2 9 9 0 013 4 13 13 0 011 5 14 14 0 01-1 5 10 10 0 01-2 3 8 8 0 01-2 2 8 8 0 01-3 1l8 20zm0-31a10 10 0 00-1-3 6 6 0 00-2-3 6 6 0 00-2-1 11 11 0 00-3 0h-5v15h5a7 7 0 006-2 8 8 0 002-6zM318 244v-20h-17v20h-4v-42h4v18h17v-18h4v42zM332 244v-42h4v42zM364 233a14 14 0 01-1 5 11 11 0 01-2 4 10 10 0 01-4 3 11 11 0 01-4 0 13 13 0 01-6-1 12 12 0 01-4-4l2-3a9 9 0 004 3 9 9 0 004 2 6 6 0 005-2 8 8 0 002-6 8 8 0 00-1-3 8 8 0 00-1-3 13 13 0 00-3-2 28 28 0 00-2-1 25 25 0 01-4-2 13 13 0 01-2-3 11 11 0 01-2-3 12 12 0 01-1-4 13 13 0 011-6 11 11 0 012-3 10 10 0 014-2 11 11 0 014-1 13 13 0 015 1 9 9 0 014 3l-3 3a7 7 0 00-3-3 8 8 0 00-3 0 7 7 0 00-3 0 6 6 0 00-2 2 7 7 0 00-1 2 10 10 0 00-1 4 8 8 0 001 3 8 8 0 001 2 11 11 0 002 2 29 29 0 003 1 33 33 0 013 2 15 15 0 013 3 11 11 0 012 3 12 12 0 011 4zM379 205v39h-4v-39h-9v-3h21v3zM417 223a40 40 0 01-1 9 24 24 0 01-2 7 14 14 0 01-5 5 11 11 0 01-6 1 11 11 0 01-6-1 14 14 0 01-4-5 23 23 0 01-3-7 40 40 0 01-1-9 41 41 0 011-9 23 23 0 013-7 14 14 0 014-5 11 11 0 016-1 11 11 0 016 1 14 14 0 014 5 23 23 0 013 7 40 40 0 011 9zm-4 0a41 41 0 00-1-7 21 21 0 00-2-6 11 11 0 00-3-4 6 6 0 00-4-1 7 7 0 00-4 1 11 11 0 00-3 4 22 22 0 00-2 6 43 43 0 000 14 23 23 0 002 6 11 11 0 003 4 7 7 0 004 2 7 7 0 005-2 11 11 0 003-4 23 23 0 001-6 41 41 0 001-7zM442 244l-7-19h-6v19h-4v-42h10a14 14 0 014 0 9 9 0 014 2 9 9 0 012 4 13 13 0 011 5 14 14 0 010 5 10 10 0 01-2 3 8 8 0 01-3 2 8 8 0 01-2 1l8 20zm0-31a10 10 0 000-3 6 6 0 00-2-3 6 6 0 00-2-1 11 11 0 00-3 0h-6v15h6a7 7 0 005-2 8 8 0 002-6zM464 227v17h-5v-17l-10-25h4l8 21 9-21h4zM509 244v-20h-16v20h-4v-42h4v18h16v-18h4v42zM541 244l-2-10h-13l-3 10h-4l10-42h6l11 42zm-9-38l-6 24h12zM580 244h-5l-7-36-7 36h-6l-8-42h4l7 37h1l7-37h5l7 37 7-37h4zM611 244l-2-10h-13l-3 10h-4l11-42h5l11 42zm-9-38l-6 24h12zM621 244v-42h4v42zM635 244v-42h4v42zM66 117v55H46V45h37c23 0 35 12 35 34 0 19-10 27-17 29 11 5 15 14 15 32v5c0 14 1 20 2 27H99c-2-6-2-16-2-27v-4c0-18-4-24-20-24zm0-17h12c15 0 20-7 20-20 0-12-5-19-18-19H66zM213 108c0 45-12 66-41 66-27 0-39-21-39-66s14-65 40-65c27 0 40 21 40 65zm-60-1c0 32 6 51 20 51s19-17 19-51c0-32-5-47-19-47-15 0-20 17-20 47zM231 45h20v52h34V45h20v127h-20v-58h-34v58h-20zM328 45h20v52h34V45h20v127h-20v-58h-34v58h-20zM429 172l71-63-71-64v127zM500 109v63l71-63-71-64v64zM643 109l-72-64v127l72-63z",fill:"var(--text-color--dark-primary)",key:2})])}r.defaultProps={className:"logo",viewBox:"0 0 688 281"},e.exports=r,r.default=r}}]);
//# sourceMappingURL=component---src-pages-about-tsx-6ffff4aba45b0b8cb067.js.map
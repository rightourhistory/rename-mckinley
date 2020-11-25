/*! For license information please see component---src-pages-home-components-five-reasons-tsx-38b02680767ab08c0088.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"7XG0":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var a=n("dI71"),i=n("q1tI"),o=n.n(i),r=n("KQm4"),s=n("JX7q"),l=n("TSYQ"),c=n.n(l),u=(n("KSsz"),n("p4uA")),d=n.n(u),h=function(e){function t(t){var n;(n=e.call(this,t)||this).refsArray=[];var a=t.messages.map((function(e){return{title:e.title}}));return n.state={elements:a},n.toggleIndex=n.toggleIndex.bind(Object(s.a)(n)),n.setElementHeights=n.setElementHeights.bind(Object(s.a)(n)),n}Object(a.a)(t,e);var n=t.prototype;return n.render=function(){var e=this,t=this.props.messages.map((function(t,n){var a;return(0===e.state.currentIndex&&0===n||e.state.currentIndex===n)&&(a=!0),o.a.createElement("button",{className:c()("accordion__item",{"accordion__item--open":a}),onClick:function(){e.toggleIndex(n)},key:"accordion-item-"+n},o.a.createElement("div",null,o.a.createElement("h4",{className:"accordion__title"},t.title),o.a.createElement("div",{className:"accordion__body",ref:function(t){e.refsArray[n]=t}},t.body)),o.a.createElement("div",{className:"accordion__icon"},o.a.createElement(d.a,null)))}));return o.a.createElement("div",{className:"accordion"},t)},n.componentDidMount=function(){this.setElementHeights()},n.setElementHeights=function(){var e=this;this.refsArray.forEach((function(t,n){if(t&&e.state.elements){var a=t.getBoundingClientRect().height,i=e.state.elements,o=Object(r.a)(i);t.style.maxHeight="0px",o[n].maxHeight=a+"px",e.setState(Object.assign({},e.state,{elements:Object.assign({},o)}))}}))},n.toggleIndex=function(e){this.refsArray.forEach((function(e){e.style.maxHeight="0px"})),this.state.currentIndex===e?this.setState({currentIndex:void 0}):(this.refsArray[e].style.maxHeight=this.state.elements[e].maxHeight,this.setState({currentIndex:e}))},t}(o.a.Component),f=(n("jaTJ"),[{title:"The McKinley Tariff, 1890",body:o.a.createElement("p",null,"When Willian McKinley substantially reduced the income of Hawaiʻi sugar growers from $12.2M in 1890 to $7.0M in 1892, he effectively goaded them into the 1893 overthrow of Queen Liliʻuokalani in order to revive their profits through Annexation.")},{title:"Kūʻe Petitions & Queen Liliʻuokalani Official Protest, 1897",body:o.a.createElement("p",null,"When word spread that an adamant push for annexation of the Hawaiian Kingdom by the U.S. was progressing members of the Hui Hawaiʻi Aloha ʻĀina")},{title:"“Treaty of Annexation” 1898",body:o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"In a private conversation with Assistant Secretary George Cortelyou, President William McKinley said, “We need Hawaiʻi just as much as a good deal more than we did California. It is Manifest Destiny (Morgan 296). This guiding light of Manifest Destiny McKinley spoke of “is the idea that the United States is destined--by God, its advocates believed--to expand its dominion and spread democracy and capitalism across the entire North American Continent”."),o.a.createElement("p",null,"For McKinley’s selfish interests, it was imperative that Manifest Destiny float across the Pacific Ocean, knowing very well that it would deprive Hawaiʻi’s native people of their identity, language, culture, health, land, and everything that makes a native people native."),o.a.createElement("p",null,"After two failed attempts to legally annex Hawaiʻi on June 16 and September 7 of 1897, he settled for the illegal route: a joint resolution, known as Newlands Resolution, which was signed on July 6, 1898. A joint resolution does not have the necessary power to annex an internationally recognized country, which still to this day, Hawaiʻi is. As Senator Augustus O. Bacon, of Georgia said during the public Senate debates of 1898, “If Hawaiʻi could be acquired by a joint resolution, then the Legislature of Hawaiʻi could acquire the United States by a joint resolution of its own” (Chang 80)."))},{title:"Programme for Patriotic Exercises, 1906",body:o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Jump into the time machine and imagine yourself a young student whose parents, just nine years prior, signed their loyalty to the Hawaiian Kingdom with their signature on the Kūʻe Petitions in opposition of being annexed to the United States. Upon arriving at your public school, you join a circle around a flagpole with the rest of your classmates, cheering three times as the American flag is hoisted up. When you enter into class, you and your classmates stand alongside your desks, and in unison, everyone recites the following salutation:"),o.a.createElement("p",null,"“We give our heads and our hearts to God and our Country! One Country! One language! One Flag!”"))},{title:"Honolulu High School is renamed President William McKinley High School, 1907",body:o.a.createElement("p",null)}]),m=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:"five-reasons"},o.a.createElement("div",{className:"five-reasons__container"},o.a.createElement("h3",{className:"five-reasons__title"},o.a.createElement("strong",null,"5 REASONS")," TO RENAME MCKINLEY HIGH SCHOOL"),o.a.createElement("div",{className:"five-reasons__accordion"},o.a.createElement(h,{messages:f}))))},t}(o.a.Component)},JX7q:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return a}))},KSsz:function(e,t,n){},TSYQ:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var r=i.apply(null,a);r&&e.push(r)}else if("object"===o)for(var s in a)n.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(a=function(){return i}.apply(t,[]))||(e.exports=a)}()},jaTJ:function(e,t,n){},p4uA:function(e,t,n){var a=n("q1tI");function i(e){return a.createElement("svg",e,[a.createElement("path",{d:"M27 0H37V64H27V0Z",key:0}),a.createElement("path",{d:"M0 27H64V37H0V27Z",key:1})])}i.defaultProps={width:"64",height:"64",viewBox:"0 0 64 64",fill:"none"},e.exports=i,i.default=i}}]);
//# sourceMappingURL=component---src-pages-home-components-five-reasons-tsx-38b02680767ab08c0088.js.map
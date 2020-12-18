/*! For license information please see component---src-pages-home-components-five-reasons-tsx-fa1c0da773ecc62d6028.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"7XG0":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var a=n("dI71"),i=n("q1tI"),o=n.n(i),r=n("KQm4"),s=n("JX7q"),l=n("TSYQ"),c=n.n(l),h=(n("KSsz"),n("p4uA")),u=n.n(h),d=function(e){function t(t){var n;(n=e.call(this,t)||this).refsArray=[];var a=t.messages.map((function(e){return{title:e.title}}));return n.state={elements:a},n.toggleIndex=n.toggleIndex.bind(Object(s.a)(n)),n.setElementHeights=n.setElementHeights.bind(Object(s.a)(n)),n}Object(a.a)(t,e);var n=t.prototype;return n.render=function(){var e=this,t=this.props.messages.map((function(t,n){var a;return(0===e.state.currentIndex&&0===n||e.state.currentIndex===n)&&(a=!0),o.a.createElement("div",{className:c()("accordion__item",{"accordion__item--open":a}),key:"accordion-item-"+n},o.a.createElement("div",null,o.a.createElement("h4",{className:"accordion__title",onClick:function(){e.toggleIndex(n)}},t.title),o.a.createElement("div",{className:"accordion__body",ref:function(t){e.refsArray[n]=t}},t.body)),o.a.createElement("button",{className:"accordion__icon",onClick:function(){e.toggleIndex(n)}},o.a.createElement(u.a,null)))}));return o.a.createElement("div",{className:"accordion"},t)},n.componentDidMount=function(){this.setElementHeights()},n.setElementHeights=function(){var e=this;this.refsArray.forEach((function(t,n){if(t&&e.state.elements){var a=t.getBoundingClientRect().height,i=e.state.elements,o=Object(r.a)(i);t.style.maxHeight="0px",o[n].maxHeight=a+"px",e.setState(Object.assign({},e.state,{elements:Object.assign({},o)}))}}))},n.toggleIndex=function(e){this.refsArray.forEach((function(e){e.style.maxHeight="0px"})),this.state.currentIndex===e?this.setState({currentIndex:void 0}):(this.refsArray[e].style.maxHeight=this.state.elements[e].maxHeight,this.setState({currentIndex:e}))},t}(o.a.Component),m=(n("jaTJ"),n("djQ4")),f=n("vAtY"),p=n.n(f),g=[{title:"The McKinley Tariff, 1890",body:o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"When Willian McKinley substantially reduced the income of Hawaiʻi sugar growers from $12.2M in 1890 to $7.0M in 1892, he effectively goaded them into the 1893 overthrow of Queen Liliʻuokalani in order to revive their profits through Annexation."),o.a.createElement(m.b,{href:"https://history.house.gov/Historical-Highlights/1851-1900/The-McKinley-Tariff-of-1890/"},"Office of the Historian (U.S. Gov’t)"))},{title:"Kūʻe Petitions & Queen Liliʻuokalani Official Protest, 1897",body:o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"When word spread that an adamant push for annexation of the Hawaiian Kingdom by the U.S. was progressing, members of the Hui Hawaiʻi Aloha ʻĀina gathered 21. 269 Native Hawaiian signatures on a 556-paged petition named, “Petition Against Annexation.” With Queen Liliʻuokalani, four delegates met with Senator George Hoar, “who read the petition to the Senate [and] it was formally accepted.” Ultimately, the proposed treaty to annex Hawaiʻi was unsuccessful in the Senate."),o.a.createElement(m.b,{href:"https://www.archives.gov/education/lessons/hawaii-petition"},"Archives.gov"))},{title:o.a.createElement(o.a.Fragment,null,"“Treaty of Annexation” 1898"),body:o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"In a private conversation with Assistant Secretary George Cortelyou, President William McKinley said, “We need Hawaiʻi just as much as a good deal more than we did California. It is Manifest Destiny .”"),o.a.createElement("p",null,"This guiding light of Manifest Destiny McKinley spoke of “is the idea that the United States is destined--by God, its advocates believed--to expand its dominion and spread democracy and capitalism across the entire North American Continent.”"),o.a.createElement("p",null,"For McKinley’s selfish interests, it was imperative that Manifest Destiny float across the Pacific Ocean, knowing very well that it would deprive Hawaiʻi’s native people of their identity, language, culture, health, land, and everything that makes a native people native."),o.a.createElement("p",null,"After two failed attempts to legally annex Hawaiʻi on June 16 and September 7 of 1897, he settled for the illegal route: a joint resolution, known as Newlands Resolution, which was signed on July 6, 1898. A joint resolution does not have the necessary power to annex an internationally recognized country, which still to this day, Hawaiʻi is."),o.a.createElement("p",null,"As Senator Augustus O. Bacon, of Georgia said during the public Senate debates of 1898, “If Hawaiʻi could be acquired by a joint resolution, then the Legislature of Hawaiʻi could acquire the United States by a joint resolution of its own” (Chang 80)."),o.a.createElement(m.b,{href:"https://books.google.com/books?id=vYF3AAAAMAAJ&pg=PA296&lpg=PA296"},"Morgan, H. Wayne."),o.a.createElement(m.b,{href:"https://www.history.com/topics/westward-expansion/manifest-destiny"},"History.com"),o.a.createElement(m.b,{href:"http://hdl.handle.net/10125/37601"},"William S. Richard School of Law"))},{title:"Programme for Patriotic Exercises, 1906",body:o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{float:"right",height:0,marginLeft:"2rem",marginTop:"3rem",paddingBottom:"37.21%",width:"25%"}},o.a.createElement("img",{src:p.a,style:{width:"100%"}})),o.a.createElement("p",null,"Jump into the time machine and imagine yourself a young student whose parents, just nine years prior, signed their loyalty to the Hawaiian Kingdom with their signature on the Kūʻe Petitions in opposition of being annexed to the United States. Upon arriving at your public school, you join a circle around a flagpole with the rest of your classmates, cheering three times as the American flag is hoisted up."),o.a.createElement("p",null,"When you enter into class, you and your classmates stand alongside your desks, and in unison, everyone recites the following salutation:"),o.a.createElement("blockquote",null,"“We give our heads and our hearts to God and our Country! One Country! One language! One Flag!”"))},{title:"Honolulu High School is renamed President William McKinley High School, 1907",body:o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Disregarding its location and students, Honolulu High School was renamed President William McKinley High to honor the 25th president, “whose influence helped to bring about the annexation of the Hawaiian Islands to the United States.”"),o.a.createElement("p",null,"This illegal annexation helped displace Native Hawaiians in their homeland physically, mentally, emotionally, and spiritually."),o.a.createElement("p",null,"To commemorate this man, in 1911, a bronze, eight-ton “statue of President McKinley was commissioned for $8,000” and dedicated to the school."),o.a.createElement(m.b,{href:"http://www.mhs150years.com"},"McKinley High School"))}],y=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:"five-reasons"},o.a.createElement("div",{className:"five-reasons__container"},o.a.createElement("h3",{className:"five-reasons__title"},o.a.createElement("strong",null,"5 REASONS")," TO RENAME MCKINLEY HIGH SCHOOL"),o.a.createElement("div",{className:"five-reasons__accordion"},o.a.createElement(d,{messages:g}))))},t}(o.a.Component)},JX7q:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return a}))},KSsz:function(e,t,n){},OM4Q:function(e,t,n){},TSYQ:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var r=i.apply(null,a);r&&e.push(r)}else if("object"===o)for(var s in a)n.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(a=function(){return i}.apply(t,[]))||(e.exports=a)}()},ZfCp:function(e,t,n){var a=n("q1tI");function i(e){return a.createElement("svg",e,[a.createElement("path",{d:"M17.9189 0L19.9392 2.0203L4.78691 17.1726L2.7666 15.1523L17.9189 0Z",key:0}),a.createElement("path",{d:"M5.71507 0H20.0008V2.85714H5.71507V0Z",key:1}),a.createElement("path",{d:"M17.1436 0H20.0008V14.2857H17.1436V0Z",key:2})])}i.defaultProps={width:"20",height:"20",viewBox:"0 0 20 20",fill:"none"},e.exports=i,i.default=i},djQ4:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var a,i=n("dI71"),o=n("q1tI"),r=n.n(o),s=n("ZfCp"),l=n.n(s);n("OM4Q");!function(e){e.Small="small",e.Large="large"}(a||(a={}));var c=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){if(this.props.size)switch(this.props.size){case a.Small:}return r.a.createElement("a",{className:"source-link "+(this.props.size&&"source-link--"+this.props.size),href:this.props.href,target:"_blank"},"Source",this.props.children&&r.a.createElement(r.a.Fragment,null,": ",r.a.createElement("div",{className:"source-link__body"},this.props.children)),r.a.createElement("div",{className:"source-link__icon"},r.a.createElement(l.a,null)))},t}(r.a.Component)},jaTJ:function(e,t,n){},p4uA:function(e,t,n){var a=n("q1tI");function i(e){return a.createElement("svg",e,[a.createElement("path",{d:"M27 0H37V64H27V0Z",key:0}),a.createElement("path",{d:"M0 27H64V37H0V27Z",key:1})])}i.defaultProps={width:"64",height:"64",viewBox:"0 0 64 64",fill:"none"},e.exports=i,i.default=i},vAtY:function(e,t,n){e.exports=n.p+"static/patriotic-exercises-e710c82c0d72b2fdb121be01c85b655a.jpg"}}]);
//# sourceMappingURL=component---src-pages-home-components-five-reasons-tsx-fa1c0da773ecc62d6028.js.map
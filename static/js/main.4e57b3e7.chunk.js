(this.webpackJsonprankmyapp=this.webpackJsonprankmyapp||[]).push([[0],{14:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),u=n.n(c),l=(n(14),n(15),n(3)),o=n.n(l),s=n(6),i=n(2),f=n(20),d={table:{width:"50%"}};function m(e){var t=e.dates,n=Object(a.useState)([]),c=Object(i.a)(n,2),u=c[0],l=c[1],o=Object(a.useState)([]),s=Object(i.a)(o,2),m=s[0],p=s[1];return Object(a.useEffect)((function(){var e=Object(i.a)(t,1)[0],n=[],a=[];return e&&e.keywords?(e.keywords.forEach((function(e){var t=e.name,r=e.text,c=n.find((function(e){return e===t})),u=a.find((function(e){return e===r}));c||n.push(t),u||a.push(r)})),p(n),void l(a)):(p(n),void l(a))}),[t]),r.a.createElement(f.a,{dark:!0,style:d.table},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),m.map((function(e){return r.a.createElement("th",{key:e},e)})))),r.a.createElement("tbody",null,u.map((function(e){return r.a.createElement("tr",{key:e},r.a.createElement("td",null,e),m.map((function(n,a){var c=Object(i.a)(t,2),u=c[0],l=c[1];if(!u)return null;if(!u.keywords)return null;var o=u.keywords.find((function(t){var a=t.name,r=t.text;return a===n&&r===e})).position;if(!o)return r.a.createElement("td",{key:a}," -");if(!l)return r.a.createElement("td",{key:a},o);if(!l.keywords)return r.a.createElement("td",{key:a},o);var s=l.keywords.find((function(t){var a=t.name,r=t.text;return a===n&&r===e})).position,f=parseInt(s,10)-parseInt(o,10),d=f>0?"\u2191 ".concat(f):f<0?"\u2193 ".concat(f):"";return r.a.createElement("td",{key:a},o," ",d)})))}))))}var p={table:{width:"50%"},cell:{cursor:"pointer"}};function E(e){var t=Object(a.useState)({}),n=Object(i.a)(t,2),c=n[0],u=n[1],l=Object(a.useState)({}),o=Object(i.a)(l,2),s=o[0],d=o[1],m=e.data,E=e.setDates;function b(e){return e.date===c.date}function h(e){return e.date===s.date}return Object(a.useEffect)((function(){var e=[];c.date>s.date?(e.push(c),e.push(s)):(e.push(s),e.push(c)),E(e)}),[c,s]),r.a.createElement(f.a,{dark:!0,style:p.table},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",{width:"70%"},"Data"))),r.a.createElement("tbody",null,m.map((function(e,t){return r.a.createElement("tr",{key:t,style:p.cell,onClick:function(){return function(e){b(e)?u({}):h(e)?d({}):c.date?d(e):u(e)}(e)}},r.a.createElement("th",{scope:"row"},t+1),r.a.createElement("td",null,e.formattedDate," ",function(e){return b(e)||h(e)?"- X":""}(e)))}))))}var b="http://www.mocky.io/v2/5a880f353000004f007f93c5";var h=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)([]),l=Object(i.a)(u,2),f=l[0],d=l[1];function p(){return(p=Object(s.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(b);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){p.apply(this,arguments)}()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{data:n,setDates:d}),r.a.createElement(m,{dates:f}))};u.a.render(r.a.createElement(h,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(19)}},[[9,1,2]]]);
//# sourceMappingURL=main.4e57b3e7.chunk.js.map
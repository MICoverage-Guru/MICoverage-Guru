(this["webpackJsonpelephant-coverage"]=this["webpackJsonpelephant-coverage"]||[]).push([[0],{29:function(e,t,a){e.exports=a(50)},34:function(e,t,a){},35:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(15),c=a.n(o),r=(a(34),a(26)),i=a(1),s=(a(35),a(3)),m=a(4),u=a(6),d=a(5),p=a(16),h=a.n(p),f=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"toggleNav",value:function(){document.getElementById("nav-icon1").classList.toggle("open"),document.getElementsByClassName("responsive-links")[0].classList.toggle("display-nav")}},{key:"showContact",value:function(){h.a.fire({title:"Contact us",html:"<pre> Phone Number: (555) 555-1234 <br /><br /> Email: autoleadsdemo@gmail.com </pre>",icon:"info",confirmButtonText:"OK"})}},{key:"render",value:function(){return l.a.createElement("div",{className:"nav"},l.a.createElement("div",{className:"nav-contents"},l.a.createElement("div",{className:"logo"},"Elephant Coverage"),l.a.createElement("div",{className:"links"},l.a.createElement("p",null,"Explore"),l.a.createElement("p",{id:"last-link",onClick:this.showContact},"Contact us"),l.a.createElement("div",{className:"phone-box"},l.a.createElement("img",{alt:"call icon",src:"https://img.icons8.com/material-outlined/48/000000/call-male.png"})," ","(555) 555-1234")),l.a.createElement("div",{className:"responsive-nav"},l.a.createElement("div",{id:"nav-icon1",onClick:this.toggleNav},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null))),l.a.createElement("div",{className:"clear"})),l.a.createElement("div",{className:"responsive-links"},l.a.createElement("p",null,"Explore"),l.a.createElement("p",{onClick:this.showContact},"Contact us"),l.a.createElement("div",{className:"phone-box"},l.a.createElement("img",{alt:"call icon",src:"https://img.icons8.com/material-outlined/48/000000/call-male.png"})," ","(555) 555-1234")))}}]),a}(n.Component),v=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).submitForm=function(e){e.preventDefault(),localStorage.setItem("zip_code",document.getElementById("zip").value),localStorage.setItem("insurance_type",document.getElementById("insurance_type").value),window.location.href="http://localhost/form/1"},e}return Object(m.a)(a,[{key:"getStarted",value:function(){document.getElementsByClassName("landing-home")[0].style.display="none",document.getElementsByClassName("question-form")[0].style.display="flex",setTimeout((function(){document.getElementsByClassName("question-form")[0].style.opacity=1}),100)}},{key:"promptZIPCode",value:function(e){document.getElementsByClassName("question-form")[0].style.display="none",document.getElementsByClassName("zip-form")[0].style.display="inline-block",setTimeout((function(){document.getElementsByClassName("zip-form")[0].style.opacity=1}),100),document.getElementById("insurance_type").value=e}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement(f,null),l.a.createElement("div",{className:"home-contents"},l.a.createElement("div",{className:"landing-home"},l.a.createElement("div",{className:"left-home"},l.a.createElement("h1",null,"Get the cheapest ",l.a.createElement("span",null,"home")," and ",l.a.createElement("span",null,"auto")," ","insurance in the town!"),l.a.createElement("div",{className:"get-started",onClick:this.getStarted},l.a.createElement("p",null,"Get Started \u2192"))),l.a.createElement("div",{className:"right-home"},l.a.createElement("img",{alt:"illustration",src:"auto.png"}))),l.a.createElement("div",{className:"question-form"},l.a.createElement("p",{className:"question top-space"},"Welcome to Elephant Coverage! Which insurance would you like to purchase?"),l.a.createElement("div",{className:"insurance-wrapper"},l.a.createElement("div",{className:"insurance",onClick:function(){return e.promptZIPCode("auto")}},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"30",height:"30",viewBox:"0 0 24 24",style:{fill:"#627df7"}}," ",l.a.createElement("path",{d:"M 6.4707031 4 C 5.8307031 4 5.2597344 4.4076719 5.0527344 5.0136719 L 3 11 L 3 18 L 3 19 C 3 19.552 3.448 20 4 20 L 5 20 C 5.552 20 6 19.552 6 19 L 6 18 L 18 18 L 18 19 C 18 19.552 18.448 20 19 20 L 20 20 C 20.552 20 21 19.552 21 19 L 21 17 L 21 11 L 18.947266 5.0136719 C 18.740266 4.4076719 18.169297 4 17.529297 4 L 6.4707031 4 z M 6.828125 6 L 17.171875 6 L 18.201172 9 L 5.7988281 9 L 6.828125 6 z M 5.1132812 11 L 18.886719 11 L 19 11.332031 L 19 16 L 5 16 L 5 11.332031 L 5.1132812 11 z M 7.5 12 A 1.5 1.5 0 0 0 6 13.5 A 1.5 1.5 0 0 0 7.5 15 A 1.5 1.5 0 0 0 9 13.5 A 1.5 1.5 0 0 0 7.5 12 z M 16.5 12 A 1.5 1.5 0 0 0 15 13.5 A 1.5 1.5 0 0 0 16.5 15 A 1.5 1.5 0 0 0 18 13.5 A 1.5 1.5 0 0 0 16.5 12 z"})),l.a.createElement("p",null,"Auto Insurance")),l.a.createElement("div",{className:"insurance",onClick:function(){return e.promptZIPCode("auto_home")}},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"30",height:"30",viewBox:"0 0 24 24",style:{fill:"#627df7"}},l.a.createElement("path",{d:"M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z"})),l.a.createElement("p",null,"Auto & Home Insurance")))),l.a.createElement("form",{className:"zip-form",onSubmit:this.submitForm.bind(this)},l.a.createElement("p",{className:"question top-space"},"Please enter your zip code"),l.a.createElement("input",{type:"text",className:"input",placeholder:"ZIP CODE",name:"zip",id:"zip",required:!0}),l.a.createElement("input",{type:"hidden",id:"insurance_type",name:"insurance_type"}),l.a.createElement("input",{type:"submit",className:"input-submit",value:"Go"}))),l.a.createElement("div",{className:"how-it-works"},l.a.createElement("h1",null,"How it works"),l.a.createElement("div",{className:"working-blocks"},l.a.createElement("div",{className:"block"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"150",height:"150",viewBox:"0 0 172 172",style:{fill:"#000000"}},l.a.createElement("defs",null,l.a.createElement("linearGradient",{x1:"53.75",y1:"60.21075",x2:"53.75",y2:"74.39269",gradientUnits:"userSpaceOnUse",id:"color-1_7FYKzUGseWMH_gr1"},l.a.createElement("stop",{offset:"0","stop-color":"#70dfff"}),l.a.createElement("stop",{offset:"1","stop-color":"#70afff"})),l.a.createElement("linearGradient",{x1:"86",y1:"17.89875",x2:"86",y2:"153.15794",gradientUnits:"userSpaceOnUse",id:"color-2_7FYKzUGseWMH_gr2"},l.a.createElement("stop",{offset:"0","stop-color":"#00c6ff"}),l.a.createElement("stop",{offset:"1","stop-color":"#0072ff"})),l.a.createElement("linearGradient",{x1:"120.9375",y1:"17.89875",x2:"120.9375",y2:"153.15794",gradientUnits:"userSpaceOnUse",id:"color-3_7FYKzUGseWMH_gr3"},l.a.createElement("stop",{offset:"0","stop-color":"#00c6ff"}),l.a.createElement("stop",{offset:"1","stop-color":"#0072ff"})),l.a.createElement("linearGradient",{x1:"120.9375",y1:"17.89875",x2:"120.9375",y2:"153.15794",gradientUnits:"userSpaceOnUse",id:"color-4_7FYKzUGseWMH_gr4"},l.a.createElement("stop",{offset:"0","stop-color":"#00c6ff"}),l.a.createElement("stop",{offset:"1","stop-color":"#0072ff"})),l.a.createElement("linearGradient",{x1:"53.75",y1:"17.89875",x2:"53.75",y2:"153.15794",gradientUnits:"userSpaceOnUse",id:"color-5_7FYKzUGseWMH_gr5"},l.a.createElement("stop",{offset:"0","stop-color":"#00c6ff"}),l.a.createElement("stop",{offset:"1","stop-color":"#0072ff"})),l.a.createElement("linearGradient",{x1:"53.75",y1:"17.89875",x2:"53.75",y2:"153.15794",gradientUnits:"userSpaceOnUse",id:"color-6_7FYKzUGseWMH_gr6"},l.a.createElement("stop",{offset:"0","stop-color":"#00c6ff"}),l.a.createElement("stop",{offset:"1","stop-color":"#0072ff"})),l.a.createElement("linearGradient",{x1:"61.8125",y1:"17.89875",x2:"61.8125",y2:"153.15794",gradientUnits:"userSpaceOnUse",id:"color-7_7FYKzUGseWMH_gr7"},l.a.createElement("stop",{offset:"0","stop-color":"#00c6ff"}),l.a.createElement("stop",{offset:"1","stop-color":"#0072ff"})),l.a.createElement("linearGradient",{x1:"61.8125",y1:"17.89875",x2:"61.8125",y2:"153.15794",gradientUnits:"userSpaceOnUse",id:"color-8_7FYKzUGseWMH_gr8"},l.a.createElement("stop",{offset:"0","stop-color":"#00c6ff"}),l.a.createElement("stop",{offset:"1","stop-color":"#0072ff"}))),l.a.createElement("g",{fill:"none","fill-rule":"nonzero",stroke:"none","stroke-width":"1","stroke-linecap":"butt","stroke-linejoin":"miter","stroke-miterlimit":"10","stroke-dasharray":"","stroke-dashoffset":"0","font-family":"none","font-weight":"none","font-size":"none","text-anchor":"none",style:{mixBlendMode:"normal"}},l.a.createElement("path",{d:"M0,172v-172h172v172z",fill:"none"}),l.a.createElement("g",null,l.a.createElement("path",{d:"M75.25,75.25h-43c-1.4835,0 -2.6875,-1.204 -2.6875,-2.6875v-10.75c0,-1.4835 1.204,-2.6875 2.6875,-2.6875h43c1.4835,0 2.6875,1.204 2.6875,2.6875v10.75c0,1.4835 -1.204,2.6875 -2.6875,2.6875z",fill:"url(#color-1_7FYKzUGseWMH_gr1)"}),l.a.createElement("path",{d:"M123.625,32.31719v-2.75469c0,-7.40944 -6.02806,-13.4375 -13.4375,-13.4375h-60.0495c-3.58781,0 -6.96331,1.3975 -9.50031,3.9345l-20.57819,20.57819c-2.537,2.53969 -3.9345,5.91519 -3.9345,9.503v78.85931v2.6875v10.75c0,7.40944 6.02806,13.4375 13.4375,13.4375h80.625c7.40944,0 13.4375,-6.02806 13.4375,-13.4375v-10.75v-2.6875v-29.627c18.08419,-0.71756 32.25,-15.44237 32.25,-33.52925c0,-18.07075 -14.35125,-32.81169 -32.25,-33.52656zM43,25.30013v15.01238c0,1.48081 -1.20669,2.6875 -2.6875,2.6875h-15.01238zM118.25,142.4375c0,4.44512 -3.61738,8.0625 -8.0625,8.0625h-80.625c-4.44513,0 -8.0625,-3.61738 -8.0625,-8.0625v-0.06987c2.25212,1.70656 5.02562,2.75737 8.0625,2.75737h80.625c3.03688,0 5.81037,-1.05081 8.0625,-2.75737zM118.25,129v2.6875c0,4.44512 -3.61738,8.0625 -8.0625,8.0625h-80.625c-4.44513,0 -8.0625,-3.61738 -8.0625,-8.0625v-2.6875v-78.85931c0,-0.60469 0.08062,-1.19056 0.20962,-1.76569h18.60288c4.44512,0 8.0625,-3.61738 8.0625,-8.0625v-18.5975c0.57781,-0.13169 1.16638,-0.215 1.763,-0.215h60.0495c4.44512,0 8.0625,3.61737 8.0625,8.0625v2.95356c-16.62756,2.00219 -29.5625,16.17069 -29.5625,33.32769v33.59913l29.5625,-0.05912zM123.51213,94.00069l-29.44962,0.05644v-28.21337c0,-15.56062 12.65812,-28.21875 28.21875,-28.21875c15.56062,0 28.21875,12.65813 28.21875,28.21875c0,15.18706 -11.90025,27.55494 -26.98788,28.15694z",fill:"url(#color-2_7FYKzUGseWMH_gr2)"}),l.a.createElement("path",{d:"M120.9375,75.25c-2.96431,0 -5.375,2.41069 -5.375,5.375c0,2.96431 2.41069,5.375 5.375,5.375c2.96162,0 5.375,-2.41069 5.375,-5.375c0,-2.96431 -2.41338,-5.375 -5.375,-5.375z",fill:"url(#color-3_7FYKzUGseWMH_gr3)"}),l.a.createElement("path",{d:"M120.9375,45.6875c-5.92863,0 -10.75,5.375 -10.75,10.75h5.375c0,-2.6875 2.41069,-5.375 5.375,-5.375c2.96162,0 5.375,2.41069 5.375,5.375c0,2.96431 -2.41069,5.375 -5.375,5.375h-2.6875v8.0625h5.375v-3.02613c5.375,-2.34887 8.0625,-5.40994 8.0625,-10.41137c0,-5.92862 -4.82137,-10.75 -10.75,-10.75z",fill:"url(#color-4_7FYKzUGseWMH_gr4)"}),l.a.createElement("rect",{x:"11",y:"31",transform:"scale(2.6875,2.6875)",width:"18",height:"2",fill:"url(#color-5_7FYKzUGseWMH_gr5)"}),l.a.createElement("rect",{x:"11",y:"35",transform:"scale(2.6875,2.6875)",width:"18",height:"2",fill:"url(#color-6_7FYKzUGseWMH_gr6)"}),l.a.createElement("rect",{x:"11",y:"39",transform:"scale(2.6875,2.6875)",width:"24",height:"2",fill:"url(#color-7_7FYKzUGseWMH_gr7)"}),l.a.createElement("rect",{x:"11",y:"43",transform:"scale(2.6875,2.6875)",width:"24",height:"2",fill:"url(#color-8_7FYKzUGseWMH_gr8)"})))),l.a.createElement("h3",null,"Step 1"),l.a.createElement("p",null,"Answer a few questions about yourself and your vehicle")),l.a.createElement("div",{className:"block"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"150",height:"150",viewBox:"0 0 172 172",style:{fill:"#000000"}},l.a.createElement("defs",null,l.a.createElement("linearGradient",{x1:"86",y1:"20.15625",x2:"86",y2:"152.40006",gradientUnits:"userSpaceOnUse",id:"color-1_49420_gr1"},l.a.createElement("stop",{offset:"0","stop-color":"#00c6ff"}),l.a.createElement("stop",{offset:"1","stop-color":"#0072ff"})),l.a.createElement("linearGradient",{x1:"110.1875",y1:"20.15625",x2:"110.1875",y2:"152.40006",gradientUnits:"userSpaceOnUse",id:"color-2_49420_gr2"},l.a.createElement("stop",{offset:"0","stop-color":"#00c6ff"}),l.a.createElement("stop",{offset:"1","stop-color":"#0072ff"})),l.a.createElement("linearGradient",{x1:"115.5625",y1:"20.15625",x2:"115.5625",y2:"152.40006",gradientUnits:"userSpaceOnUse",id:"color-3_49420_gr3"},l.a.createElement("stop",{offset:"0","stop-color":"#00c6ff"}),l.a.createElement("stop",{offset:"1","stop-color":"#0072ff"})),l.a.createElement("linearGradient",{x1:"118.25",y1:"20.15625",x2:"118.25",y2:"152.40006",gradientUnits:"userSpaceOnUse",id:"color-4_49420_gr4"},l.a.createElement("stop",{offset:"0","stop-color":"#00c6ff"}),l.a.createElement("stop",{offset:"1","stop-color":"#0072ff"})),l.a.createElement("linearGradient",{x1:"118.25",y1:"20.15625",x2:"118.25",y2:"152.40006",gradientUnits:"userSpaceOnUse",id:"color-5_49420_gr5"},l.a.createElement("stop",{offset:"0","stop-color":"#00c6ff"}),l.a.createElement("stop",{offset:"1","stop-color":"#0072ff"})),l.a.createElement("linearGradient",{x1:"56.4375",y1:"99.60681",x2:"56.4375",y2:"113.907",gradientUnits:"userSpaceOnUse",id:"color-6_49420_gr6"},l.a.createElement("stop",{offset:"0","stop-color":"#70dfff"}),l.a.createElement("stop",{offset:"1","stop-color":"#70afff"})),l.a.createElement("linearGradient",{x1:"71.61919",y1:"31.35506",x2:"71.61919",y2:"45.95356",gradientUnits:"userSpaceOnUse",id:"color-7_49420_gr7"},l.a.createElement("stop",{offset:"0","stop-color":"#70dfff"}),l.a.createElement("stop",{offset:"1","stop-color":"#70afff"}))),l.a.createElement("g",{fill:"none","fill-rule":"nonzero",stroke:"none","stroke-width":"1","stroke-linecap":"butt","stroke-linejoin":"miter","stroke-miterlimit":"10","stroke-dasharray":"","stroke-dashoffset":"0","font-family":"none","font-weight":"none","font-size":"none","text-anchor":"none",style:{mixBlendMode:"normal"}},l.a.createElement("path",{d:"M0,172v-172h172v172z",fill:"none"}),l.a.createElement("g",null,l.a.createElement("path",{d:"M153.51269,47.58756l-23.72525,-23.72525c-1.52113,-1.52381 -3.5475,-2.36231 -5.70019,-2.36231h-62.27475c-4.44512,0 -8.0625,3.61737 -8.0625,8.0625v27.01206c-13.56112,1.35181 -24.1875,12.82744 -24.1875,26.73794c-5.92862,0 -10.75,4.82137 -10.75,10.75c0,5.92863 4.82138,10.75 10.75,10.75h1.23894c0.54019,1.71731 1.25506,3.35938 2.11506,4.91006c-10.43556,7.52769 -16.7915,19.7155 -16.7915,32.71494c0,4.44512 3.61737,8.0625 8.0625,8.0625h59.125h13.4375h51.0625c4.44512,0 8.0625,-3.61738 8.0625,-8.0625v-89.14706c0,-2.15537 -0.84119,-4.18175 -2.36231,-5.70287zM129,30.67513l17.69987,17.69988h-15.01237c-1.4835,0 -2.6875,-1.20669 -2.6875,-2.6875zM34.9375,83.3125c0,-11.85456 9.64544,-21.5 21.5,-21.5c11.85456,0 21.5,9.64544 21.5,21.5v13.4375c0,11.85456 -9.64544,21.5 -21.5,21.5c-11.85456,0 -21.5,-9.64275 -21.5,-21.5zM29.5625,99.4375c-2.96431,0 -5.375,-2.41069 -5.375,-5.375c0,-2.96431 2.41069,-5.375 5.375,-5.375v8.0625c0,0.90569 0.04838,1.80331 0.13706,2.6875zM56.4375,123.625c8.18881,0 15.523,-3.69263 20.45725,-9.48956c1.45663,1.05619 2.82725,2.20644 4.08769,3.45881c-6.149,7.24281 -15.00163,11.40575 -24.54494,11.40575c-9.54331,0 -18.39594,-4.16294 -24.54494,-11.40306c1.26313,-1.25238 2.63106,-2.40263 4.08769,-3.45881c4.93425,5.79425 12.26844,9.48687 20.45725,9.48687zM83.3125,145.125h-2.6875v-5.375h-5.375v5.375h-37.625v-5.375h-5.375v5.375h-8.0625c-1.4835,0 -2.6875,-1.20669 -2.6875,-2.6875c0,-7.56262 2.48862,-14.80812 6.85581,-20.73406c7.14606,8.05175 17.22688,12.67156 28.08169,12.67156c10.85481,0 20.93563,-4.61981 28.08437,-12.67156c4.3645,5.92594 6.85313,13.17144 6.85313,20.73406v2.6875zM147.8125,145.125h-51.0625v-2.6875c0,-12.99944 -6.35325,-25.18725 -16.7915,-32.71494c0.86,-1.55069 1.57219,-3.19275 2.11506,-4.91006h1.23894c5.92863,0 10.75,-4.82137 10.75,-10.75c0,-5.92863 -4.82137,-10.75 -10.75,-10.75c0,-13.91319 -10.62637,-25.38612 -24.1875,-26.73794v-27.01206c0,-1.48081 1.204,-2.6875 2.6875,-2.6875h61.8125v18.8125c0,4.44512 3.61738,8.0625 8.0625,8.0625h18.8125v88.6875c0,1.48081 -1.204,2.6875 -2.6875,2.6875zM83.3125,96.75v-8.0625c2.96431,0 5.375,2.41069 5.375,5.375c0,2.96431 -2.41069,5.375 -5.375,5.375h-0.13706c0.08869,-0.88419 0.13706,-1.77912 0.13706,-2.6875z",fill:"url(#color-1_49420_gr1)"}),l.a.createElement("path",{d:"M86,64.5h48.375v5.375h-48.375z",fill:"url(#color-2_49420_gr2)"}),l.a.createElement("path",{d:"M96.75,75.25h37.625v5.375h-37.625z",fill:"url(#color-3_49420_gr3)"}),l.a.createElement("path",{d:"M102.125,86h32.25v5.375h-32.25z",fill:"url(#color-4_49420_gr4)"}),l.a.createElement("path",{d:"M129.05644,96.75h-26.93144v5.375l26.875,-0.05644l0.05644,16.18144h-26.93144v5.375h26.93144c2.93206,0 5.31856,-2.3865 5.31856,-5.31856v-16.23788c0,-2.93206 -2.3865,-5.31856 -5.31856,-5.31856z",fill:"url(#color-5_49420_gr5)"}),l.a.createElement("path",{d:"M56.4375,112.875c5.93669,0 10.75,-5.375 10.75,-10.75h-21.5c0,5.375 4.81331,10.75 10.75,10.75z",fill:"url(#color-6_49420_gr6)"}),l.a.createElement("path",{d:"M64.5,45.10431v-10.16681c0,-1.4835 1.204,-2.6875 2.6875,-2.6875h10.2125c1.19056,0 1.7845,1.43781 0.94331,2.279l-11.53206,11.53206c-0.85194,0.85462 -2.31125,0.24994 -2.31125,-0.95675z",fill:"url(#color-7_49420_gr7)"})))),l.a.createElement("h3",null,"Step 2"),l.a.createElement("p",null,"Get in touch with a licensed agent within an hour")))),l.a.createElement("footer",null,l.a.createElement("p",null,"\xa9 Elephant Coverage \u2022 2020")))}}]),a}(n.Component),g=a(28),E=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"createElements",value:function(e){for(var t=[],a=Object(g.a)({},this.props),n=1;n<=e;n++){var o="opt"+n,c=a.qid+"-opt"+n;console.log(a[o]);var r=void 0;r=""!==a.val&&a.val===a[o]?l.a.createElement("input",{id:c,name:a.qid,type:"radio",value:a[o],onClick:a.onClick,defaultChecked:!0,required:!0}):l.a.createElement("input",{id:c,name:a.qid,type:"radio",value:a[o],onClick:a.onClick,required:!0}),t.push(l.a.createElement("div",{className:"md-radio md-radio-inline"},r,l.a.createElement("label",{for:c},a[o])))}return t}},{key:"render",value:function(){return l.a.createElement("div",{className:"question-container"},l.a.createElement("div",{className:"question"},l.a.createElement("p",null,this.props.question),l.a.createElement("p",{className:"sub"},this.props.sub_question)),l.a.createElement("div",{className:"question-options"},this.createElements(this.props.optno)))}}]),a}(n.Component),y=(a(14),a(11)),b=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"submit",value:function(e){e.preventDefault();var t=document.querySelector("input[name=Q1]:checked").value,a=document.querySelector("input[name=Q2]:checked").value;localStorage.setItem("Q1",t),localStorage.setItem("Q2",a),window.location.href="http://localhost/form/2"}},{key:"componentWillMount",value:function(){localStorage.getItem("zip_code")&&localStorage.getItem("insurance_type")||(window.location.href="http://localhost/")}},{key:"existingValue",value:function(e){return localStorage.getItem(e)?localStorage.getItem(e):""}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(f,null),l.a.createElement("div",{className:"page"},l.a.createElement("form",{onSubmit:this.submit},l.a.createElement("div",{className:"questions"},l.a.createElement(E,{question:"Do you currently have car insurance?",sub_question:"Select 'Yes' if you have active car insurance as of today",optno:"2",opt1:"Yes",opt2:"No",qid:"Q1",val:this.existingValue("Q1")}),l.a.createElement(E,{question:"Do you own or rent your home?",sub_question:"Homeowners need to protect their home and the things they own. Renters just need to cover the things they own.",optno:"4",opt1:"Home owner",opt2:"Condo owner",opt3:"Renter",opt4:"Other",qid:"Q2",val:this.existingValue("Q2")})),l.a.createElement("input",{type:"submit",value:"Next \u2192",className:"submit"})),l.a.createElement(y.ProgressBar,{percent:20,filledBackground:"linear-gradient(to right, #56ccf2, #2f80ed)"})))}}]),a}(n.Component),k=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"question-container"},l.a.createElement("div",{className:"question"},l.a.createElement("p",null,this.props.question),l.a.createElement("p",{className:"sub"},this.props.sub_question)),l.a.createElement("div",{className:"question-options"},l.a.createElement("input",{id:this.props.qid,name:this.props.qid,className:"form-input",type:"text",placeholder:this.props.label,defaultValue:this.props.val,required:!0})))}}]),a}(n.Component),x=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"submit",value:function(e){e.preventDefault();var t=document.getElementById("Q3").value,a=document.getElementById("Q4").value,n=document.getElementById("Q5").value,l=document.getElementById("Q6").value;localStorage.setItem("Q3",t),localStorage.setItem("Q4",a),localStorage.setItem("Q5",n),localStorage.setItem("Q6",l),window.location.href="http://localhost/form/3"}},{key:"componentWillMount",value:function(){localStorage.getItem("Q1")&&localStorage.getItem("Q2")||(window.location.href="http://localhost/form/1")}},{key:"existingValue",value:function(e){return localStorage.getItem(e)?localStorage.getItem(e):""}},{key:"back",value:function(){window.location.href="http://localhost/form/1"}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(f,null),l.a.createElement("div",{className:"page"},l.a.createElement("form",{onSubmit:this.submit},l.a.createElement("div",{className:"questions"},l.a.createElement(k,{question:"Where do you park your cars overnight?",sub_question:"Insurance rates vary depending on your ZIP code.",qid:"Q3",label:"Address",val:this.existingValue("Q3")}),l.a.createElement(k,{question:"Tell us a little about yourself",qid:"Q4",label:"First Name",val:this.existingValue("Q4")}),l.a.createElement(k,{qid:"Q5",label:"Last Name",val:this.existingValue("Q5")}),l.a.createElement(k,{qid:"Q6",label:"Date of Birth (MM/DD/YYYY)",val:this.existingValue("Q6")})),l.a.createElement("div",{className:"next-page",onClick:this.back},"\u2190 Go Back"),l.a.createElement("input",{type:"submit",value:"Next \u2192",className:"submit"})),l.a.createElement(y.ProgressBar,{percent:40,filledBackground:"linear-gradient(to right, #56ccf2, #2f80ed)"})))}}]),a}(n.Component),Q=a(12),w=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;Object(s.a)(this,a),n=t.call(this,e);var l=0;return localStorage.getItem("vehicles_data")&&(l=JSON.parse(localStorage.getItem("vehicles_data")).length),n.state={no_of_vehicles:l},n.addVehicle=n.addVehicle.bind(Object(Q.a)(n)),n.submit=n.submit.bind(Object(Q.a)(n)),n}return Object(m.a)(a,[{key:"submit",value:function(e){e.preventDefault();for(var t=1,a=[];t<=this.state.no_of_vehicles;){var n,l="v"+t+"-Q";n={id:"Vehicle "+t,Q7:document.getElementById(l+"7").value,Q8:document.getElementById(l+"8").value,Q9:document.getElementById(l+"9").value,Q10:document.getElementById(l+"10").value,Q11:document.querySelector("input[name="+l+"11]:checked").value,Q12:document.querySelector("input[name="+l+"12]:checked").value,Q13:document.getElementById(l+"13").value},a.push(n),t++}localStorage.setItem("vehicles_data",JSON.stringify(a)),window.location.href="http://localhost/form/4"}},{key:"addVehicle",value:function(){var e=this.state.no_of_vehicles;this.setState({no_of_vehicles:e+1}),alert("New Vehicle Added! Please scroll down.")}},{key:"createVehicleElements",value:function(){for(var e=[],t=0;t<this.state.no_of_vehicles;t++){var a=t+1;e.push(l.a.createElement("div",{className:"vehicle-unit",key:"v"+a},l.a.createElement("p",{className:"question",style:{textAlign:"left"}},"Vehicle ",a),l.a.createElement(k,{qid:"v"+a+"-Q7",label:"Vehicle year (YYYY)",val:this.existingValue(t,"Q7")}),l.a.createElement(k,{qid:"v"+a+"-Q8",label:"Make",val:this.existingValue(t,"Q8")}),l.a.createElement(k,{qid:"v"+a+"-Q9",label:"Model",val:this.existingValue(t,"Q9")}),l.a.createElement(k,{qid:"v"+a+"-Q10",label:"Trim",val:this.existingValue(t,"Q10")}),l.a.createElement(E,{question:"Do you own or lease this vehicle?",optno:"3",opt1:"Own-paid in full",opt2:"Own-making payments",opt3:"Lease",qid:"v"+a+"-Q11",val:this.existingValue(t,"Q11")}),l.a.createElement(E,{question:"What do you mostly use it for?",optno:"4",opt1:"Personal commuting",opt2:"Pleasure",opt3:"Rideshare",opt4:"Farm",qid:"v"+a+"-Q12",val:this.existingValue(t,"Q12")}),l.a.createElement(k,{question:"How many miles do you drive (per year)?",sub_question:"Most drivers average 11,000 miles per year.",qid:"v"+a+"-Q13",val:this.existingValue(t,"Q13")})))}return e}},{key:"componentWillMount",value:function(){localStorage.getItem("Q3")&&localStorage.getItem("Q4")||(window.location.href="http://localhost/form/2")}},{key:"existingValue",value:function(e,t){return localStorage.getItem("vehicles_data")&&JSON.parse(localStorage.getItem("vehicles_data"))[e]?JSON.parse(localStorage.getItem("vehicles_data"))[e][t]:""}},{key:"back",value:function(){window.location.href="http://localhost/form/2"}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(f,null),l.a.createElement("div",{className:"page"},l.a.createElement("form",{onSubmit:this.submit},l.a.createElement("div",{className:"questions"},l.a.createElement("p",{className:"question",style:{textAlign:"left"}},"Tell us about your vehicles"),l.a.createElement("div",{className:"next-page",onClick:this.addVehicle},"+ \xa0 Add Vehicle"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),this.createVehicleElements()),l.a.createElement("div",{className:"next-page",onClick:this.back},"\u2190 Go Back"),l.a.createElement("input",{type:"submit",value:"Next \u2192",className:"submit"})),l.a.createElement(y.ProgressBar,{percent:60,filledBackground:"linear-gradient(to right, #56ccf2, #2f80ed)"})))}}]),a}(n.Component),N=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={accidents:!1},n.appendAccidentQuestions=n.appendAccidentQuestions.bind(Object(Q.a)(n)),n.submit=n.submit.bind(Object(Q.a)(n)),n}return Object(m.a)(a,[{key:"submit",value:function(){h.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3,timerProgressBar:!0}).fire({icon:"info",title:"Submitting responses..."});var e=document.querySelector("input[name=Q14]:checked").value,t=document.querySelector("input[name=Q15]:checked").value,a=document.querySelector("input[name=Q16]:checked").value,n=document.querySelector("input[name=Q17]:checked").value;if(localStorage.setItem("Q14",e),localStorage.setItem("Q15",t),localStorage.setItem("Q16",a),localStorage.setItem("Q17",n),document.getElementsByName("Q18")){var l=document.getElementById("Q18").value;localStorage.setItem("Q18",l)}if(document.getElementsByName("Q19")){var o=document.getElementById("Q19").value;localStorage.setItem("Q19",o)}if(document.getElementsByName("Q20")){var c=document.querySelector("input[name=Q20]:checked").value;localStorage.setItem("Q20",c)}if(this.state.accidents){var r=document.getElementById("Q21").value,i=document.getElementById("Q22").value,s=document.getElementById("Q23").value,m=document.getElementById("Q24").value;localStorage.setItem("Q21",r),localStorage.setItem("Q22",i),localStorage.setItem("Q23",s),localStorage.setItem("Q24",m)}var u=document.getElementById("Q25").value,d=document.querySelector("input[name=Q26]:checked").value;localStorage.setItem("Q25",u),localStorage.setItem("Q26",d),console.log(localStorage);var p={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(localStorage)};fetch("http://localhost/submitInsuranceRequest",p).then((function(e){return e.json()})).then((function(e){1===e.success&&(window.location.href="http://localhost/complete")}))}},{key:"componentWillMount",value:function(){localStorage.getItem("vehicles_data")||(window.location.href="http://localhost/form/3")}},{key:"appendAccidentQuestions",value:function(){if(this.state.accidents)return l.a.createElement(l.a.Fragment,null,l.a.createElement(k,{question:"No. of accidents that were your fault",qid:"Q21",val:this.existingValue("Q21")}),l.a.createElement(k,{question:"No. of accidents that were not your fault",qid:"Q22",val:this.existingValue("Q22")}),l.a.createElement(k,{question:"No. of claims",sub_question:"Weather, vandalism, uninsured motorist damage, etc.",qid:"Q23",val:this.existingValue("Q23")}),l.a.createElement(k,{question:"No. of tickets/violations",qid:"Q24",val:this.existingValue("Q24")}))}},{key:"checkValue",value:function(){"Yes"===document.querySelector("input[name=Q20]:checked").value?this.setState({accidents:!0}):this.setState({accidents:!1})}},{key:"existingValue",value:function(e){return localStorage.getItem(e)?localStorage.getItem(e):""}},{key:"back",value:function(){window.location.href="http://localhost/form/3"}},{key:"render",value:function(){var e,t=this;return"Yes"===localStorage.getItem("Q1")&&(e=l.a.createElement(l.a.Fragment,null,l.a.createElement(k,{question:"How long have you been insured?",qid:"Q18",label:"No. of years",val:this.existingValue("Q18")}),l.a.createElement(k,{question:"Current Provider",qid:"Q19",val:this.existingValue("Q19")}),l.a.createElement(E,{question:"Accident or tickets in the last 3 years",optno:"2",opt1:"Yes",opt2:"No",qid:"Q20",onClick:function(){return t.checkValue()},val:this.existingValue("Q20")}))),l.a.createElement("div",{className:"container"},l.a.createElement(f,null),l.a.createElement("div",{className:"page"},l.a.createElement("div",{className:"questions"},l.a.createElement("p",{className:"question",style:{textAlign:"left"}},"Driver Information"),l.a.createElement(E,{question:"Gender",optno:"2",opt1:"Male",opt2:"Female",qid:"Q14",val:this.existingValue("Q14")}),l.a.createElement(E,{question:"Marital Status",optno:"4",opt1:"Single",opt2:"Married",opt3:"Divorced",opt4:"Widowed",qid:"Q15",val:this.existingValue("Q15")}),l.a.createElement(E,{question:"Credit Score",optno:"4",opt1:"Excellent (720+)",opt2:"Good (680-719)",opt3:"Average (580-679)",opt4:"Poor (Below 580)",qid:"Q16",val:this.existingValue("Q16")}),l.a.createElement(E,{question:"Highest level of education",optno:"5",opt1:"Doctoral",opt2:"Masters",opt3:"Bachelors",opt4:"High School",opt5:"Other",qid:"Q17",val:this.existingValue("Q17")}),e,this.appendAccidentQuestions(),l.a.createElement(k,{question:"Email ID",qid:"Q25",val:this.existingValue("Q25")}),l.a.createElement(E,{question:"How did you hear about us?",optno:"5",opt1:"Facebook",opt2:"Google",opt3:"Twitter",opt4:"Instagram",opt5:"Other",qid:"Q26",val:this.existingValue("Q26")})),l.a.createElement("div",{className:"next-page",onClick:this.back},"\u2190 Go Back"),l.a.createElement("div",{className:"next-page",onClick:this.submit},"Next \u2192"),l.a.createElement(y.ProgressBar,{percent:80,filledBackground:"linear-gradient(to right, #56ccf2, #2f80ed)"})))}}]),a}(n.Component),q=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentWillMount",value:function(){localStorage.getItem("zip_code")&&localStorage.getItem("insurance_type")||(window.location.href="http://localhost/")}},{key:"back",value:function(){window.location.href="http://localhost/"}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(f,null),l.a.createElement("div",{className:"page"},l.a.createElement("h1",{className:"success",style:{textAlign:"left"}},"Done!"),l.a.createElement("p",{className:"success-msg"},"Thank you for your information. Our insurance agency will contact you within the next hour to offer the cheapest auto insurance plans available in the state of Michigan."),l.a.createElement("div",{style:{paddingTop:"40vh"}}),l.a.createElement("div",{className:"next-page",onClick:this.back},"\u2190 Back to Home"),l.a.createElement(y.ProgressBar,{percent:100,filledBackground:"linear-gradient(to right, #56ccf2, #2f80ed)"})))}}]),a}(n.Component);var S=function(){return l.a.createElement(r.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:v}),l.a.createElement(i.a,{exact:!0,path:"/form/1",component:b}),l.a.createElement(i.a,{exact:!0,path:"/form/2",component:x}),l.a.createElement(i.a,{exact:!0,path:"/form/3",component:w}),l.a.createElement(i.a,{exact:!0,path:"/form/4",component:N}),l.a.createElement(i.a,{exact:!0,path:"/complete",component:q}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.4b90d8ae.chunk.js.map
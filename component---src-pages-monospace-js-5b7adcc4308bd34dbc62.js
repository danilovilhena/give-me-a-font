(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+d83":function(t,o,s){"use strict";var a=s("q1tI"),e=s.n(a);o.a=function(t){var o=t.children;return e.a.createElement("button",{className:"text-xl md:text-2xl lg:text-2.5xl font-bold text-purple-700 border-4 border-purple-700 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition duration-300 py-2 px-4 md:px-6 lg:px-8 m-3 lg:m-4 rounded-lg"},o)}},"7oih":function(t,o,s){"use strict";var a=s("q1tI"),e=s.n(a),i=s("Wbzz");o.a=function(t){var o=t.children;return e.a.createElement(e.a.Fragment,null,e.a.createElement("header",{className:"max-w-6xl w-4/5 mx-auto flex justify-center mt-4 mb-12"},e.a.createElement(i.Link,{to:"/",className:"transition duration-300 font-bold text-4xl text-purple-700 hover:text-purple-600",style:{fontFamily:["Pacifico","sans-serif"]}},"Give me a font!")),o,e.a.createElement("footer",{className:"max-w-6xl w-4/5 mx-auto flex justify-center mb-4 mt-12"},e.a.createElement("p",{className:"text-center text-xl text-purple-700"},"Developed by ",e.a.createElement("a",{className:"hover:text-purple-600 hover:underline transition duration-300",href:"https://danilovilhena.com/en"},"Danilo Vilhena"))))}},Z8DC:function(t,o,s){"use strict";s.r(o);var a=s("q1tI"),e=s.n(a),i=s("Wbzz"),n=s("7oih"),l=s("la6v"),c=s("+d83"),f=s("zU40");o.default=function(){var t,o,s,a=f.items[Math.floor(Math.random()*f.items.length)],r=(t=a,o="https://fonts.googleapis.com/css2?family="+encodeURIComponent(t.family),s=[[],[]],Object.keys(t.files).toString().includes("italic")?(o+=":ital,wght@",Object.keys(t.files).forEach((function(t){"regular"===t?s[0].push("400"):"italic"===t?s[1].push("400"):t.includes("italic")?s[1].push(t.replace(/\D/g,"")):s[0].push(t)})),s[0].sort((function(t,o){return t-o})),s[1].sort((function(t,o){return t-o})),s[0].forEach((function(t){o+="0,"+t+";"})),s[1].forEach((function(t){o+="1,"+t+";"})),o=o.slice(0,-1)):(o+=":wght@",Object.keys(t.files)[Object.keys(t.files).indexOf("regular")]="400",Object.keys(t.files).forEach((function(t){"regular"===t?s[0].push(400):s[0].push(t)})),s[0].map((function(t){return+t})),s[0].sort((function(t,o){return t-o})),o+=s[0].toString().split(",").join(";")),[o+="&display=swap",s]);return a.str=r[0],a.arr=r[1],e.a.createElement(n.a,null,e.a.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),e.a.createElement("link",{href:a.str,rel:"stylesheet"}),e.a.createElement("main",{className:"max-w-6xl w-4/5 mx-auto flex flex-col"},e.a.createElement("section",{className:"flex flex-col md:flex-row justify-between items-start md:items-center mb-12"},e.a.createElement("div",null,e.a.createElement("h2",null,"Here is your font:"),e.a.createElement("p",{className:"mt-2 text-purple-700 text-4xl",style:{fontFamily:[a.family,"monospace"]}},a.family)),e.a.createElement("div",{className:"mt-4 hidden md:block"},e.a.createElement("a",{className:"text-xl font-bold text-white border-4 border-blue-600 hover:border-blue-500 bg-blue-600 hover:bg-blue-500 transition duration-300 py-2 px-4 rounded-lg",href:"https://fonts.google.com/specimen/"+encodeURIComponent(a.family)},"Google Fonts"))),e.a.createElement("section",{className:"mb-12"},e.a.createElement("h2",{className:"mb-2"},"Font weights available:"),e.a.createElement("div",{className:"flex flex-wrap flex-col mb-4"},e.a.createElement("h3",{className:"text-3xl mb-2 font-bold"},"Regular"),e.a.createElement("div",{className:"flex flex-wrap justify-start"},a.arr[0].map((function(t){return e.a.createElement("div",{className:"mr-12",key:t},e.a.createElement("h4",{className:"text-2xl"},t),e.a.createElement("p",{className:"text-purple-700 text-3xl",style:{fontFamily:[a.family,"monospace"],fontWeight:t,fontStyle:"normal"}},a.family))})))),e.a.createElement("div",{className:"flex flex-wrap flex-col"},0!==a.arr[1].length&&e.a.createElement("h3",{className:"text-3xl mb-2 font-bold"},"Italic"),e.a.createElement("div",{className:"flex flex-wrap justify-start"},0!==a.arr[1].length&&a.arr[1].map((function(t){return e.a.createElement("div",{className:"mr-12",key:t},e.a.createElement("h4",{className:"text-2xl"},t),e.a.createElement("p",{className:"text-purple-700 text-3xl",style:{fontFamily:[a.family,"monospace"],fontWeight:t,fontStyle:"italic"}},a.family))}))))),e.a.createElement("section",{className:"flex flex-col-reverse md:flex-row items-center justify-center"},e.a.createElement(i.Link,{to:"/"},e.a.createElement(c.a,null,"Return")),e.a.createElement(i.Link,{to:"/monospace"},e.a.createElement(l.a,null,"Generate another")),e.a.createElement("a",{className:"text-xl font-bold text-white border-4 border-blue-600 hover:border-blue-500 bg-blue-600 hover:bg-blue-500 transition duration-300 py-2 px-4 mb-3 rounded-lg md:hidden",href:"https://fonts.google.com/specimen/"+encodeURIComponent(a.family)},"Google Fonts"))))}},la6v:function(t,o,s){"use strict";var a=s("q1tI"),e=s.n(a);o.a=function(t){return e.a.createElement("button",{click:t.click,className:"text-xl md:text-2xl lg:text-2.5xl font-bold text-white border-4 border-purple-700 hover:border-purple-600 bg-purple-700 hover:bg-purple-600 transition duration-300 py-2 px-4 md:px-6 lg:px-8 m-3 lg:m-4 rounded-lg"},t.children)}},zU40:function(t){t.exports=JSON.parse('{"name":"monospace","items":[{"family":"Anonymous Pro","variants":["regular","italic","700","700italic"],"files":{"700":"http://fonts.gstatic.com/s/anonymouspro/v14/rP2cp2a15UIB7Un-bOeISG3pFuAT0CnW7KOywKo.ttf","regular":"http://fonts.gstatic.com/s/anonymouspro/v14/rP2Bp2a15UIB7Un-bOeISG3pLlw89CH98Ko.ttf","italic":"http://fonts.gstatic.com/s/anonymouspro/v14/rP2fp2a15UIB7Un-bOeISG3pHl428AP44Kqr2Q.ttf","700italic":"http://fonts.gstatic.com/s/anonymouspro/v14/rP2ap2a15UIB7Un-bOeISG3pHl4OTCzc6IG30KqB9Q.ttf"}},{"family":"B612 Mono","variants":["regular","italic","700","700italic"],"files":{"700":"http://fonts.gstatic.com/s/b612mono/v5/kmK6Zq85QVWbN1eW6lJdayv4os9Pv7JGSg.ttf","regular":"http://fonts.gstatic.com/s/b612mono/v5/kmK_Zq85QVWbN1eW6lJl1wTcquRTtg.ttf","italic":"http://fonts.gstatic.com/s/b612mono/v5/kmK5Zq85QVWbN1eW6lJV1Q7YiOFDtqtf.ttf","700italic":"http://fonts.gstatic.com/s/b612mono/v5/kmKkZq85QVWbN1eW6lJV1TZkp8VLnbdWSg4x.ttf"}},{"family":"Courier Prime","variants":["regular","italic","700","700italic"],"files":{"700":"http://fonts.gstatic.com/s/courierprime/v2/u-4k0q2lgwslOqpF_6gQ8kELY7pMf-fVqvHoJXw.ttf","regular":"http://fonts.gstatic.com/s/courierprime/v2/u-450q2lgwslOqpF_6gQ8kELWwZjW-_-tvg.ttf","italic":"http://fonts.gstatic.com/s/courierprime/v2/u-4n0q2lgwslOqpF_6gQ8kELawRpX837pvjxPA.ttf","700italic":"http://fonts.gstatic.com/s/courierprime/v2/u-4i0q2lgwslOqpF_6gQ8kELawRR4-LfrtPtNXyeAg.ttf"}},{"family":"Cousine","variants":["regular","italic","700","700italic"],"files":{"700":"http://fonts.gstatic.com/s/cousine/v16/d6lNkaiiRdih4SpP9Z8K6T7G09BlnmQ.ttf","regular":"http://fonts.gstatic.com/s/cousine/v16/d6lIkaiiRdih4SpPzSMlzTbtz9k.ttf","italic":"http://fonts.gstatic.com/s/cousine/v16/d6lKkaiiRdih4SpP_SEvyRTo39l8hw.ttf","700italic":"http://fonts.gstatic.com/s/cousine/v16/d6lPkaiiRdih4SpP_SEXdTvM1_JgjmRpOA.ttf"}},{"family":"Cutive Mono","variants":["regular"],"files":{"regular":"http://fonts.gstatic.com/s/cutivemono/v9/m8JWjfRfY7WVjVi2E-K9H5RFRG-K3Mud.ttf"}},{"family":"DM Mono","variants":["300","300italic","regular","italic","500","500italic"],"files":{"300":"http://fonts.gstatic.com/s/dmmono/v3/aFTR7PB1QTsUX8KYvrGyIYSnbKX9Rlk.ttf","500":"http://fonts.gstatic.com/s/dmmono/v3/aFTR7PB1QTsUX8KYvumzIYSnbKX9Rlk.ttf","300italic":"http://fonts.gstatic.com/s/dmmono/v3/aFTT7PB1QTsUX8KYth-orYataIf4VllXuA.ttf","regular":"http://fonts.gstatic.com/s/dmmono/v3/aFTU7PB1QTsUX8KYhh2aBYyMcKw.ttf","italic":"http://fonts.gstatic.com/s/dmmono/v3/aFTW7PB1QTsUX8KYth-QAa6JYKzkXw.ttf","500italic":"http://fonts.gstatic.com/s/dmmono/v3/aFTT7PB1QTsUX8KYth-o9YetaIf4VllXuA.ttf"}},{"family":"Fira Code","variants":["300","regular","500","600","700"],"files":{"300":"http://fonts.gstatic.com/s/firacode/v10/uU9eCBsR6Z2vfE9aq3bL0fxyUs4tcw4W_GNsFVfxN87gsj0.ttf","500":"http://fonts.gstatic.com/s/firacode/v10/uU9eCBsR6Z2vfE9aq3bL0fxyUs4tcw4W_A9sFVfxN87gsj0.ttf","600":"http://fonts.gstatic.com/s/firacode/v10/uU9eCBsR6Z2vfE9aq3bL0fxyUs4tcw4W_ONrFVfxN87gsj0.ttf","700":"http://fonts.gstatic.com/s/firacode/v10/uU9eCBsR6Z2vfE9aq3bL0fxyUs4tcw4W_NprFVfxN87gsj0.ttf","regular":"http://fonts.gstatic.com/s/firacode/v10/uU9eCBsR6Z2vfE9aq3bL0fxyUs4tcw4W_D1sFVfxN87gsj0.ttf"}},{"family":"Fira Mono","variants":["regular","500","700"],"files":{"500":"http://fonts.gstatic.com/s/firamono/v9/N0bS2SlFPv1weGeLZDto1d33mf3VaZBRBQ.ttf","700":"http://fonts.gstatic.com/s/firamono/v9/N0bS2SlFPv1weGeLZDtondv3mf3VaZBRBQ.ttf","regular":"http://fonts.gstatic.com/s/firamono/v9/N0bX2SlFPv1weGeLZDtQIfTTkdbJYA.ttf"}},{"family":"IBM Plex Mono","variants":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"files":{"100":"http://fonts.gstatic.com/s/ibmplexmono/v6/-F6pfjptAgt5VM-kVkqdyU8n3kwq0n1hj-sNFQ.ttf","200":"http://fonts.gstatic.com/s/ibmplexmono/v6/-F6qfjptAgt5VM-kVkqdyU8n3uAL8ldPg-IUDNg.ttf","300":"http://fonts.gstatic.com/s/ibmplexmono/v6/-F6qfjptAgt5VM-kVkqdyU8n3oQI8ldPg-IUDNg.ttf","500":"http://fonts.gstatic.com/s/ibmplexmono/v6/-F6qfjptAgt5VM-kVkqdyU8n3twJ8ldPg-IUDNg.ttf","600":"http://fonts.gstatic.com/s/ibmplexmono/v6/-F6qfjptAgt5VM-kVkqdyU8n3vAO8ldPg-IUDNg.ttf","700":"http://fonts.gstatic.com/s/ibmplexmono/v6/-F6qfjptAgt5VM-kVkqdyU8n3pQP8ldPg-IUDNg.ttf","100italic":"http://fonts.gstatic.com/s/ibmplexmono/v6/-F6rfjptAgt5VM-kVkqdyU8n1ioStndlre4dFcFh.ttf","200italic":"http://fonts.gstatic.com/s/ibmplexmono/v6/-F6sfjptAgt5VM-kVkqdyU8n1ioSGlZFh8ARHNh4zg.ttf","300italic":"http://fonts.gstatic.com/s/ibmplexmono/v6/-F6sfjptAgt5VM-kVkqdyU8n1ioSflVFh8ARHNh4zg.ttf","regular":"http://fonts.gstatic.com/s/ibmplexmono/v6/-F63fjptAgt5VM-kVkqdyU8n5igg1l9kn-s.ttf","italic":"http://fonts.gstatic.com/s/ibmplexmono/v6/-F6pfjptAgt5VM-kVkqdyU8n1ioq0n1hj-sNFQ.ttf","500italic":"http://fonts.gstatic.com/s/ibmplexmono/v6/-F6sfjptAgt5VM-kVkqdyU8n1ioSJlRFh8ARHNh4zg.ttf","600italic":"http://fonts.gstatic.com/s/ibmplexmono/v6/-F6sfjptAgt5VM-kVkqdyU8n1ioSClNFh8ARHNh4zg.ttf","700italic":"http://fonts.gstatic.com/s/ibmplexmono/v6/-F6sfjptAgt5VM-kVkqdyU8n1ioSblJFh8ARHNh4zg.ttf"}},{"family":"Inconsolata","variants":["200","300","regular","500","600","700","800","900"],"files":{"200":"http://fonts.gstatic.com/s/inconsolata/v21/QldgNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLYxYWI2qfdm7LppwU8aRr8lleY2co.ttf","300":"http://fonts.gstatic.com/s/inconsolata/v21/QldgNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLYxYWI2qfdm7Lpp9s8aRr8lleY2co.ttf","500":"http://fonts.gstatic.com/s/inconsolata/v21/QldgNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLYxYWI2qfdm7Lpp7c8aRr8lleY2co.ttf","600":"http://fonts.gstatic.com/s/inconsolata/v21/QldgNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLYxYWI2qfdm7Lpp1s7aRr8lleY2co.ttf","700":"http://fonts.gstatic.com/s/inconsolata/v21/QldgNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLYxYWI2qfdm7Lpp2I7aRr8lleY2co.ttf","800":"http://fonts.gstatic.com/s/inconsolata/v21/QldgNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLYxYWI2qfdm7LppwU7aRr8lleY2co.ttf","900":"http://fonts.gstatic.com/s/inconsolata/v21/QldgNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLYxYWI2qfdm7Lppyw7aRr8lleY2co.ttf","regular":"http://fonts.gstatic.com/s/inconsolata/v21/QldgNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLYxYWI2qfdm7Lpp4U8aRr8lleY2co.ttf"}},{"family":"JetBrains Mono","variants":["100","200","300","regular","500","600","700","800","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic"],"files":{"100":"http://fonts.gstatic.com/s/jetbrainsmono/v3/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yK1jPVmUsaaDhw.ttf","200":"http://fonts.gstatic.com/s/jetbrainsmono/v3/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8SKxjPVmUsaaDhw.ttf","300":"http://fonts.gstatic.com/s/jetbrainsmono/v3/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8lqxjPVmUsaaDhw.ttf","500":"http://fonts.gstatic.com/s/jetbrainsmono/v3/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8-qxjPVmUsaaDhw.ttf","600":"http://fonts.gstatic.com/s/jetbrainsmono/v3/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8FqtjPVmUsaaDhw.ttf","700":"http://fonts.gstatic.com/s/jetbrainsmono/v3/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8L6tjPVmUsaaDhw.ttf","800":"http://fonts.gstatic.com/s/jetbrainsmono/v3/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8SKtjPVmUsaaDhw.ttf","regular":"http://fonts.gstatic.com/s/jetbrainsmono/v3/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxjPVmUsaaDhw.ttf","100italic":"http://fonts.gstatic.com/s/jetbrainsmono/v3/tDba2o-flEEny0FZhsfKu5WU4xD-IQ-PuZJJXxfpAO-Lf1OQk6OThxPA.ttf","200italic":"http://fonts.gstatic.com/s/jetbrainsmono/v3/tDba2o-flEEny0FZhsfKu5WU4xD-IQ-PuZJJXxfpAO8LflOQk6OThxPA.ttf","300italic":"http://fonts.gstatic.com/s/jetbrainsmono/v3/tDba2o-flEEny0FZhsfKu5WU4xD-IQ-PuZJJXxfpAO_VflOQk6OThxPA.ttf","italic":"http://fonts.gstatic.com/s/jetbrainsmono/v3/tDba2o-flEEny0FZhsfKu5WU4xD-IQ-PuZJJXxfpAO-LflOQk6OThxPA.ttf","500italic":"http://fonts.gstatic.com/s/jetbrainsmono/v3/tDba2o-flEEny0FZhsfKu5WU4xD-IQ-PuZJJXxfpAO-5flOQk6OThxPA.ttf","600italic":"http://fonts.gstatic.com/s/jetbrainsmono/v3/tDba2o-flEEny0FZhsfKu5WU4xD-IQ-PuZJJXxfpAO9VeVOQk6OThxPA.ttf","700italic":"http://fonts.gstatic.com/s/jetbrainsmono/v3/tDba2o-flEEny0FZhsfKu5WU4xD-IQ-PuZJJXxfpAO9seVOQk6OThxPA.ttf","800italic":"http://fonts.gstatic.com/s/jetbrainsmono/v3/tDba2o-flEEny0FZhsfKu5WU4xD-IQ-PuZJJXxfpAO8LeVOQk6OThxPA.ttf"}},{"family":"Major Mono Display","variants":["regular"],"files":{"regular":"http://fonts.gstatic.com/s/majormonodisplay/v5/RWmVoLyb5fEqtsfBX9PDZIGr2tFubRhLCn2QIndPww.ttf"}},{"family":"Nanum Gothic Coding","variants":["regular","700"],"files":{"700":"http://fonts.gstatic.com/s/nanumgothiccoding/v14/8QIYdjzHisX_8vv59_xMxtPFW4IXROws8xgecsV88t5V9r4.ttf","regular":"http://fonts.gstatic.com/s/nanumgothiccoding/v14/8QIVdjzHisX_8vv59_xMxtPFW4IXROwsy6QxVs1X7tc.ttf"}},{"family":"Nova Mono","variants":["regular"],"files":{"regular":"http://fonts.gstatic.com/s/novamono/v11/Cn-0JtiGWQ5Ajb--MRKfYGxYrdM9Sg.ttf"}},{"family":"Overpass Mono","variants":["300","regular","600","700"],"files":{"300":"http://fonts.gstatic.com/s/overpassmono/v6/_Xm3-H86tzKDdAPa-KPQZ-AC3oSWk_edB3Zf8EQ.ttf","600":"http://fonts.gstatic.com/s/overpassmono/v6/_Xm3-H86tzKDdAPa-KPQZ-AC3vCQk_edB3Zf8EQ.ttf","700":"http://fonts.gstatic.com/s/overpassmono/v6/_Xm3-H86tzKDdAPa-KPQZ-AC3pSRk_edB3Zf8EQ.ttf","regular":"http://fonts.gstatic.com/s/overpassmono/v6/_Xmq-H86tzKDdAPa-KPQZ-AC5ii-t_-2G38.ttf"}},{"family":"Oxygen Mono","variants":["regular"],"files":{"regular":"http://fonts.gstatic.com/s/oxygenmono/v8/h0GsssGg9FxgDgCjLeAd7ijfze-PPlUu.ttf"}},{"family":"PT Mono","variants":["regular"],"files":{"regular":"http://fonts.gstatic.com/s/ptmono/v8/9oRONYoBnWILk-9ArCg5MtPyAcg.ttf"}},{"family":"Roboto Mono","variants":["100","200","300","regular","500","600","700","100italic","200italic","300italic","italic","500italic","600italic","700italic"],"files":{"100":"http://fonts.gstatic.com/s/robotomono/v13/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vuPQ--5Ip2sSQ.ttf","200":"http://fonts.gstatic.com/s/robotomono/v13/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_XvqPQ--5Ip2sSQ.ttf","300":"http://fonts.gstatic.com/s/robotomono/v13/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_gPqPQ--5Ip2sSQ.ttf","500":"http://fonts.gstatic.com/s/robotomono/v13/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_7PqPQ--5Ip2sSQ.ttf","600":"http://fonts.gstatic.com/s/robotomono/v13/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_AP2PQ--5Ip2sSQ.ttf","700":"http://fonts.gstatic.com/s/robotomono/v13/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_Of2PQ--5Ip2sSQ.ttf","regular":"http://fonts.gstatic.com/s/robotomono/v13/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vqPQ--5Ip2sSQ.ttf","100italic":"http://fonts.gstatic.com/s/robotomono/v13/L0xoDF4xlVMF-BfR8bXMIjhOsXG-q2oeuFoqFrlnAeW9AJi8SZwt.ttf","200italic":"http://fonts.gstatic.com/s/robotomono/v13/L0xoDF4xlVMF-BfR8bXMIjhOsXG-q2oeuFoqFrnnAOW9AJi8SZwt.ttf","300italic":"http://fonts.gstatic.com/s/robotomono/v13/L0xoDF4xlVMF-BfR8bXMIjhOsXG-q2oeuFoqFrk5AOW9AJi8SZwt.ttf","italic":"http://fonts.gstatic.com/s/robotomono/v13/L0xoDF4xlVMF-BfR8bXMIjhOsXG-q2oeuFoqFrlnAOW9AJi8SZwt.ttf","500italic":"http://fonts.gstatic.com/s/robotomono/v13/L0xoDF4xlVMF-BfR8bXMIjhOsXG-q2oeuFoqFrlVAOW9AJi8SZwt.ttf","600italic":"http://fonts.gstatic.com/s/robotomono/v13/L0xoDF4xlVMF-BfR8bXMIjhOsXG-q2oeuFoqFrm5B-W9AJi8SZwt.ttf","700italic":"http://fonts.gstatic.com/s/robotomono/v13/L0xoDF4xlVMF-BfR8bXMIjhOsXG-q2oeuFoqFrmAB-W9AJi8SZwt.ttf"}},{"family":"Share Tech Mono","variants":["regular"],"files":{"regular":"http://fonts.gstatic.com/s/sharetechmono/v10/J7aHnp1uDWRBEqV98dVQztYldFc7pAsEIc3Xew.ttf"}},{"family":"Source Code Pro","variants":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","900","900italic"],"files":{"200":"http://fonts.gstatic.com/s/sourcecodepro/v13/HI_XiYsKILxRpg3hIP6sJ7fM7Pqt8srztO0rzmmkDQ.ttf","300":"http://fonts.gstatic.com/s/sourcecodepro/v13/HI_XiYsKILxRpg3hIP6sJ7fM7PqtlsnztO0rzmmkDQ.ttf","500":"http://fonts.gstatic.com/s/sourcecodepro/v13/HI_XiYsKILxRpg3hIP6sJ7fM7PqtzsjztO0rzmmkDQ.ttf","600":"http://fonts.gstatic.com/s/sourcecodepro/v13/HI_XiYsKILxRpg3hIP6sJ7fM7Pqt4s_ztO0rzmmkDQ.ttf","700":"http://fonts.gstatic.com/s/sourcecodepro/v13/HI_XiYsKILxRpg3hIP6sJ7fM7Pqths7ztO0rzmmkDQ.ttf","900":"http://fonts.gstatic.com/s/sourcecodepro/v13/HI_XiYsKILxRpg3hIP6sJ7fM7PqtvszztO0rzmmkDQ.ttf","200italic":"http://fonts.gstatic.com/s/sourcecodepro/v13/HI_ViYsKILxRpg3hIP6sJ7fM7PqlONMbtecv7Gy0DRzS.ttf","300italic":"http://fonts.gstatic.com/s/sourcecodepro/v13/HI_ViYsKILxRpg3hIP6sJ7fM7PqlONN_tucv7Gy0DRzS.ttf","regular":"http://fonts.gstatic.com/s/sourcecodepro/v13/HI_SiYsKILxRpg3hIP6sJ7fM7PqVOuHXvMY3xw.ttf","italic":"http://fonts.gstatic.com/s/sourcecodepro/v13/HI_QiYsKILxRpg3hIP6sJ7fM7PqlOOvTnsMnx3C9.ttf","500italic":"http://fonts.gstatic.com/s/sourcecodepro/v13/HI_ViYsKILxRpg3hIP6sJ7fM7PqlONMnt-cv7Gy0DRzS.ttf","600italic":"http://fonts.gstatic.com/s/sourcecodepro/v13/HI_ViYsKILxRpg3hIP6sJ7fM7PqlONMLsOcv7Gy0DRzS.ttf","700italic":"http://fonts.gstatic.com/s/sourcecodepro/v13/HI_ViYsKILxRpg3hIP6sJ7fM7PqlONNvsecv7Gy0DRzS.ttf","900italic":"http://fonts.gstatic.com/s/sourcecodepro/v13/HI_ViYsKILxRpg3hIP6sJ7fM7PqlONNXs-cv7Gy0DRzS.ttf"}},{"family":"Space Mono","variants":["regular","italic","700","700italic"],"files":{"700":"http://fonts.gstatic.com/s/spacemono/v6/i7dMIFZifjKcF5UAWdDRaPpZYFKQHwyVd3U.ttf","regular":"http://fonts.gstatic.com/s/spacemono/v6/i7dPIFZifjKcF5UAWdDRUEZ2RFq7AwU.ttf","italic":"http://fonts.gstatic.com/s/spacemono/v6/i7dNIFZifjKcF5UAWdDRYER8QHi-EwWMbg.ttf","700italic":"http://fonts.gstatic.com/s/spacemono/v6/i7dSIFZifjKcF5UAWdDRYERE_FeaGy6QZ3WfYg.ttf"}},{"family":"Syne Mono","variants":["regular"],"files":{"regular":"http://fonts.gstatic.com/s/synemono/v2/K2FzfZNHj_FHBmRbFvHzIqCkDyvqZA.ttf"}},{"family":"Ubuntu Mono","variants":["regular","italic","700","700italic"],"files":{"700":"http://fonts.gstatic.com/s/ubuntumono/v10/KFO-CneDtsqEr0keqCMhbC-BL-Hyv4xGemO1.ttf","regular":"http://fonts.gstatic.com/s/ubuntumono/v10/KFOjCneDtsqEr0keqCMhbBc9AMX6lJBP.ttf","italic":"http://fonts.gstatic.com/s/ubuntumono/v10/KFOhCneDtsqEr0keqCMhbCc_CsHYkYBPY3o.ttf","700italic":"http://fonts.gstatic.com/s/ubuntumono/v10/KFO8CneDtsqEr0keqCMhbCc_Mn33tYhkf3O1GVg.ttf"}},{"family":"VT323","variants":["regular"],"files":{"regular":"http://fonts.gstatic.com/s/vt323/v12/pxiKyp0ihIEF2hsYHpT2dkNE.ttf"}},{"family":"Xanh Mono","variants":["regular","italic"],"files":{"regular":"http://fonts.gstatic.com/s/xanhmono/v4/R70YjykVmvKCep-vWhSYmACQXzLhTg.ttf","italic":"http://fonts.gstatic.com/s/xanhmono/v4/R70ejykVmvKCep-vWhSomgqUfTfxTo24.ttf"}}]}')}}]);
//# sourceMappingURL=component---src-pages-monospace-js-5b7adcc4308bd34dbc62.js.map
(function(window){var svgSprite='<svg><symbol id="icon-bubble" viewBox="0 0 1024 1024"><path d="M536 64.2c-41.3 0-82.5 5.9-122 17.7-55 16.5-106.4 44.4-150.1 81.3-43.5 36.7-79.3 82.1-104.8 132.7-28.4 56.6-44.4 119.1-45.2 182.3-0.6 47.7 7.7 95.3 23.4 140.3 9.9 28.2 26.7 53.3 37 81.3 10 27.1 8.5 56.4 0.5 83.9C158.6 839.6 92.1 917.9 62.2 951c-5 5.6-0.5 14.1 7 13.2 44.7-5.5 147.5-18.2 204-25.2 17.4 0 35.3-4.9 52.7-6.6 19.9-1.9 39.8-3.9 59.7-6.2 58.5-6.6 120.3-12.6 180.8-23.8 92.2-17.1 181.5-46.2 251.7-108 89.2-78.6 141.2-192.9 141.2-311.1 0-231.4-189.5-419.1-423.3-419.1zM341.1 527.4c-34.7 0-62.9-27.9-62.9-62.2s28.2-62.2 62.9-62.2 62.9 27.9 62.9 62.2-28.1 62.2-62.9 62.2z m200.5 0c-34.7 0-62.9-27.9-62.9-62.2s28.2-62.2 62.9-62.2 62.9 27.9 62.9 62.2-28.2 62.2-62.9 62.2z m200.4 0c-34.7 0-62.9-27.9-62.9-62.2S707.3 403 742 403s62.9 27.9 62.9 62.2-28.2 62.2-62.9 62.2z" fill="#8a8a8a" ></path></symbol><symbol id="icon-danghui-copy" viewBox="0 0 1024 1024"><path d="M510.819616 63.10115300000001c231.101425 86.720084 371.34554 363.838565 251.22781200000003 588.357062l-293.181319-294.650787 111.897509-112.348788-69.985958-69.691245c-38.60525 37.848003-100.000552 45.9004-141.388171 29.227672L146.55023900000003 427.034886l126.2064 125.78684499999999 84.10656-83.802638 293.075919 294.16881c-143.414317 78.784344-342.221222 53.943586-488.94388799999996-98.510618l-71.046103 70.844511c21.271466 29.513174 39.098483 56.263421 61.27148199999999 78.689177-1.9217689999999998 2.309602-8.03193 7.327896-8.137331 7.454786-3.737114-0.599657-8.146541-2.037403-12.07399-2.037403-37.795814 0-68.327178 32.904411-68.327178 70.742181 0 37.795814 30.845518999999996 68.609611 68.6311 68.609611 37.817304 0 70.16298899999998-31.107485 70.16298899999998-68.914556 0-4.41045-0.9864669999999999-8.43102-1.763157-12.608156l10.92891-10.740622c168.685887 113.827465 353.549222 128.012536 552.49325 8.944719l82.132602 82.459037 112.442932-110.95504399999999-82.667791-83.590813C1112.3016039999998 405.910776 795.947516 54.554500000000075 510.819616 63.10115300000001L510.819616 63.10115300000001z" fill="#8a8a8a" ></path></symbol><symbol id="icon-renwu" viewBox="0 0 1024 1024"><path d="M875.374 790.199h0.183a392.411 392.411 0 0 0-174.958-328.156 268.032 268.032 0 0 0 52.37-159.817c0-146.724-116.553-265.655-260.352-265.655-143.726 0-260.315 118.93-260.315 265.655 0 59.977 19.492 115.347 52.37 159.817A392.411 392.411 0 0 0 109.714 790.2h0.147v124.343l-0.074 1.536c0 18.651 14.775 33.682 33.024 33.682a33.353 33.353 0 0 0 32.988-33.646l-0.073-1.572V780.105a324.498 324.498 0 0 1 156.196-268.873 255.963 255.963 0 0 0 160.695 56.65 255.963 255.963 0 0 0 160.695-56.613 324.462 324.462 0 0 1 156.233 268.726v134.583c-0.036 0.476-0.11 0.988-0.11 1.5 0 18.651 14.775 33.682 33.024 33.682a33.353 33.353 0 0 0 32.988-33.646l-0.073-1.572V790.199zM492.617 495.36c-104.521 0-189.257-86.455-189.257-193.134s84.736-193.133 189.257-193.133 189.294 86.454 189.294 193.133-84.773 193.097-189.294 193.097z" fill="#8a8a8a" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)
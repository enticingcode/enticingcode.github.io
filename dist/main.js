(()=>{"use strict";let e=document.querySelector("#content");function t(e,t,n){let o=document.createElement("button");return o.className=e,o.textContent=t,o.setAttribute("id",n),o}function n(){let n=function(e,t){const n=document.createElement("header");n.setAttribute("id","header");let o=document.createElement("h1");return o.textContent="Bienvenidos a NavaMar",n.append(o),n}(),o=function(){let e=document.createElement("div");e.setAttribute("id","videoContainer");let t=document.createElement("video");return t.src="/video/POKEVID.mp4",t.autoplay=!0,t.muted=!0,t.loop=!0,t.setAttribute("id","videoBanner"),e.append(t),e}(),c=function(e){let n=document.createElement("nav");n.setAttribute("id","navBar");let o=t("navBtn","Home","home"),c=t("navBtn","About","about"),r=t("navBtn","Food","food"),d=t("navBtn","Contact","contact");return n.append(o),n.append(c),n.append(r),n.append(d),n}();e.append(o),e.append(n),e.append(c)}let o=document.querySelector("#content");n();const c=document.querySelector("#home"),r=document.querySelector("#about");document.querySelector("#food"),document.querySelector("#contact"),c.addEventListener("click",n),r.addEventListener("click",(function(){let e=function(e,t){let n=document.createElement("div");return n.setAttribute("id","info"),n.textContent="Welcome to NorthWest Arkansas's best Poke Experience.",n}();o.append(e)}))})();
(()=>{"use strict";const e=()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("div"),c=document.createElement("h1");c.textContent="Sunny Coffee Shop",n.appendChild(c),n.setAttribute("id","header"),t.appendChild(n);const d=document.createElement("img");d.src="https://perfectdailygrind.com/es/wp-content/uploads/sites/2/2019/03/coffee-bar.jpg",d.height="300",t.appendChild(d);const o=document.createElement("p");o.textContent="Get the best coffee in town with only $2 !! ",t.appendChild(o),e.appendChild(t)};function t(){const e=document.querySelector("#content"),t=document.querySelector(".page-content");t&&e.removeChild(t)}(()=>{const n=document.querySelector("#content"),c=document.createElement("div");c.classList.add("tabDiv");const d=document.createElement("div"),o=document.createElement("div"),a=document.createElement("div");d.setAttribute("id","home-btn"),o.setAttribute("id","menu-btn"),a.setAttribute("id","contact-btn"),d.classList.add("tab"),o.classList.add("tab"),a.classList.add("tab"),d.textContent="Home",o.textContent="Menu",a.textContent="Contact",c.appendChild(d),c.appendChild(o),c.appendChild(a),n.appendChild(c),d.addEventListener("click",(()=>{t(),e()})),o.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content"),t.setAttribute("id","menu");const n=document.createElement("h2");n.textContent="Our MENU";const c=document.createElement("ul"),d=document.createElement("li");d.textContent="Americano";const o=document.createElement("li");o.textContent="Cafe Latte";const a=document.createElement("li");a.textContent="Matcha Latte",c.appendChild(d),c.appendChild(o),c.appendChild(a),t.appendChild(n),t.appendChild(c),e.appendChild(t)})()})),a.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("form");n.classList.add("contact-form");const c=document.createElement("input");c.type="text",c.placeholder="Enter title",n.appendChild(c);const d=document.createElement("input");d.type="text",d.placeholder="Enter adress",n.appendChild(d);const o=document.createElement("input");o.type="text",o.placeholder="Enter phone number",n.appendChild(o);const a=document.createElement("input");a.type="text",a.placeholder="Enter name",n.appendChild(a);const l=document.createElement("input");l.type="submit",l.value="Submit",n.appendChild(l),t.appendChild(n),e.appendChild(t)})()}))})(),e()})();
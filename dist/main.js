!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);const n=e=>{let t=JSON.parse(localStorage.getItem(e)),o=document.getElementById("todoBody");if(o.innerHTML="",0===t.todos.length){let t=document.createElement("p");t.setAttribute("class","emptyTodoMessage"),t.innerText=`No todo items for ${e} yet`,document.getElementsByTagName("table")[0].setAttribute("class","table table-striped"),document.getElementById("todoBody").appendChild(t)}else document.getElementsByTagName("table")[0].setAttribute("class","table table-striped"),t.todos.forEach(e=>{let t=document.createElement("tr"),n=`\n        <td>${e.title}</td>\n        <td>${e.description}</td>\n        <td>${e.dueDate}</td>\n        <td>${e.priority}</td>\n        <td>${e.notes}</td>\n        <td><button class="btn-sm btn btn-primary">Delete</button></td>\n      `;t.innerHTML=n,o.appendChild(t)})};class r{constructor(e){this.name=e,this.todos=[];let t=Number(localStorage.projectCount);this.id=++t,localStorage.setItem("projectCount",t)}}void 0===localStorage.projectCount&&localStorage.setItem("projectCount",0);var a=(()=>{let e=JSON.parse(localStorage.getItem("projectsArray"))?JSON.parse(localStorage.getItem("projectsArray")):[];return{create(t){""===t&&(t="Project Name (Please customize name)");let o=new r(t);return localStorage.setItem(t,JSON.stringify(o)),e.push(o),localStorage.setItem("projectsArray",JSON.stringify(e)),o},update(t){let o=e.find(e=>e.id===t),n=e.findIndex(e=>e.name===o.name);return o.name=document.getElementById("projectName").value,e.splice(n,1,o),localStorage.setItem(o.name,JSON.stringify(o)),localStorage.setItem("projectsArray",JSON.stringify(e)),o},delete(t){let o=JSON.parse(localStorage.getItem(t)),n=e.findIndex(e=>e.name===o.name);localStorage.removeItem(t),e.splice(n,1),localStorage.setItem("projectsArray",JSON.stringify(e))}}})();class d{constructor(e,t,o,n,r="",a){this.title=e,this.description=t,this.dueDate=o,this.priority=n,this.notes=r,this.project=a}}var l=(()=>({create(e,t,o,n,r="",a){let l=new d(e,t,o,n,r,a),s=JSON.parse(localStorage.getItem(a));return s.todos.push(l),localStorage.setItem(a,JSON.stringify(s)),l},update(){},delete(e,t){let o=JSON.parse(localStorage.getItem(e)),n=o.todos.findIndex(e=>e.title==t);o.todos.splice(n,1),localStorage.setItem(e,JSON.stringify(o))}}))();const s=e=>{let t=i(e);m(t,e)},i=e=>{let t=document.createElement("button");return t.setAttribute("class","btn btn-sm btn-block btn-primary addTodoBtn"),t.setAttribute("id",`addTodoBtn-${e.id}`),t.setAttribute("data-id",e.id),t.innerText=`Add Todo for ${e.name}`,t.addEventListener("click",t=>{t.stopPropagation(),c(t.target,e)}),t},c=(e,t)=>{let o=e.getAttribute("data-id");console.log(o),e.setAttribute("class","d-none"),document.getElementById("todosSection").setAttribute("class","mt-3"),document.getElementById("todosForm").setAttribute("data-id",t.id)},m=(e,t)=>{document.getElementsByClassName("addTodoBtn")[0]&&document.getElementById("todosDiv").removeChild(document.getElementsByClassName("addTodoBtn")[0]),null===document.getElementById(`addTodoBtn-${t.id}`)&&document.getElementById("todosDiv").appendChild(e)},u=e=>{g(),p(e)},g=()=>{let e=document.getElementsByClassName("emptyMessage")[0];void 0!==e&&document.getElementsByTagName("ul")[0].removeChild(e)},p=e=>{let t=document.createElement("li"),o=document.createElement("span");o.setAttribute("id",`projectSpan-${e.id}`);let r=y("delete",e),a=y("update",e);t.setAttribute("class","list-group-item"),t.setAttribute("id",`projectLi-${e.id}`),o.innerText=e.name,t.appendChild(o),t.addEventListener("click",()=>{s(e),n(e.name)}),t.appendChild(r),t.appendChild(a),document.getElementsByTagName("ul")[0].appendChild(t)},y=(e,t)=>{let o=b(e,t);return f(o,t,e),o},b=(e,t)=>{let o="update"===e?"btn-info":"btn-danger",n="update"===e?`update-proj-${t.id}`:`delete-proj-${t.id}`,r=document.createElement("button");return r.setAttribute("class",`btn btn-sm ml-3 ${o}`),r.setAttribute("id",n),r.innerText=e.toUpperCase(),"update"===e&&r.setAttribute("data-id",`${t.id}`),r},f=(e,t,o)=>{e.addEventListener("click",e=>{e.stopPropagation(),"update"===o?S(e.target,t):j(t)})},S=(e,t)=>{E(e,"update",e.getAttribute("data-id")),document.getElementById("projectName").value=t.name},E=(e,t,o)=>{document.getElementById("projectNameForm").removeAttribute("class"),document.getElementById("projectNameForm").setAttribute("data-action",t),document.getElementById("projectNameForm").setAttribute("data-id",o),e.setAttribute("class","d-none")},j=e=>{a.delete(e.name),B(e)},B=e=>{let t=document.getElementById(`projectLi-${e.id}`);if(document.getElementsByTagName("ul")[0].removeChild(t),"[]"===localStorage.projectsArray){let e=document.createElement("li");e.setAttribute("class","list-group-item emptyMessage"),e.innerText="No projects yet, create one",document.getElementsByTagName("ul")[0].appendChild(e)}},I=e=>{let t=a.create(e);u(t)},N=e=>{let t=a.update(Number(e.getAttribute("data-id")));document.getElementById(`update-proj-${e.getAttribute("data-id")}`).setAttribute("class","btn btn-sm btn-info ml-3"),document.getElementById(`projectSpan-${e.getAttribute("data-id")}`).innerText=t.name};(()=>{if(null===localStorage.getItem("projectsArray")){let e=[];localStorage.setItem("projectsArray",JSON.stringify(e))}})(),(()=>{"0"===localStorage.projectCount&&a.create("Default Project");if(void 0!==localStorage["Default Project"]){let e=JSON.parse(localStorage["Default Project"]);s(e),n(e.name)}let e=JSON.parse(localStorage["Default Project"]);void 0!==e&&0===e.todos.length&&(l.create("First task","Basic stuff",(new Date).toDateString(),"High","No notes","Default Project"),s(e),n("Default Project"))})(),(()=>{let e=JSON.parse(localStorage.getItem("projectsArray"));if(e.length>0)e.forEach(e=>{u(e)});else{let e=document.createElement("li");e.setAttribute("class","list-group-item emptyMessage"),e.innerText="No projects yet, create one",document.getElementsByTagName("ul")[0].appendChild(e)}})(),document.getElementById("projectNameForm").addEventListener("submit",e=>{e.preventDefault(),(e=>{let t=document.getElementById("projectName").value;"new"===e.getAttribute("data-action")?I(t):N(e),e.setAttribute("class","d-none"),e.reset(),document.getElementById("addProjBtn").setAttribute("class","btn btn-sm btn-primary mt-2")})(e.target)}),document.getElementById("addProjBtn").addEventListener("click",e=>{E(e.target,"new")}),document.getElementById("todosForm").addEventListener("submit",e=>{e.preventDefault();let t=document.getElementsByClassName("todo-form"),o=t[0].value,n=t[1].value,r=new Date(t[2].value).toDateString(),a=document.getElementsByTagName("select")[0].value,d=JSON.parse(localStorage.projectsArray),i=Number(e.target.getAttribute("data-id")),c=d.find(e=>e.id===i),m=t[3].value;l.create(o,n,r,a,m,c.name),console.log("Submitted Todo"),e.target.reset(),document.getElementById("todosSection").setAttribute("class","d-none"),document.getElementById("todosDiv").removeChild(document.getElementById(`addTodoBtn-${c.id}`)),null===document.getElementById(`addTodoBtn-${c.id}`)&&s(c)})}]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();const P="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='32'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20256'%3e%3cpath%20fill='%23F7DF1E'%20d='M0%200h256v256H0V0Z'%3e%3c/path%3e%3cpath%20d='m67.312%20213.932l19.59-11.856c3.78%206.701%207.218%2012.371%2015.465%2012.371c7.905%200%2012.89-3.092%2012.89-15.12v-81.798h24.057v82.138c0%2024.917-14.606%2036.259-35.916%2036.259c-19.245%200-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157%208.421%2011.859%2014.607%2023.715%2014.607c9.969%200%2016.325-4.984%2016.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044%2013.747-31.792%2035.228-31.792c15.294%200%2026.292%205.328%2034.196%2019.247l-18.732%2012.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046%200-11.514%204.468-11.514%2010.31c0%207.217%204.468%2010.14%2014.778%2014.608l6.014%202.577c20.45%208.765%2031.963%2017.7%2031.963%2037.804c0%2021.654-17.012%2033.51-39.867%2033.51c-22.339%200-36.774-10.654-43.819-24.574'%3e%3c/path%3e%3c/svg%3e",L="/vite.svg";class y{constructor({id:t,isActive:s,balance:a,avatar:n,firstName:r,lastName:o,gender:m}){this.id=t,this.isActive=s,this.balance=a,this.avatar=n,this.firstName=r,this.lastName=o,this.gender=m}}const h=e=>{const{avatar:t,balance:s,first_name:a,gender:n,id:r,isActive:o,last_name:m}=e;return new y({avatar:t,balance:s,firstName:a,gender:n,id:r,isActive:o,lastName:m})},p=async(e=1)=>{const t=`http://localhost:3001/users?_page=${e}`;return(await(await fetch(t)).json()).map(h)},c={currentPage:0,users:[]},N=async()=>{const e=await p(c.currentPage+1);e.length!==0&&(c.currentPage+=1,c.users=e)},b=async()=>{if(c.currentPage===1)return;const e=await p(c.currentPage-1);c.users=e,c.currentPage-=1},T=e=>{let t=!1;c.users=c.users.map(s=>s.id===e.id?(t=!0,e):s),c.users.length<10&&!t&&c.users.push(e)},x=async()=>{const e=await p(c.currentPage);if(e.length===0&&c.currentPage!=1){await b();return}c.users=e},l={loadNextPage:N,loadPreviousPage:b,onUserChanged:T,reloadPage:x,getUsers:()=>[...c.users],getCurrentPage:()=>c.currentPage},E=`<div class="modal-dialog">
    <form novalidate>
        <span>User</span>
        <input type="text" name="firstName" placeholder="First Name" />
        <input type="text" name="lastName" placeholder="Last Name" />
        <input type="number" name="balance" placeholder="Balance" />

        <div>
            <input type="checkbox" id="is-active" name="isActive" checked/>
            <label for="is-active">is active?</label>
        </div>

        <button type="submit">
            Save
        </button>

    </form>
</div>`,S=async e=>{const t=`http://localhost:3001/users/${e}`,a=await(await fetch(t)).json();return h(a)};let i,d,f={};const w=async e=>{if(i==null||i.classList.remove("hide-modal"),f={},!e)return;const t=await S(e);$(t)},v=()=>{i==null||i.classList.add("hide-modal"),d==null||d.reset()},$=e=>{d.querySelector('[name="firstName"]').value=e.firstName,d.querySelector('[name="lastName"]').value=e.lastName,d.querySelector('[name="balance"]').value=e.balance,d.querySelector('[name="isActive"]').checked=e.isActive,f=e},A=(e,t)=>{i||(i=document.createElement("div"),i.innerHTML=E,i.className="modal-container hide-modal",d=i.querySelector("form"),i.addEventListener("click",s=>{s.target.className==="modal-container"&&v()}),d.addEventListener("submit",async s=>{s.preventDefault();const a=new FormData(d),n={...f};for(const[r,o]of a){if(r==="balance"){n[r]=+o;continue}if(r==="isActive"){n[r]=o==="on";continue}n[r]=o}await t(n),v()}),e.append(i))},U=async e=>{const t=`http://localhost:3001/users/${e}`,a=await(await fetch(t,{method:"DELETE"})).json();return console.log({deleteResult:a}),!0};let u;const M=()=>{const e=document.createElement("table"),t=document.createElement("thead");t.innerHTML=`
        <tr>
            <th>#ID</th>
            <th>Balance</th>
            <th>FistName</th>
            <th>LastName</th>
            <th>Active</th>
            <th>Actions</th>
        </tr>
    `;const s=document.createElement("tbody");return e.append(t,s),e},B=e=>{const t=e.target.closest(".select-user");if(!t)return;const s=t.getAttribute("data-id");w(s)},C=async e=>{const t=e.target.closest(".delete-user");if(!t)return;const s=t.getAttribute("data-id");try{await U(s),await l.reloadPage(),document.querySelector("#current-page").innerText=l.getCurrentPage(),g()}catch(a){console.log(a),alert("No se pudo eliminar")}},g=e=>{const t=l.getUsers();u||(u=M(),e.append(u),u.addEventListener("click",B),u.addEventListener("click",C));let s="";t.forEach(a=>{s+=`
            <tr>
                <td>${a.id}</td>
                <td>${a.balance}</td>
                <td>${a.firstName}</td>
                <td>${a.lastName}</td>
                <td>${a.isActive}</td>
                <td>
                    <a href="#/" class="select-user" data-id="${a.id}">Select</a>
                    |
                    <a href="#/" class="delete-user" data-id="${a.id}">Delete</a>
                </td>
            </tr>
        `}),u.querySelector("tbody").innerHTML=s},H=e=>{const t=document.createElement("button");t.innerText=" Next >";const s=document.createElement("button");s.innerText="< Prev ";const a=document.createElement("span");a.id="current-page",a.innerText=l.getCurrentPage(),e.append(s,a,t),t.addEventListener("click",async()=>{await l.loadNextPage(),a.innerText=l.getCurrentPage(),console.log(l.getCurrentPage()),g(e)}),s.addEventListener("click",async()=>{await l.loadPreviousPage(),a.innerText=l.getCurrentPage(),console.log(l.getCurrentPage()),g(e)})},q=e=>{const t=document.createElement("button");t.innerText="+",t.classList.add("fab-button"),e.append(t),t.addEventListener("click",()=>{w()})},k=e=>{const{avatar:t,balance:s,firstName:a,gender:n,id:r,isActive:o,lastName:m}=e;return{avatar:t,balance:s,first_name:a,gender:n,id:r,isActive:o,last_name:m}},F=async e=>{const t=new y(e);if(!t.firstName||!t.lastName)throw"First & last name are required";const s=k(t);let a;return t.id?a=await j(s):a=await O(s),h(a)},O=async e=>{const a=await(await fetch("http://localhost:3001/users",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})).json();return console.log({newUser:a}),a},j=async e=>{const t=`http://localhost:3001/users/${e.id}`,a=await(await fetch(t,{method:"PATCH",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})).json();return console.log({updatedUser:a}),a},D=async e=>{e.innerHTML="Loading...",await l.loadNextPage(),e.innerHTML="",g(e),H(e),q(e),A(e,async t=>{const s=await F(t);l.onUserChanged(s),g()})};document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${L}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${P}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 id="app-title">Hello Vite!</h1>
    <div class="card">
     
    </div>
  </div>
`;const _=document.querySelector(".card");D(_);

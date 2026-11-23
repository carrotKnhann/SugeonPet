import{_ as e,a as t,d as n,h as r,m as i,o as a,s as o,t as s,v as c,y as l}from"./layouts-BlB4NUJ2.js";import{a as u,d,m as f,o as p,p as m,s as h,u as g}from"./seo-BfiRbxc3.js";import{t as _}from"./prefetch-CG4KPVRn.js";var v=!1,y=[],b={newIds:[],seasonalIds:[]},x=[];function S(e){if(!e)return``;let t=h[e.rarity],n=i(e);return`<a href="/pet.html?id=${encodeURIComponent(e.id)}" class="pet-card bestiary-card" style="--r:${t}">
    <div class="bestiary-card-inner">
      <div class="bestiary-card-art-wrap">
        <span class="bestiary-badge bestiary-badge-float" style="background:var(--r)">${r(e.rarity)}</span>
        <div class="bestiary-card-art art-frame">${a(e.image,n,``)}</div>
      </div>
      <div class="bestiary-card-foot">
        <h2 class="bestiary-name truncate">${n}</h2>
      </div>
    </div>
  </a>`}function C(){document.querySelector(`#app`).innerHTML=s(`updates`,c()),v?o():(t(),v=!0,_(document)),w()}function w(){let t=document.getElementById(`newGrid`),r=document.getElementById(`seasonalGrid`),i=document.getElementById(`changelogList`);t&&(t.innerHTML=(b.newIds||[]).map(e=>S(g(y,e))).join(``)||`<p class="text-muted" data-i18n="updates.empty">${e(`updates.empty`)}</p>`),r&&(r.innerHTML=(b.seasonalIds||[]).map(e=>S(g(y,e))).join(``)||`<p class="text-muted" data-i18n="updates.empty">${e(`updates.empty`)}</p>`),i&&(i.innerHTML=x.length?x.map(e=>{let t=e.petId?`<a class="text-amber" href="/pet.html?id=${encodeURIComponent(e.petId)}">${e.title}</a>`:`<strong>${e.title}</strong>`;return`<li>
            <time class="num text-xs text-muted">${e.date}</time>
            <div class="mt-1">${t}</div>
            <p class="text-sm text-muted mt-1">${e.body}</p>
            ${(e.tags||[]).map(e=>`<span class="changelog-tag">${e}</span>`).join(``)}
          </li>`}).join(``):`<li class="text-muted" data-i18n="updates.empty">${e(`updates.empty`)}</li>`),n(document)}[y,b,x]=await Promise.all([m(),f(),d().then(e=>e.entries||[])]),C(),u({title:`${e(`updates.title`)} · SugeonPet`,description:e(`updates.lead`),url:`${p()}/updates.html`}),window.addEventListener(`sugeon:lang`,()=>{n(document),w()}),l(()=>C());
import{_ as e,a as t,b as n,d as r,h as i,m as a,o,s,t as c,v as l,y as u}from"./layouts-BlB4NUJ2.js";import{a as d,o as f,p,s as m,u as h}from"./seo-BfiRbxc3.js";import{i as g,n as _,r as v}from"./compare-Hi9okjPH.js";var y=!1,b=[];function x(){document.querySelector(`#app`).innerHTML=c(`compare`,l()),y?s():(t(),y=!0),document.getElementById(`btnClearCompare`)?.addEventListener(`click`,()=>{_(),S(),n.click()}),S()}function S(){let t=document.getElementById(`compareBoard`);if(!t)return;let s=v();if(!s.length){t.innerHTML=`<p class="text-muted" data-i18n="compare.empty">${e(`compare.empty`)}</p>`;return}let c=s.map(e=>h(b,e)).filter(Boolean);t.innerHTML=`
  <div class="compare-grid" style="--cols:${c.length}">
    ${c.map(t=>{let n=m[t.rarity];return`<article class="compare-col" style="--r:${n}">
          <button type="button" class="compare-remove" data-rm="${t.id}" aria-label="remove">×</button>
          <div class="art-frame compare-art">${o(t.image,a(t),``)}</div>
          <h2 class="font-display text-lg font-bold mt-3">${a(t)}</h2>
          <span class="bestiary-badge mt-2 inline-block" style="background:${n}">${i(t.rarity)}</span>
          <dl class="compare-stats mt-4">
            <div><dt data-i18n="pet.hp">${e(`pet.hp`)}</dt><dd class="num">${t.health}</dd></div>
            <div><dt data-i18n="pet.dmg">${e(`pet.dmg`)}</dt><dd class="num">${t.damage}</dd></div>
            <div><dt data-i18n="pet.stamina">${e(`pet.stamina`)}</dt><dd class="num">${t.stamina??`—`}</dd></div>
            <div><dt data-i18n="pet.hatchTime">${e(`pet.hatchTime`)}</dt><dd class="num">${t.hatchMinutes??`—`}m</dd></div>
            <div><dt data-i18n="pet.hatchChance">${e(`pet.hatchChance`)}</dt><dd class="num">${t.hatchChance??`—`}%</dd></div>
            <div><dt data-i18n="compare.skills">${e(`compare.skills`)}</dt><dd class="num">${(t.skills||[]).length}</dd></div>
          </dl>
          <ul class="compare-skills mt-4 text-sm text-muted">
            ${(t.skills||[]).slice(0,4).map(e=>`<li>${e.name}</li>`).join(``)}
          </ul>
          <a class="btn mt-5 w-full" href="/pet.html?id=${encodeURIComponent(t.id)}" data-i18n="compare.open">${e(`compare.open`)}</a>
        </article>`}).join(``)}
  </div>`,r(t),t.querySelectorAll(`[data-rm]`).forEach(e=>{e.addEventListener(`click`,()=>{g(e.dataset.rm),S(),n.click()})})}b=await p(),x(),d({title:`${e(`compare.title`)} · SugeonPet`,description:e(`compare.lead`),url:`${f()}/compare.html`}),window.addEventListener(`sugeon:lang`,()=>{r(document),S()}),window.addEventListener(`sugeon:compare`,S),u(()=>x());
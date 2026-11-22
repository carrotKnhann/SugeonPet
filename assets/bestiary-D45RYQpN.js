import{_ as e,a as t,b as n,f as r,g as i,h as a,i as o,m as s,n as c,o as l,r as u,s as d,v as f,x as p,y as m}from"./ui-K5B5QJ2P.js";import{a as h,n as g,r as _,t as v}from"./pets-h05x7Ih5.js";document.querySelector(`#app`).innerHTML=`
  ${c(`list`)}
  <main class="relative mx-auto max-w-6xl px-5 pb-24 pt-4">
    <header class="bestiary-hero">
      <h1 data-i18n="bestiary.title">${m(`bestiary.title`)}</h1>
      <p class="lead" data-i18n="bestiary.lead">${m(`bestiary.lead`)}</p>
      <div class="bestiary-toolbar">
        <label class="bestiary-search">
          <span class="text-muted text-sm" aria-hidden="true">⌕</span>
          <input id="q" type="search" data-i18n-placeholder="bestiary.search" placeholder="${m(`bestiary.search`)}" />
        </label>
        <div class="bestiary-view" role="group">
          <button type="button" class="bestiary-view-btn is-active" id="btnGrid" data-i18n="bestiary.grid">${m(`bestiary.grid`)}</button>
          <button type="button" class="bestiary-view-btn" id="btnList" data-i18n="bestiary.list">${m(`bestiary.list`)}</button>
        </div>
        <button type="button" class="btn btn-primary" id="btnRandom" data-i18n="bestiary.random">${m(`bestiary.random`)}</button>
      </div>
    </header>

    <div class="bestiary-filters" id="filters">
      <div class="bestiary-filter-row" id="rarityRow">
        <span class="bestiary-filter-label" data-i18n="bestiary.rarity">${m(`bestiary.rarity`)}</span>
        <button type="button" class="pill shrink-0" data-rarity="" aria-pressed="true" data-i18n="bestiary.all">${m(`bestiary.all`)}</button>
      </div>
      <div class="bestiary-filter-row" id="familyRow">
        <span class="bestiary-filter-label" data-i18n="bestiary.family">${m(`bestiary.family`)}</span>
        <button type="button" class="pill shrink-0" data-family="" aria-pressed="true" data-i18n="bestiary.all">${m(`bestiary.all`)}</button>
      </div>
    </div>

    <div class="bestiary-meta">
      <div>
        <span data-i18n="bestiary.showing">${m(`bestiary.showing`)}</span>
        <strong class="num text-ink" id="count">0</strong>
        <span>/</span>
        <span class="num" id="total">0</span>
      </div>
      <div data-i18n="bestiary.sort">${m(`bestiary.sort`)}</div>
    </div>

    <div id="grid" class="bestiary-grid"></div>
  </main>
  ${t()}
`,u(),p.from(`.bestiary-hero`,{y:18,opacity:0,duration:.55,ease:`power3.out`});var y=await h();document.getElementById(`total`).textContent=String(y.length);var b=``,x=``,S=`grid`,C=g.filter(e=>y.some(t=>t.rarity===e)),w=[...new Set(y.map(e=>e.family))].sort(),T=document.getElementById(`rarityRow`);C.forEach(t=>{let n=document.createElement(`button`);n.type=`button`,n.className=`pill shrink-0`,n.dataset.rarity=t,n.innerHTML=`<span class="pip" style="background:${v[t]}"></span><span data-rarity-label>${e(t)}</span>`,T.appendChild(n)});var E=document.getElementById(`familyRow`);w.forEach(e=>{let t=document.createElement(`button`);t.type=`button`,t.className=`pill shrink-0`,t.dataset.family=e,t.innerHTML=`<span data-family-label>${s(e)}</span>`,E.appendChild(t)});function D(){document.querySelectorAll(`[data-rarity]`).forEach(t=>{let n=t.querySelector(`[data-rarity-label]`);n&&t.dataset.rarity&&(n.textContent=e(t.dataset.rarity))}),document.querySelectorAll(`[data-family]`).forEach(e=>{let t=e.querySelector(`[data-family-label]`);t&&e.dataset.family&&(t.textContent=s(e.dataset.family))})}function O(){document.querySelectorAll(`[data-rarity]`).forEach(e=>{e.setAttribute(`aria-pressed`,String((e.dataset.rarity||``)===b))}),document.querySelectorAll(`[data-family]`).forEach(e=>{e.setAttribute(`aria-pressed`,String((e.dataset.family||``)===x))}),document.getElementById(`btnGrid`).classList.toggle(`is-active`,S===`grid`),document.getElementById(`btnList`).classList.toggle(`is-active`,S===`list`)}function k(e){let t=Object.fromEntries(g.map((e,t)=>[e,t]));return[...e].sort((e,n)=>{let r=(t[e.rarity]??99)-(t[n.rarity]??99);if(r)return r;let o=a()===`en`?`en`:`vi`;return i(e).localeCompare(i(n),o)})}function A(){let t=k(_(y,{q:document.getElementById(`q`).value,rarity:b,family:x}));document.getElementById(`count`).textContent=String(t.length);let n=document.getElementById(`grid`);n.className=S===`list`?`bestiary-list`:`bestiary-grid`,t.length?(n.innerHTML=t.map(t=>{let n=`/pet.html?id=${encodeURIComponent(t.id)}`,r=i(t),a=v[t.rarity];return S===`list`?`<a href="${n}" class="pet-card bestiary-row" style="--r:${a}">
          <div class="bestiary-row-art art-frame">${o(t.image,r,``)}</div>
          <div class="min-w-0 flex-1">
            <div class="flex flex-wrap items-center gap-2">
              <h2 class="bestiary-name truncate">${r}</h2>
              <span class="bestiary-badge" style="--r:${a};background:var(--r)">${e(t.rarity)}</span>
            </div>
            <div class="bestiary-tags mt-1">
              <span>${f(t.role)}</span>
              <span>·</span>
              <span>${s(t.family)}</span>
            </div>
          </div>
        </a>`:`<a href="${n}" class="pet-card bestiary-card" style="--r:${a}">
        <div class="bestiary-card-inner">
          <div class="bestiary-card-art-wrap">
            <span class="bestiary-badge bestiary-badge-float" style="background:var(--r)">${e(t.rarity)}</span>
            <div class="bestiary-card-art art-frame">${o(t.image,r,`anim-float`)}</div>
          </div>
          <div class="bestiary-card-foot">
            <h2 class="bestiary-name truncate">${r}</h2>
            <div class="bestiary-tags">
              <span>${f(t.role)}</span>
              <span>·</span>
              <span>${s(t.family)}</span>
            </div>
          </div>
        </div>
      </a>`}).join(``),l()):n.innerHTML=`<div class="bestiary-empty" data-i18n="bestiary.empty">${m(`bestiary.empty`)}</div>`}document.getElementById(`rarityRow`).addEventListener(`click`,t=>{let n=t.target.closest(`[data-rarity]`);n&&(b=n.dataset.rarity||``,O(),A(),d(b?e(b):m(`bestiary.allRarities`)))}),document.getElementById(`familyRow`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-family]`);t&&(x=t.dataset.family||``,O(),A())}),document.getElementById(`q`).addEventListener(`input`,()=>{clearTimeout(window.__q),window.__q=setTimeout(A,120)}),document.getElementById(`btnGrid`).addEventListener(`click`,()=>{S=`grid`,O(),A(),n.click()}),document.getElementById(`btnList`).addEventListener(`click`,()=>{S=`list`,O(),A(),n.click()}),document.getElementById(`btnRandom`).addEventListener(`click`,()=>{let e=_(y,{q:document.getElementById(`q`).value,rarity:b,family:x});if(!e.length)return d(m(`bestiary.noPet`));let t=e[Math.floor(Math.random()*e.length)];n.open(),location.href=`/pet.html?id=${encodeURIComponent(t.id)}`}),window.addEventListener(`sugeon:lang`,()=>{r(document),D(),A()}),O(),A();
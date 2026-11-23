import{_ as e,a as t,b as n,d as r,f as i,g as a,h as o,i as s,l as c,m as l,n as u,o as d,r as f,s as p,t as m,u as h,v as g,x as _,y as v}from"./layouts-BlB4NUJ2.js";import{_ as y,a as b,d as x,g as S,h as C,i as w,n as T,p as E,r as D,s as O,u as k}from"./seo-BfiRbxc3.js";import{r as A,t as j}from"./favorites-6sk89Qff.js";import{t as M}from"./compare-Hi9okjPH.js";var N=new URLSearchParams(location.search).get(`id`),P=!1,F=[],I=null,L=[],R=!1,z=!1,B=!1;function V(){return h()===`dark`?`/assets/brand/mark-dark.png`:`/assets/brand/mark-light.png`}function H(){document.querySelector(`#app`).innerHTML=m(`pet`,g()),P?p():(t(),P=!0)}function U(){document.getElementById(`sheet`).innerHTML=`
      <div class="relative mx-auto max-w-lg px-5 py-24 text-center">
        <img data-brand-mark src="${V()}" alt="" class="brand-mark mx-auto mb-6 h-16 w-16" />
        <h1 class="text-2xl font-extrabold" data-i18n="pet.notFound">${e(`pet.notFound`)}</h1>
        <p class="mt-2 text-muted" data-i18n="pet.notFoundHint">${e(`pet.notFoundHint`)}</p>
        <a href="/bestiary.html" class="btn btn-primary mt-8" data-i18n="pet.back">${e(`pet.back`)}</a>
      </div>`,r(document.getElementById(`sheet`))}function W(t){document.getElementById(`sheet`).innerHTML=`
    <div class="relative mx-auto max-w-lg px-5 py-24 text-center">
      <h1 class="text-2xl font-extrabold" data-i18n="pet.loadError">${e(`pet.loadError`)}</h1>
      <p class="mt-2 text-muted">${t.message||t}</p>
      <a href="/bestiary.html" class="btn btn-primary mt-8" data-i18n="pet.back">${e(`pet.back`)}</a>
    </div>`}function G(e){let t=e.media;if(!t||!t.gif&&!t.webm)return``;let n=t.poster?`poster="${t.poster}"`:``;return t.webm?`<div class="skill-media"><video class="skill-media-el" playsinline muted loop autoplay ${n} src="${t.webm}"></video></div>`:`<div class="skill-media"><img class="skill-media-el" src="${t.gif}" alt="" loading="lazy" /></div>`}function K(){let t=L.filter(e=>e.petId===I.id);return t.length?`<ol class="changelog-list changelog-list--compact">${t.map(e=>`<li>
      <time class="num text-xs text-muted">${e.date}</time>
      <strong>${e.title}</strong>
      <p class="text-sm text-muted mt-1">${e.body}</p>
    </li>`).join(``)}</ol>`:`<p class="text-sm text-muted" data-i18n="pet.timelineEmpty">${e(`pet.timelineEmpty`)}</p>`}function q(){if(!I)return;let t=g(),{index:r}=S(F,I.id),p=O[I.rarity]||`var(--color-amber)`,m=I.healthMax??Math.round(Number(I.health)*1.4*10)/10,h=I.damageMax??Math.round(Number(I.damage)*1.25*10)/10,v=I.maxLevel??10,x=I.hatchMinutes??15,E=I.hatchChance??50,k=j(I.id);document.title=`${l(I)} · Sugeon Area`,b({title:`${l(I)} · SugeonPet`,description:I.description||e(`pet.stats`),image:I.image,url:w(I.id),type:`article`}),T(D(I));let N=(I.skills||[]).map((t,n)=>{let r=String(t.damage??`—`),i=r!==`—`&&/\d/.test(r);return`
      <article class="skill-card-rich skill-card" style="--r:${p};animation-delay:${n*.06}s">
        <div class="skill-inner">
          <div class="skill-head">
            <span class="skill-ord" aria-hidden="true">${String(n+1).padStart(2,`0`)}</span>
            <div class="skill-head-main">
              <h3 class="skill-name">${t.name}</h3>
              <span class="skill-unlock">${e(`pet.unlockLv`)} <b>${t.unlock??1}</b></span>
            </div>
          </div>
          <p class="skill-desc">${t.description||`—`}</p>
          ${G(t)}
          <div class="skill-stat-row">
            <div class="skill-stat ${i?`is-dmg`:``}">
              <span class="label">${e(`pet.stLabel`)}</span>
              <span class="value">${r}</span>
            </div>
            <div class="skill-stat is-cd">
              <span class="label">${e(`pet.cdLabel`)}</span>
              <span class="value">${t.cooldown??`—`}s</span>
            </div>
            <div class="skill-stat is-trig">
              <span class="label">${e(`pet.triggerLabel`)}</span>
              <span class="value value-sm">${t.trigger||`—`}</span>
            </div>
          </div>
        </div>
      </article>`}).join(``),P=C(F,I.id,5).map(({pet:e,offset:t})=>{let n=t===0,r=l(e);return`<a href="/pet.html?id=${encodeURIComponent(e.id)}" class="pet-strip-item ${n?`is-active`:``}" title="${r}">
            <div class="art-frame">${d(e.image,r,`max-h-[85%] max-w-[85%] object-contain`)}</div>
            <div class="mt-1 truncate text-center text-[10px] font-semibold ${n?`text-amber`:`text-muted`}">${r}</div>
          </a>`}).join(``),L=`
          <div class="pet-hero-art ${t===`phone`?`pet-hero-art--bleed`:``}" style="--r:${p}">
              <div class="art-frame">
                ${d(I.image,l(I),`anim-float object-contain`,{eager:!0})}
              </div>
            </div>`,R=`
            <div class="flex flex-wrap items-center gap-2">
              <span class="bestiary-badge" style="background:${p}">${o(I.rarity)}</span>
              <span class="text-sm text-muted">${a(I.role)} · ${i(I.family)}</span>
            </div>
            <h1 class="pet-title mt-3">${l(I)}</h1>
            <p class="mt-4 max-w-xl text-base leading-relaxed text-muted">${I.description||`—`}</p>`,z=`
            <div class="mt-6 flex flex-wrap gap-3">
              <button type="button" class="btn btn-primary" id="btnShare" data-i18n="pet.shareCard">${e(`pet.shareCard`)}</button>
              <button type="button" class="btn fav-btn-inline ${k?`is-on`:``}" id="btnFav" aria-pressed="${k}" data-i18n="pet.fav">${e(`pet.fav`)}</button>
              <button type="button" class="btn" id="btnCompare" data-i18n="pet.compareAdd">${e(`pet.compareAdd`)}</button>
              <a href="/guide.html" class="btn" data-i18n="nav.guide">${e(`nav.guide`)}</a>
            </div>`,V=`
          <div>
            <h2 class="font-display text-lg font-bold tracking-tight" data-i18n="pet.hatch">${e(`pet.hatch`)}</h2>
            <div class="mt-4 grid gap-3 sm:grid-cols-2">
              <div class="info-tile">
                <div class="text-xs text-muted" data-i18n="pet.hatchTime">${e(`pet.hatchTime`)}</div>
                <div class="num mt-1 text-2xl font-bold">${x} <span class="text-sm font-semibold text-muted" data-i18n="pet.hatchMinutes">${e(`pet.hatchMinutes`)}</span></div>
              </div>
              <div class="info-tile">
                <div class="text-xs text-muted" data-i18n="pet.hatchChance">${e(`pet.hatchChance`)}</div>
                <div class="num mt-1 text-2xl font-bold">${E}%</div>
              </div>
            </div>
          </div>`,H=`
          <div>
            <div class="mb-4 flex items-baseline justify-between gap-3">
              <h2 class="font-display text-lg font-bold tracking-tight" data-i18n="pet.stats">${e(`pet.stats`)}</h2>
              <span class="text-xs text-muted"><span data-i18n="pet.maxLevel">${e(`pet.maxLevel`)}</span> ${v}</span>
            </div>
            <div class="space-y-4">
              <div>
                <div class="mb-1.5 flex justify-between text-sm"><span class="text-muted" data-i18n="pet.hp">${e(`pet.hp`)}</span><b class="num">${I.health}</b></div>
                <div class="h-1 overflow-hidden rounded-full" style="background:color-mix(in srgb, var(--color-ink) 8%, transparent)"><i data-bar="${y(I.health,800)}%" class="block h-full rounded-full" style="width:0;background:${p}"></i></div>
              </div>
              <div>
                <div class="mb-1.5 flex justify-between text-sm"><span class="text-muted" data-i18n="pet.dmg">${e(`pet.dmg`)}</span><b class="num">${I.damage}</b></div>
                <div class="h-1 overflow-hidden rounded-full" style="background:color-mix(in srgb, var(--color-ink) 8%, transparent)"><i data-bar="${y(I.damage,60)}%" class="block h-full rounded-full bg-amber" style="width:0"></i></div>
              </div>
              <div>
                <div class="mb-1.5 flex justify-between text-sm"><span class="text-muted" data-i18n="pet.stamina">${e(`pet.stamina`)}</span><b class="num">${I.stamina??`—`}</b></div>
                <div class="h-1 overflow-hidden rounded-full" style="background:color-mix(in srgb, var(--color-ink) 8%, transparent)"><i data-bar="${y(I.stamina||0,1e3)}%" class="block h-full rounded-full" style="width:0;background:var(--color-emerald)"></i></div>
              </div>
            </div>

            <h3 class="mt-8 text-xs font-bold uppercase tracking-[0.12em] text-muted" data-i18n="pet.leveling">${e(`pet.leveling`)}</h3>
            <div class="mt-2 overflow-hidden" style="border-top:1px solid var(--border-soft)">
              <table class="w-full text-left text-sm">
                <thead class="text-[11px] uppercase tracking-wide text-muted">
                  <tr>
                    <th class="py-2 pr-3"></th>
                    <th class="py-2 pr-3" data-i18n="pet.lv0">${e(`pet.lv0`)}</th>
                    <th class="py-2" data-i18n="pet.lvMax">${e(`pet.lvMax`)}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-top:1px solid var(--border-soft)">
                    <td class="py-2 pr-3 text-muted" data-i18n="pet.hp">${e(`pet.hp`)}</td>
                    <td class="num py-2 pr-3 font-semibold">${I.health}</td>
                    <td class="num py-2 font-semibold">${m}</td>
                  </tr>
                  <tr style="border-top:1px solid var(--border-soft)">
                    <td class="py-2 pr-3 text-muted" data-i18n="pet.dmg">${e(`pet.dmg`)}</td>
                    <td class="num py-2 pr-3 font-semibold">${I.damage}</td>
                    <td class="num py-2 font-semibold">${h}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="skill-panel">
            <div class="skill-panel-head">
              <h2 class="font-display text-lg font-bold tracking-tight" data-i18n="pet.skills">${e(`pet.skills`)}</h2>
              <span class="skill-panel-count"><span class="num">${(I.skills||[]).length}</span> <span data-i18n="pet.skillCount">${e(`pet.skillCount`)}</span></span>
            </div>
            <div class="skill-grid skill-grid-scroll">${N||`<p class="text-sm text-muted" data-i18n="pet.noSkills">${e(`pet.noSkills`)}</p>`}</div>
          </div>

          <div>
            <h2 class="font-display text-lg font-bold tracking-tight" data-i18n="pet.timeline">${e(`pet.timeline`)}</h2>
            <div class="mt-3">${K()}</div>
          </div>`,U;U=t===`phone`?`
    <div class="${u(t)}">
      <div class="mb-4 flex flex-wrap items-center gap-3">
        <a href="/bestiary.html" class="btn" data-i18n="pet.back">${e(`pet.back`)}</a>
        <span class="num text-xs text-muted">${r+1} / ${F.length}</span>
      </div>
      ${L}
      <div class="mt-5">${R}${z}</div>
      <div class="mt-6">
        <p class="mb-2 text-sm text-muted" data-i18n="pet.strip">${e(`pet.strip`)}</p>
        <div class="pet-strip" id="petStrip">${P}</div>
      </div>
      <div class="mt-8 space-y-8">
        ${V}
        ${H}
      </div>
    </div>`:`
    <div class="${u(t)}">
      <div class="mb-5 flex flex-wrap items-center gap-3">
        <a href="/bestiary.html" class="btn" data-i18n="pet.back">${e(`pet.back`)}</a>
        <span class="num text-xs text-muted">${r+1} / ${F.length}</span>
      </div>

      <div class="mb-8">
        <p class="mb-2 text-sm text-muted" data-i18n="pet.strip">${e(`pet.strip`)}</p>
        <div class="pet-strip" id="petStrip">${P}</div>
      </div>

      <div class="${f(t)}">
        <section class="space-y-8">
          <div>
            ${R}
            ${L}
            ${z}
          </div>
          ${V}
        </section>
        <aside class="space-y-10">
          ${H}
        </aside>
      </div>
    </div>`,document.getElementById(`sheet`).innerHTML=U,document.getElementById(`btnShare`)?.addEventListener(`click`,async()=>{let t=w(I.id);try{navigator.share?await navigator.share({title:l(I),text:I.description||``,url:t}):(await navigator.clipboard.writeText(t),c(e(`pet.shareOk`))),n.success()}catch{try{await navigator.clipboard.writeText(t),c(e(`pet.shareOk`))}catch{c(t)}}}),document.getElementById(`btnFav`)?.addEventListener(`click`,()=>{let t=A(I.id);c(e(t?`fav.added`:`fav.removed`)),n.click(),q()}),document.getElementById(`btnCompare`)?.addEventListener(`click`,()=>{M(I.id).full?c(e(`compare.max`)):(c(e(`pet.compareAdd`)),n.success())}),(document.getElementById(`petStrip`)?.querySelector(`.is-active`))?.scrollIntoView({inline:`center`,block:`nearest`,behavior:`smooth`}),s(document.getElementById(`sheet`)),Y(),X(),B||(B=!0,_.from(`#sheet section, #sheet aside > div, .pet-stage--phone > *`,{y:22,opacity:0,duration:.5,stagger:.07,ease:`power3.out`}),n.open())}function J(e){if(!I)return;let t=S(F,I.id),r=e<0?t.prev:t.next;r&&(n.open(),location.href=`/pet.html?id=${encodeURIComponent(r.id)}`)}function Y(){R||(R=!0,window.addEventListener(`keydown`,e=>{e.target.matches(`input,textarea`)||(e.key===`ArrowLeft`&&J(-1),e.key===`ArrowRight`&&J(1),e.key===`Escape`&&(location.href=`/bestiary.html`))}))}function X(){if(z)return;let e=document.getElementById(`sheet`);if(!e)return;z=!0;let t=0,n=0;e.addEventListener(`touchstart`,e=>{t=e.touches[0].clientX,n=e.touches[0].clientY},{passive:!0}),e.addEventListener(`touchend`,e=>{let r=e.changedTouches[0];if(!r)return;let i=r.clientX-t,a=r.clientY-n;Math.abs(i)<64||Math.abs(i)<Math.abs(a)*1.2||J(i>0?-1:1)},{passive:!0})}function Z(){z=!1,H(),I?q():U()}H();try{[F,L]=await Promise.all([E(),x().then(e=>e.entries||[])]),I=k(F,N),I?(q(),window.addEventListener(`sugeon:lang`,q),window.addEventListener(`sugeon:theme`,()=>{document.querySelectorAll(`[data-brand-mark]`).forEach(e=>e.setAttribute(`src`,V()))})):U(),v(()=>Z())}catch(e){W(e)}
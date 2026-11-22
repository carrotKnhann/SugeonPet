import{_ as e,a as t,b as n,g as r,i,n as a,r as o,s,u as c,x as l,y as u}from"./ui-K5B5QJ2P.js";import{a as d,t as f}from"./pets-h05x7Ih5.js";document.querySelector(`#app`).innerHTML=`
  ${a(`home`)}
  <main class="relative mx-auto max-w-6xl px-5 home-stage">
    <section class="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16">
      <div>
        <div class="brand-hero mb-8">
          <div class="brand-hero-glow" aria-hidden="true"></div>
          <img data-brand-word src="/assets/brand/wordmark-hero.png" alt="Sugeon Area"
            class="brand-word brand-hero-img relative z-10 w-full max-w-[min(94vw,520px)] ${c()===`dark`?`brand-word-on-dark`:``}" />
        </div>
        <h1 class="home-title" data-i18n="home.title">${u(`home.title`)}</h1>
        <p class="home-lead mt-5" data-i18n="home.lead">${u(`home.lead`)}</p>
        <div class="mt-8 flex flex-wrap gap-3">
          <a href="/bestiary.html" class="btn btn-primary px-7 py-3" data-i18n="home.ctaBestiary">${u(`home.ctaBestiary`)}</a>
          <a href="/guide.html" class="btn px-7 py-3" data-i18n="nav.guide">${u(`nav.guide`)}</a>
        </div>
        <dl class="home-stats">
          <div class="home-stat">
            <dt data-i18n="home.statSpecies">${u(`home.statSpecies`)}</dt>
            <dd class="num" id="statCount">—</dd>
          </div>
          <div class="home-stat">
            <dt data-i18n="home.statRarity">${u(`home.statRarity`)}</dt>
            <dd class="num">7</dd>
          </div>
          <div class="home-stat">
            <dt data-i18n="home.statFamily">${u(`home.statFamily`)}</dt>
            <dd class="num" id="statFam">—</dd>
          </div>
        </dl>
      </div>

      <div>
        <div class="home-featured-head mb-4">
          <div class="min-w-0">
            <p class="font-display text-lg font-bold tracking-tight" data-i18n="home.featuredLabel">${u(`home.featuredLabel`)}</p>
            <p class="mt-1 text-sm text-muted" data-i18n="home.featuredHint">${u(`home.featuredHint`)}</p>
          </div>
          <button type="button" class="btn text-xs shrink-0" id="btnFeatured" data-i18n="home.ctaFeatured">${u(`home.ctaFeatured`)}</button>
        </div>
        <div id="featured" class="home-bento"></div>
      </div>
    </section>
  </main>
  ${t()}
`,o();var p=await d();document.getElementById(`statCount`).textContent=String(p.length),document.getElementById(`statFam`).textContent=String(new Set(p.map(e=>e.family)).size);var m={dragon:0,mythic:1,legendary:2,super_rare:3,rare:4,common:5,exclusive:1},h=[...p].sort((e,t)=>(m[e.rarity]??9)-(m[t.rarity]??9)).slice(0,5);function g(){document.getElementById(`featured`).innerHTML=h.map((t,n)=>{let a=r(t),o=f[t.rarity];return`<a href="/pet.html?id=${encodeURIComponent(t.id)}" class="feat-card feat-${n} pet-card" style="--r:${o}">
        <div class="art-frame">${i(t.image,a,n===0?`anim-float`:``)}</div>
        <div class="feat-card-meta">
          <span class="feat-badge">${e(t.rarity)}</span>
          <h3>${a}</h3>
        </div>
      </a>`}).join(``)}g(),window.addEventListener(`sugeon:lang`,g),document.getElementById(`btnFeatured`).addEventListener(`click`,()=>{let e=h[0];e&&(n.open(),s(u(`home.openToast`)+` `+r(e)),location.href=`/pet.html?id=${encodeURIComponent(e.id)}`)}),l.from(`main section > div`,{y:28,opacity:0,duration:.7,stagger:.12,ease:`power3.out`});
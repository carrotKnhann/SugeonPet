import{_ as e,a as t,b as n,f as r,g as i,i as a,m as o,n as s,r as c,s as l,t as u,u as d,v as f,x as p,y as m}from"./ui-K5B5QJ2P.js";import{a as h,c as g,i as _,o as v,s as y,t as b}from"./pets-h05x7Ih5.js";var x=new URLSearchParams(location.search).get(`id`);function S(){return d()===`dark`?`/assets/brand/mark-dark.png`:`/assets/brand/mark-light.png`}document.querySelector(`#app`).innerHTML=`
  ${s(`list`)}
  <main id="sheet" class="relative min-h-[calc(100vh-72px)]">
    <div class="relative flex min-h-[40vh] items-center justify-center text-muted" data-i18n="pet.loading">${m(`pet.loading`)}</div>
  </main>
  ${t()}
`,c();try{let t=await h(),s=_(t,x);if(!s)document.getElementById(`sheet`).innerHTML=`
      <div class="relative mx-auto max-w-lg px-5 py-24 text-center">
        <img data-brand-mark src="${S()}" alt="" class="brand-mark mx-auto mb-6 h-16 w-16" />
        <h1 class="text-2xl font-extrabold" data-i18n="pet.notFound">${m(`pet.notFound`)}</h1>
        <p class="mt-2 text-muted" data-i18n="pet.notFoundHint">${m(`pet.notFoundHint`)}</p>
        <a href="/bestiary.html" class="btn btn-primary mt-8" data-i18n="pet.back">${m(`pet.back`)}</a>
      </div>`,r(document.getElementById(`sheet`));else{let{prev:r,next:c,index:d}=y(t,s.id),h=b[s.rarity]||`var(--color-amber)`,_=s.healthMax??Math.round(Number(s.health)*1.4*10)/10,x=s.damageMax??Math.round(Number(s.damage)*1.25*10)/10,C=s.maxLevel??10,w=s.hatchMinutes??15,T=s.hatchChance??50;function E(){document.title=`${i(s)} · Sugeon Area`;let r=(s.skills||[]).map((e,t)=>{let n=String(e.damage??`—`),r=n!==`—`&&/\d/.test(n);return`
      <article class="skill-card-rich skill-card" style="--r:${h};animation-delay:${t*.06}s">
        <div class="skill-inner">
          <div class="skill-head">
            <span class="skill-ord" aria-hidden="true">${String(t+1).padStart(2,`0`)}</span>
            <div class="skill-head-main">
              <h3 class="skill-name">${e.name}</h3>
              <span class="skill-unlock">${m(`pet.unlockLv`)} <b>${e.unlock??1}</b></span>
            </div>
          </div>
          <p class="skill-desc">${e.description||`—`}</p>
          <div class="skill-stat-row">
            <div class="skill-stat ${r?`is-dmg`:``}">
              <span class="label">${m(`pet.stLabel`)}</span>
              <span class="value">${n}</span>
            </div>
            <div class="skill-stat is-cd">
              <span class="label">${m(`pet.cdLabel`)}</span>
              <span class="value">${e.cooldown??`—`}s</span>
            </div>
            <div class="skill-stat is-trig">
              <span class="label">${m(`pet.triggerLabel`)}</span>
              <span class="value value-sm">${e.trigger||`—`}</span>
            </div>
          </div>
        </div>
      </article>`}).join(``),c=v(t,s.id,5).map(({pet:e,offset:t})=>{let n=t===0,r=i(e);return`<a href="/pet.html?id=${encodeURIComponent(e.id)}" class="pet-strip-item ${n?`is-active`:``}" title="${r}">
            <div class="art-frame">${a(e.image,r,`max-h-[85%] max-w-[85%] object-contain`)}</div>
            <div class="mt-1 truncate text-center text-[10px] font-semibold ${n?`text-amber`:`text-muted`}">${r}</div>
          </a>`}).join(``);document.getElementById(`sheet`).innerHTML=`
    <div class="relative mx-auto max-w-6xl px-5 py-6 pet-stage lg:py-8">
      <div class="mb-5 flex flex-wrap items-center gap-3">
        <a href="/bestiary.html" class="btn" data-i18n="pet.back">${m(`pet.back`)}</a>
        <span class="num text-xs text-muted">${d+1} / ${t.length}</span>
      </div>

      <div class="mb-8">
        <p class="mb-2 text-sm text-muted" data-i18n="pet.strip">${m(`pet.strip`)}</p>
        <div class="pet-strip" id="petStrip">${c}</div>
      </div>

      <div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <section class="space-y-8">
          <div>
            <div class="flex flex-wrap items-center gap-2">
              <span class="bestiary-badge" style="background:${h}">${e(s.rarity)}</span>
              <span class="text-sm text-muted">${f(s.role)} · ${o(s.family)}</span>
            </div>
            <h1 class="pet-title mt-3">${i(s)}</h1>
            <p class="mt-4 max-w-xl text-base leading-relaxed text-muted">${s.description||`—`}</p>
            <div class="pet-hero-art mt-8" style="--r:${h}">
              <div class="art-frame">
                ${a(s.image,i(s),`anim-float object-contain`)}
              </div>
            </div>
            <div class="mt-6 flex flex-wrap gap-3">
              <button type="button" class="btn btn-primary" id="btnShare" data-i18n="pet.share">${m(`pet.share`)}</button>
              <a href="/guide.html" class="btn" data-i18n="nav.guide">${m(`nav.guide`)}</a>
            </div>
          </div>

          <div>
            <h2 class="font-display text-lg font-bold tracking-tight" data-i18n="pet.hatch">${m(`pet.hatch`)}</h2>
            <div class="mt-4 grid gap-3 sm:grid-cols-2">
              <div class="info-tile">
                <div class="text-xs text-muted" data-i18n="pet.hatchTime">${m(`pet.hatchTime`)}</div>
                <div class="num mt-1 text-2xl font-bold">${w} <span class="text-sm font-semibold text-muted" data-i18n="pet.hatchMinutes">${m(`pet.hatchMinutes`)}</span></div>
              </div>
              <div class="info-tile">
                <div class="text-xs text-muted" data-i18n="pet.hatchChance">${m(`pet.hatchChance`)}</div>
                <div class="num mt-1 text-2xl font-bold">${T}%</div>
              </div>
            </div>
          </div>
        </section>

        <aside class="space-y-10">
          <div>
            <div class="mb-4 flex items-baseline justify-between gap-3">
              <h2 class="font-display text-lg font-bold tracking-tight" data-i18n="pet.stats">${m(`pet.stats`)}</h2>
              <span class="text-xs text-muted"><span data-i18n="pet.maxLevel">${m(`pet.maxLevel`)}</span> ${C}</span>
            </div>
            <div class="space-y-4">
              <div>
                <div class="mb-1.5 flex justify-between text-sm"><span class="text-muted" data-i18n="pet.hp">${m(`pet.hp`)}</span><b class="num">${s.health}</b></div>
                <div class="h-1 overflow-hidden rounded-full" style="background:color-mix(in srgb, var(--color-ink) 8%, transparent)"><i data-bar="${g(s.health,800)}%" class="block h-full rounded-full" style="width:0;background:${h}"></i></div>
              </div>
              <div>
                <div class="mb-1.5 flex justify-between text-sm"><span class="text-muted" data-i18n="pet.dmg">${m(`pet.dmg`)}</span><b class="num">${s.damage}</b></div>
                <div class="h-1 overflow-hidden rounded-full" style="background:color-mix(in srgb, var(--color-ink) 8%, transparent)"><i data-bar="${g(s.damage,60)}%" class="block h-full rounded-full bg-amber" style="width:0"></i></div>
              </div>
              <div>
                <div class="mb-1.5 flex justify-between text-sm"><span class="text-muted" data-i18n="pet.stamina">${m(`pet.stamina`)}</span><b class="num">${s.stamina??`—`}</b></div>
                <div class="h-1 overflow-hidden rounded-full" style="background:color-mix(in srgb, var(--color-ink) 8%, transparent)"><i data-bar="${g(s.stamina||0,1e3)}%" class="block h-full rounded-full" style="width:0;background:var(--color-emerald)"></i></div>
              </div>
            </div>

            <h3 class="mt-8 text-xs font-bold uppercase tracking-[0.12em] text-muted" data-i18n="pet.leveling">${m(`pet.leveling`)}</h3>
            <div class="mt-2 overflow-hidden" style="border-top:1px solid var(--border-soft)">
              <table class="w-full text-left text-sm">
                <thead class="text-[11px] uppercase tracking-wide text-muted">
                  <tr>
                    <th class="py-2 pr-3"></th>
                    <th class="py-2 pr-3" data-i18n="pet.lv0">${m(`pet.lv0`)}</th>
                    <th class="py-2" data-i18n="pet.lvMax">${m(`pet.lvMax`)}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-top:1px solid var(--border-soft)">
                    <td class="py-2 pr-3 text-muted" data-i18n="pet.hp">${m(`pet.hp`)}</td>
                    <td class="num py-2 pr-3 font-semibold">${s.health}</td>
                    <td class="num py-2 font-semibold">${_}</td>
                  </tr>
                  <tr style="border-top:1px solid var(--border-soft)">
                    <td class="py-2 pr-3 text-muted" data-i18n="pet.dmg">${m(`pet.dmg`)}</td>
                    <td class="num py-2 pr-3 font-semibold">${s.damage}</td>
                    <td class="num py-2 font-semibold">${x}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="skill-panel">
            <div class="skill-panel-head">
              <h2 class="font-display text-lg font-bold tracking-tight" data-i18n="pet.skills">${m(`pet.skills`)}</h2>
              <span class="skill-panel-count"><span class="num">${(s.skills||[]).length}</span> <span data-i18n="pet.skillCount">${m(`pet.skillCount`)}</span></span>
            </div>
            <div class="skill-grid skill-grid-scroll">${r||`<p class="text-sm text-muted" data-i18n="pet.noSkills">${m(`pet.noSkills`)}</p>`}</div>
          </div>
        </aside>
      </div>
    </div>`,document.getElementById(`btnShare`)?.addEventListener(`click`,async()=>{try{await navigator.clipboard.writeText(location.href),n.success(),l(m(`pet.shareOk`))}catch{l(location.href)}}),(document.getElementById(`petStrip`)?.querySelector(`.is-active`))?.scrollIntoView({inline:`center`,block:`nearest`,behavior:`smooth`}),u(document.getElementById(`sheet`))}E(),window.addEventListener(`sugeon:lang`,E),window.addEventListener(`sugeon:theme`,()=>{document.querySelectorAll(`[data-brand-mark]`).forEach(e=>e.setAttribute(`src`,S()))}),window.addEventListener(`keydown`,e=>{e.target.matches(`input,textarea`)||(e.key===`ArrowLeft`&&(n.open(),location.href=`/pet.html?id=${encodeURIComponent(r.id)}`),e.key===`ArrowRight`&&(n.open(),location.href=`/pet.html?id=${encodeURIComponent(c.id)}`),e.key===`Escape`&&(location.href=`/bestiary.html`))}),p.from(`#sheet section, #sheet aside > div`,{y:22,opacity:0,duration:.5,stagger:.07,ease:`power3.out`}),n.open()}}catch(e){document.getElementById(`sheet`).innerHTML=`
    <div class="relative mx-auto max-w-lg px-5 py-24 text-center">
      <h1 class="text-2xl font-extrabold" data-i18n="pet.loadError">${m(`pet.loadError`)}</h1>
      <p class="mt-2 text-muted">${e.message||e}</p>
      <a href="/bestiary.html" class="btn btn-primary mt-8" data-i18n="pet.back">${m(`pet.back`)}</a>
    </div>`}
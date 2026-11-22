import{a as e,c as t,d as n,f as r,l as i,n as a,p as o,r as s,x as c,y as l}from"./ui-K5B5QJ2P.js";function u(e,t){return`<li><span class="step-n" aria-hidden="true">${e}</span><span data-i18n-html="1" data-i18n="${t}">${l(t)}</span></li>`}function d(e){return`<li data-i18n-html="1" data-i18n="${e}">${l(e)}</li>`}function f(){return[1,2,3,4,5,6].map(e=>`
    <tr>
      <td data-i18n="guide.hatchR${e}">${l(`guide.hatchR`+e)}</td>
      <td class="num" data-i18n="guide.hatchT${e}">${l(`guide.hatchT`+e)}</td>
      <td class="num" data-i18n="guide.hatchC${e}">${l(`guide.hatchC`+e)}</td>
    </tr>`).join(``)}function p(){return[1,2,3,4,5].map(e=>`
    <tr>
      <td data-i18n="guide.trainR${e}">${l(`guide.trainR`+e)}</td>
      <td class="num" data-i18n="guide.trainM${e}">${l(`guide.trainM`+e)}</td>
    </tr>`).join(``)}function m(){return[1,2,3,4].map(e=>`
    <tr>
      <td data-i18n="guide.trainP${e}a">${l(`guide.trainP`+e+`a`)}</td>
      <td data-i18n="guide.trainP${e}b">${l(`guide.trainP`+e+`b`)}</td>
      <td data-i18n="guide.trainP${e}c">${l(`guide.trainP`+e+`c`)}</td>
    </tr>`).join(``)}function h(){document.querySelector(`#app`).innerHTML=`
  ${a(`guide`)}
  <main class="relative mx-auto max-w-6xl px-5 pb-24 pt-6">
    <header class="guide-hero">
      <h1 data-i18n="guide.title">${l(`guide.title`)}</h1>
      <p class="lead" data-i18n="guide.lead">${l(`guide.lead`)}</p>
      <div class="guide-chips">
        <a class="guide-chip" href="#guide-hatch" data-i18n="guide.chipHatch">${l(`guide.chipHatch`)}</a>
        <a class="guide-chip" href="#guide-train" data-i18n="guide.chipTrain">${l(`guide.chipTrain`)}</a>
        <a class="guide-chip" href="#guide-stamina" data-i18n="guide.chipStamina">${l(`guide.chipStamina`)}</a>
      </div>
    </header>

    <div class="guide-layout">
      <aside class="guide-toc hidden lg:block" id="guideToc">
        <p class="guide-toc-title" data-i18n="guide.tocTitle">${l(`guide.tocTitle`)}</p>
        <nav aria-label="TOC">
          <a href="#guide-start" data-i18n="guide.toc.start">${l(`guide.toc.start`)}</a>
          <a href="#guide-hatch" data-i18n="guide.toc.hatch">${l(`guide.toc.hatch`)}</a>
          <a href="#guide-shop" data-i18n="guide.toc.shop">${l(`guide.toc.shop`)}</a>
          <a href="#guide-train" data-i18n="guide.toc.train">${l(`guide.toc.train`)}</a>
          <a href="#guide-stamina" data-i18n="guide.toc.stamina">${l(`guide.toc.stamina`)}</a>
          <a href="#guide-tips" data-i18n="guide.toc.tips">${l(`guide.toc.tips`)}</a>
        </nav>
      </aside>

      <div id="guideSections">
        <article class="guide-section" id="guide-start">
          <h2 data-i18n="guide.startTitle">${l(`guide.startTitle`)}</h2>
          <p class="lead" data-i18n-html="1" data-i18n="guide.startLead">${l(`guide.startLead`)}</p>
          <p class="body" data-i18n-html="1" data-i18n="guide.startBody">${l(`guide.startBody`)}</p>
          <ol class="guide-steps">
            ${u(1,`guide.startS1`)}
            ${u(2,`guide.startS2`)}
            ${u(3,`guide.startS3`)}
            ${u(4,`guide.startS4`)}
          </ol>
        </article>

        <article class="guide-section" id="guide-hatch">
          <h2 data-i18n="guide.hatchTitle">${l(`guide.hatchTitle`)}</h2>
          <p class="lead" data-i18n-html="1" data-i18n="guide.hatchLead">${l(`guide.hatchLead`)}</p>
          <ol class="guide-steps">
            ${u(1,`guide.hatchS1`)}
            ${u(2,`guide.hatchS2`)}
            ${u(3,`guide.hatchS3`)}
            ${u(4,`guide.hatchS4`)}
          </ol>
          <div class="guide-callout warn" data-i18n="guide.hatchNote">${l(`guide.hatchNote`)}</div>
          <p class="guide-table-cap" data-i18n="guide.hatchTableTitle">${l(`guide.hatchTableTitle`)}</p>
          <div class="guide-table-wrap">
            <table class="guide-table">
              <thead>
                <tr>
                  <th data-i18n="guide.hatchColRarity">${l(`guide.hatchColRarity`)}</th>
                  <th data-i18n="guide.hatchColTime">${l(`guide.hatchColTime`)}</th>
                  <th data-i18n="guide.hatchColChance">${l(`guide.hatchColChance`)}</th>
                </tr>
              </thead>
              <tbody>${f()}</tbody>
            </table>
          </div>
          <div class="guide-callout" data-i18n="guide.hatchBonus">${l(`guide.hatchBonus`)}</div>
        </article>

        <article class="guide-section" id="guide-shop">
          <h2 data-i18n="guide.shopTitle">${l(`guide.shopTitle`)}</h2>
          <p class="lead" data-i18n-html="1" data-i18n="guide.shopLead">${l(`guide.shopLead`)}</p>
          <ol class="guide-steps">
            ${u(1,`guide.shopS1`)}
            ${u(2,`guide.shopS2`)}
            ${u(3,`guide.shopS3`)}
            ${u(4,`guide.shopS4`)}
          </ol>
        </article>

        <article class="guide-section" id="guide-train">
          <h2 data-i18n="guide.trainTitle">${l(`guide.trainTitle`)}</h2>
          <p class="lead" data-i18n-html="1" data-i18n="guide.trainLead">${l(`guide.trainLead`)}</p>
          <div class="guide-callout" data-i18n-html="1" data-i18n="guide.trainFormula">${l(`guide.trainFormula`)}</div>
          <p class="guide-table-cap" data-i18n="guide.trainTableTitle">${l(`guide.trainTableTitle`)}</p>
          <div class="guide-table-wrap">
            <table class="guide-table">
              <thead>
                <tr>
                  <th data-i18n="guide.trainColRarity">${l(`guide.trainColRarity`)}</th>
                  <th data-i18n="guide.trainColMax">${l(`guide.trainColMax`)}</th>
                </tr>
              </thead>
              <tbody>${p()}</tbody>
            </table>
          </div>
          <p class="guide-table-cap" data-i18n="guide.trainPointsTitle">${l(`guide.trainPointsTitle`)}</p>
          <div class="guide-table-wrap">
            <table class="guide-table">
              <thead>
                <tr>
                  <th data-i18n="guide.trainPColHow">${l(`guide.trainPColHow`)}</th>
                  <th data-i18n="guide.trainPColPts">${l(`guide.trainPColPts`)}</th>
                  <th data-i18n="guide.trainPColCap">${l(`guide.trainPColCap`)}</th>
                </tr>
              </thead>
              <tbody>${m()}</tbody>
            </table>
          </div>
        </article>

        <article class="guide-section" id="guide-stamina">
          <h2 data-i18n="guide.staminaTitle">${l(`guide.staminaTitle`)}</h2>
          <p class="lead" data-i18n-html="1" data-i18n="guide.staminaLead">${l(`guide.staminaLead`)}</p>
          <ol class="guide-steps">
            ${u(1,`guide.staminaS1`)}
            ${u(2,`guide.staminaS2`)}
            ${u(3,`guide.staminaS3`)}
            ${u(4,`guide.staminaS4`)}
          </ol>
          <div class="guide-callout" data-i18n="guide.staminaNote">${l(`guide.staminaNote`)}</div>
        </article>

        <article class="guide-section" id="guide-tips">
          <h2 data-i18n="guide.tipsTitle">${l(`guide.tipsTitle`)}</h2>
          <p class="lead" data-i18n="guide.tipsLead">${l(`guide.tipsLead`)}</p>
          <ul class="guide-tips">
            ${d(`guide.tip1`)}
            ${d(`guide.tip2`)}
            ${d(`guide.tip3`)}
            ${d(`guide.tip4`)}
            ${d(`guide.tip5`)}
          </ul>
        </article>

        <div class="guide-cta">
          <a href="/bestiary.html" class="btn btn-primary" data-i18n="guide.toList">${l(`guide.toList`)}</a>
          <a href="/index.html" class="btn" data-i18n="guide.toHome">${l(`guide.toHome`)}</a>
        </div>
      </div>
    </div>
  </main>
  ${e()}
`,r(document),window.__guideBooted?(t(),i(),o(),n()):(window.__guideBooted=!0,s(),c.from(`.guide-hero`,{y:18,opacity:0,duration:.5,ease:`power3.out`}),c.from(`.guide-toc`,{x:-14,opacity:0,duration:.45,delay:.05,ease:`power2.out`}),c.from(`#guideSections .guide-section, .guide-cta`,{y:22,opacity:0,duration:.45,stagger:.07,ease:`power2.out`})),_()}var g=null;function _(){g&&g.abort(),g=new AbortController;let{signal:e}=g,t=[...document.querySelectorAll(`#guideToc a`)],n=t.map(e=>document.querySelector(e.getAttribute(`href`))).filter(Boolean),r=()=>{let e=window.scrollY+120,r=n[0];for(let t of n)t.offsetTop<=e&&(r=t);t.forEach(e=>{e.classList.toggle(`is-active`,e.getAttribute(`href`)===`#${r?.id}`)})};window.addEventListener(`scroll`,r,{passive:!0,signal:e}),r()}h(),window.addEventListener(`sugeon:lang`,h);
// ==UserScript==
// @name         Open in Codeflow
// @homepageURL  https://github.com/antfu/open-in-codeflow
// @supportURL   https://github.com/antfu/open-in-codeflow
// @namespace    https://greasyfork.org/en/scripts/464002-open-in-codeflow
// @version      0.1.1
// @description  Enhances GitHub to add a button to open the repo/issue/PR in Codeflow.
// @author       Anthony Fu
// @license      MIT
// @match        https://github.com/**
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pr.new
// @grant        none
// ==/UserScript==

(function () {
  'use strict'

  const id = 'open-in-codeflow'
  const iconSrc = 'data:image/svg+xml,%0A%3Csvg width=\'200\' height=\'200\' viewBox=\'0 0 200 200\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath fill-rule=\'evenodd\' clip-rule=\'evenodd\' d=\'M159.795 64.0259C160.334 62.2727 160.625 60.4058 160.625 58.4688C160.625 54.0657 159.122 50.0243 156.617 46.8595C167.15 47.8788 176.854 53.9593 183.949 62.4268C191.808 71.8074 197 84.6884 197 98.896C197 127.718 174.328 151.084 146.36 151.084C136.242 151.084 126.25 148.944 116.855 140.97C107.794 133.28 100.05 120.795 92.7158 101.899C85.7853 84.0429 79.2649 74.4773 73.1696 69.3042C67.408 64.4143 61.3518 62.879 53.6397 62.879C34.3382 62.879 18.6912 79.0044 18.6912 98.896C18.6912 109.045 22.4143 118.216 27.9282 124.797C33.5108 131.461 40.4036 134.913 46.5073 134.913C49.7751 134.913 53.4926 134.182 56.6084 133.34C58.119 132.931 59.3931 132.523 60.2776 132.222C60.7183 132.071 61.0576 131.949 61.2762 131.868L61.5099 131.781L61.5473 131.767C61.5473 131.767 61.5453 131.768 64.3382 139.323C67.1313 146.879 67.1292 146.88 67.1292 146.88L67.1206 146.883L67.1071 146.888L67.0693 146.903L66.9523 146.948C66.8567 146.985 66.7262 147.034 66.5629 147.094C66.2362 147.215 65.7783 147.379 65.2091 147.573C64.0734 147.961 62.4778 148.472 60.5894 148.982C56.9072 149.977 51.7093 151.084 46.5073 151.084C34.7802 151.084 23.8422 144.664 16.0516 135.365C8.19242 125.984 3 113.104 3 98.896C3 70.0735 25.6722 46.7081 53.6397 46.7081C63.7585 46.7081 73.7501 48.8482 83.1449 56.8214C92.2058 64.5115 99.9501 76.9971 107.284 95.8934C114.215 113.749 120.735 123.315 126.831 128.488C132.592 133.378 138.648 134.913 146.36 134.913C165.662 134.913 181.309 118.788 181.309 98.896C181.309 88.7466 177.586 79.5764 172.072 72.995C168.354 68.5575 164.055 65.544 159.795 64.0259Z\' fill=\'url(%23paint0_linear_1_6)\'/%3E%3Cpath d=\'M64.717 163.597L83.7005 131.716C84.7083 130.022 83.831 127.807 81.9609 127.325L48.2122 118.63C45.9818 118.056 44.0417 120.296 44.8489 122.515L59.6139 163.092C60.4478 165.383 63.4748 165.683 64.717 163.597Z\' fill=\'url(%23paint1_linear_1_6)\'/%3E%3Cpath fill-rule=\'evenodd\' clip-rule=\'evenodd\' d=\'M141.011 48.8608C135.174 48.8608 130.103 53.7944 130.103 60.3064C130.103 66.8184 135.174 71.752 141.011 71.752C146.848 71.752 151.919 66.8184 151.919 60.3064C151.919 53.7944 146.848 48.8608 141.011 48.8608ZM116.258 60.3064C116.258 46.5208 127.152 35 141.011 35C154.87 35 165.764 46.5208 165.764 60.3064C165.764 74.092 154.87 85.6128 141.011 85.6128C127.152 85.6128 116.258 74.092 116.258 60.3064Z\' fill=\'url(%23paint2_linear_1_6)\'/%3E%3Cdefs%3E%3ClinearGradient id=\'paint0_linear_1_6\' x1=\'15.125\' y1=\'98.896\' x2=\'187.906\' y2=\'98.896\' gradientUnits=\'userSpaceOnUse\'%3E%3Cstop stop-color=\'%23942CD6\'/%3E%3Cstop offset=\'0.993524\' stop-color=\'%23E829B3\'/%3E%3C/linearGradient%3E%3ClinearGradient id=\'paint1_linear_1_6\' x1=\'15.125\' y1=\'98.896\' x2=\'187.906\' y2=\'98.896\' gradientUnits=\'userSpaceOnUse\'%3E%3Cstop stop-color=\'%23942CD6\'/%3E%3Cstop offset=\'0.993524\' stop-color=\'%23E829B3\'/%3E%3C/linearGradient%3E%3ClinearGradient id=\'paint2_linear_1_6\' x1=\'15.125\' y1=\'98.896\' x2=\'187.906\' y2=\'98.896\' gradientUnits=\'userSpaceOnUse\'%3E%3Cstop stop-color=\'%23942CD6\'/%3E%3Cstop offset=\'0.993524\' stop-color=\'%23E829B3\'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A'

  const css = [
    // Hide comments from codeflow bot
    '.js-timeline-item:has(* > .author[href="/apps/codeflowapp"]) { display: none; }',
  ].join('')

  const style = document.createElement('style')
  style.innerHTML = css
  document.head.appendChild(style)

  function updateButtonHref(button) {
    button.href = location.href.replace('https://github.com/', 'https://pr.new/')
  }

  function createButton() {
    const a = document.createElement('a')
    updateButtonHref(a)
    a.target = '_blank'
    a.classList.add('btn')
    a.classList.add('btn-sm')
    a.innerText = ' Codeflow '
    a.id = id
    Object.assign(a.style, {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5em',
    })
    const icon = document.createElement('img')
    icon.src = iconSrc
    icon.height = 18
    icon.classList.add('octicon')
    a.prepend(icon)
    return a
  }

  function run() {
    const button = document.querySelector(`#${id}`)
    if (button) {
      // Always update the link to support GitHub SPA navigations
      updateButtonHref(button)
      return
    }

    const repoActions = document.querySelector('#repository-details-container ul')
    if (repoActions) {
      const li = document.createElement('li')
      li.appendChild(createButton())
      repoActions.prepend(li)
      return
    }

    const prActions = document.querySelector('.gh-header-actions')
    if (prActions)
      prActions.prepend(createButton())
  }

  run()
  setTimeout(run, 500) // deduped, no harm in making sure the dom is ready

  // listen to github page loaded event
  document.addEventListener('pjax:end', () => run())
  document.addEventListener('turbo:render', () => run())
})()

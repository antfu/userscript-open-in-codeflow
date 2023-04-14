// ==UserScript==
// @name         Open in Codeflow
// @namespace    http://tampermonkey.net/
// @homepageURL  https://github.com/antfu/open-in-codeflow
// @supportURL   https://github.com/antfu/open-in-codeflow
// @namespace    https://greasyfork.org/en/scripts/
// @version      0.1
// @description  try to take over the world!
// @author       Anthony Fu
// @license      MIT
// @match        https://github.com/**
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pr.new
// @grant        none
// ==/UserScript==

(function () {
  'use strict'

  const id = 'open-in-codeflow'

  const css = [
    // Hide comments from codeflow bot
    '.js-timeline-item:has(* > .author[href="/apps/codeflowapp"]) { display: none; }',
  ].join('')

  const style = document.createElement('style')
  style.innerHTML = css
  document.head.appendChild(style)

  function createButton() {
    const a = document.createElement('a')
    a.href = location.href.replace('https://github.com/', 'https://pr.new/')
    a.target = '_blank'
    a.classList.add('btn')
    a.classList.add('btn-sm')
    a.innerText = ' Codeflow '
    a.id = id
    const icon = document.createElement('img')
    icon.src = 'data:image/svg+xml,%3Csvg viewBox=\'0 0 34 34\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath fill-rule=\'evenodd\' clip-rule=\'evenodd\' d=\'M26.8631 10.7824C26.952 10.4935 27 10.1859 27 9.86678C27 9.14131 26.7521 8.47544 26.3388 7.954C28.0762 8.12195 29.6769 9.12378 30.8472 10.5189C32.1435 12.0645 33 14.1868 33 16.5277C33 21.2765 29.2602 25.1263 24.6471 25.1263C22.978 25.1263 21.3299 24.7737 19.7802 23.46C18.2857 22.193 17.0082 20.1358 15.7985 17.0224C14.6553 14.0804 13.5798 12.5044 12.5744 11.652C11.624 10.8464 10.625 10.5934 9.35294 10.5934C6.16919 10.5934 3.58823 13.2503 3.58823 16.5277C3.58823 18.1999 4.20235 19.7109 5.11187 20.7953C6.03272 21.8931 7.16967 22.4619 8.17647 22.4619C8.71548 22.4619 9.32868 22.3416 9.84262 22.2028C10.0918 22.1354 10.302 22.0682 10.4479 22.0186C10.5205 21.9937 10.5765 21.9736 10.6126 21.9603L10.6511 21.9459L10.6573 21.9436C10.6573 21.9436 10.6569 21.9437 11.1176 23.1886C11.5784 24.4334 11.578 24.4337 11.578 24.4337L11.5766 24.4342L11.5744 24.435L11.5681 24.4374L11.5488 24.4448C11.5331 24.4509 11.5115 24.459 11.4846 24.4689C11.4307 24.4888 11.3552 24.5159 11.2613 24.5479C11.074 24.6117 10.8108 24.6959 10.4993 24.7799C9.89191 24.9439 9.03453 25.1263 8.17647 25.1263C6.24209 25.1263 4.43788 24.0685 3.15283 22.5364C1.85648 20.9908 1 18.8686 1 16.5277C1 11.7788 4.73974 7.92907 9.35294 7.92907C11.022 7.92907 12.6701 8.28167 14.2198 9.59535C15.7144 10.8624 16.9918 12.9196 18.2015 16.033C19.3447 18.9749 20.4202 20.551 21.4257 21.4033C22.376 22.2089 23.3749 22.4619 24.6471 22.4619C27.8308 22.4619 30.4118 19.8051 30.4118 16.5277C30.4118 14.8554 29.7976 13.3445 28.8881 12.2601C28.2748 11.529 27.5658 11.0325 26.8631 10.7824Z\' fill=\'url(%23paint0_linear_1_6)\'/%3E%3Cpath d=\'M11.1801 27.188L14.3114 21.9351C14.4777 21.6561 14.3329 21.2911 14.0245 21.2117L8.45768 19.7792C8.08979 19.6845 7.76976 20.0536 7.90291 20.4192L10.3384 27.1047C10.4759 27.4823 10.9752 27.5317 11.1801 27.188Z\' fill=\'url(%23paint1_linear_1_6)\'/%3E%3Cpath fill-rule=\'evenodd\' clip-rule=\'evenodd\' d=\'M23.7647 8.28374C22.802 8.28374 21.9654 9.09662 21.9654 10.1695C21.9654 11.2425 22.802 12.0554 23.7647 12.0554C24.7275 12.0554 25.564 11.2425 25.564 10.1695C25.564 9.09662 24.7275 8.28374 23.7647 8.28374ZM19.6817 10.1695C19.6817 7.8982 21.4787 6 23.7647 6C26.0507 6 27.8477 7.8982 27.8477 10.1695C27.8477 12.4409 26.0507 14.3391 23.7647 14.3391C21.4787 14.3391 19.6817 12.4409 19.6817 10.1695Z\' fill=\'url(%23paint2_linear_1_6)\'/%3E%3Cdefs%3E%3ClinearGradient id=\'paint0_linear_1_6\' x1=\'0.391016\' y1=\'16.5277\' x2=\'33.609\' y2=\'16.5277\' gradientUnits=\'userSpaceOnUse\'%3E%3Cstop stop-color=\'%23761FAC\'/%3E%3Cstop offset=\'0.329402\' stop-color=\'%238A19A9\'/%3E%3Cstop offset=\'0.716611\' stop-color=\'%23D900A5\'/%3E%3Cstop offset=\'0.993524\' stop-color=\'%23D917A3\'/%3E%3C/linearGradient%3E%3ClinearGradient id=\'paint1_linear_1_6\' x1=\'0.391016\' y1=\'16.5277\' x2=\'33.609\' y2=\'16.5277\' gradientUnits=\'userSpaceOnUse\'%3E%3Cstop stop-color=\'%23761FAC\'/%3E%3Cstop offset=\'0.329402\' stop-color=\'%238A19A9\'/%3E%3Cstop offset=\'0.716611\' stop-color=\'%23D900A5\'/%3E%3Cstop offset=\'0.993524\' stop-color=\'%23D917A3\'/%3E%3C/linearGradient%3E%3ClinearGradient id=\'paint2_linear_1_6\' x1=\'0.391016\' y1=\'16.5277\' x2=\'33.609\' y2=\'16.5277\' gradientUnits=\'userSpaceOnUse\'%3E%3Cstop stop-color=\'%23761FAC\'/%3E%3Cstop offset=\'0.329402\' stop-color=\'%238A19A9\'/%3E%3Cstop offset=\'0.716611\' stop-color=\'%23D900A5\'/%3E%3Cstop offset=\'0.993524\' stop-color=\'%23D917A3\'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A'
    icon.height = 17
    icon.classList.add('octicon')
    a.prepend(icon)
    return a
  }

  function run() {
    if (document.querySelector(`#${id}`))
      return

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

  // listen to github page loaded event
  document.addEventListener('pjax:end', () => run())
  document.addEventListener('turbo:render', () => run())
})()

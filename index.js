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

  function createButton() {
    const a = document.createElement('a')
    a.href = location.href.replace('https://github.com/', 'https://pr.new/')
    a.target = '_blank'
    a.classList.add('btn')
    a.classList.add('btn-sm')
    a.innerText = ' Codeflow '
    a.id = id
    const icon = document.createElement('img')
    // TODO: update the logo?
    icon.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIwLjdlbSIgaGVpZ2h0PSIxZW0iIHZpZXdCb3g9IjAgMCAyNTYgMzY4Ij48cGF0aCBmaWxsPSIjNDlBMkY4IiBkPSJNMTA5LjU4NiAyMTcuMDEzSDBMMjAwLjM0IDBsLTUzLjkyNiAxNTAuMjMzSDI1Nkw1NS42NDUgMzY3LjI0Nmw1My45MjctMTUwLjIzM3oiLz48L3N2Zz4='
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

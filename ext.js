/* global window, document */
function waitForElementToDisplay () {
  if (window.wrappedJSObject.dogeminer !== undefined && window.wrappedJSObject.dogeminer.news !== undefined) {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/gh/Jack5079/dogeminer-2-cheats/cheats.js'
    document.body.appendChild(script)
    return
  } else {
    setTimeout(function () {
      waitForElementToDisplay()
    }, 100)
  }
}

waitForElementToDisplay()

/* global window, document */
function waitForElementToDisplay () {
  if (window.wrappedJSObject.dogeminer !== undefined && window.wrappedJSObject.dogeminer.news !== undefined) {
    console.log('donee!')
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/gh/Jack5079/dogeminer-2-cheats/cheats.js'
    document.body.appendChild(script)
    return
  } else {
    console.log('i be wating still')
    setTimeout(function () {
      waitForElementToDisplay()
    }, 100)
  }
}

waitForElementToDisplay()

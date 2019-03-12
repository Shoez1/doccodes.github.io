window.title = document.getElementById('title').innerHTML
window.pkgs = 16

function getFooter () {
  var ctt = new Date()
  var dct = new Date(
    ctt.getTime() + ctt.getTimezoneOffset() * 60 * 1000 - 5 * 60 * 60 * 1000
  )
  let hr = dct.getHours()
  let min = dct.getMinutes() < 10 ? '0' + dct.getMinutes() : dct.getMinutes()
  let sec = dct.getSeconds() < 10 ? '0' + dct.getSeconds() : dct.getSeconds()
  let timeSt = `${hr}:${min}:${sec}`
  document.querySelector('footer').innerHTML = `Hosting ${
    window.pkgs
  } Packages<br>Currently: ${timeSt}<br>Copyright Evan ${ctt.getUTCFullYear()}`
}

function checkCydia () {
  var classList = document.documentElement.classList
  if (navigator.userAgent.indexOf('Cydia') !== -1) {
    if (document.title.indexOf(' \u00b7 ') !== -1) {
      document.title = document.title.split(' \u00b7 ')[0]
    }
    classList.add('cydia')
  } else {
    classList.remove('cydia', 'depiction')
  }
}

getFooter()
setInterval(getFooter, 1000)

checkCydia()

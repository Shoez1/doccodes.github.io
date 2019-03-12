window.compat = document.getElementById('compat').innerHTML
window.desc = document.getElementById('description').innerHTML
window.ver = document.getElementById('version').innerHTML
window.change = document.getElementById('changelog').innerHTML
window.date = document.getElementById('update').innerHTML

let template = [
  '<!DOCTYPE html>',
  '<html>',
  '<head>',
  "<title>Evan's Repo</title>",
  '<meta name="author" content="Evan Elias YOung">',
  '<meta name="description" content="Where I host my Cydia tweaks">',
  '<meta name="keywords" content="jailbreak, Evan, code, cydia">',
  '<meta name="copyright" content="&copy; 2017-2019 Evan Elias Young">',
  '<meta charset="utf-8">',
  '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
  '<meta name="robots" content="index, nofollow">',
  '<meta name="html-valid" content="HTML5, ARIA, SVG1.1, MathML 2.0">',
  '<meta name="css-valid" content="CSSL 3">',
  '<meta name="lighthouse" content="281; A+">',
  '<link rel="stylesheet" type="text/css" href="../styles.css">',
  '</head>',
  '<body>',
  '<header>',
  '<h1>',
  `${window.title}`,
  '</h1>',
  '</header>',
  '<div id="content">',
  '<h2 role="header">Description</h2>',
  '<ul>',
  '<li>',
  `<p><strong>Compatible with iOS ${window.compat}</strong></p>`,
  `${window.desc}`,
  '</li>',
  '<li>',
  '<a href="screenshots.html" role="button" class="cydia_blank">View Screenshots</a>',
  '</li>',
  '</ul>',
  '<h2 role="header">Changelog</h2>',
  '<ul>',
  '<li>',
  '<p>',
  `<strong>Changes in Version ${window.ver}</strong> &middot; ${window.date} <br>`,
  '</p><p></p>',
  `<ul>${window.change}</ul>`,
  '</li>',
  '<li>',
  '<a href="changelog.html" role="button" class="cydia_blank">Full Changelog</a>',
  '</li>',
  '</ul>',
  '<h2 role="header">Social Media</h2>',
  '<ul>',
  '<li>',
  '<a href="https://paypal.me/DocCodes" role="button">Donate to further development</a>',
  '</li>',
  '<li>',
  '<a href="https://www.twitter.com/evaneliasyoung" role="button">Follow on Twitter</a>',
  '</li>',
  '<li>',
  '<a href="https://www.github.com/evaneliasyoung" role="button">View on GitHub</a>',
  '</li>',
  '<li>',
  '<a href="https://www.reddit.com/user/British-Mystery" role="button">View on Reddit</a>',
  '</li>',
  '</ul>',
  '</div>',
  '<footer role="footer"></footer>',
  '</body>',
  '</html>'
].join('')

function correctCydia () {
  if (document.documentElement.classList.contains('cydia')) {
    var base = document.createElement('base')
    var cydiaBlankLinks = document.getElementsByClassName('cydia_blank')
    base.target = '_open'
    document.head.appendChild(base)
    for (var i = 0; i < cydiaBlankLinks.length; i++) {
      cydiaBlankLinks[i].target = '_blank'
    }

    document.querySelector('header').remove()
    document.querySelector('body').style.margin = '0 0 35px 0'
  }
}

document.documentElement.innerHTML = template

correctCydia()

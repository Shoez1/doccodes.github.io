var title = document.getElementById('title').innerHTML;
var main = document.getElementById('main').innerHTML;
var pkgs = 16;

function getFooter() {
  var ctt = new Date();
  var dct = new Date(ctt.getTime() + (ctt.getTimezoneOffset() * 60 * 1000) - (5 * 60 * 60 * 1000));
  hr = dct.getHours() % 24;
  hr == 0 ? hr = 12 : hr = hr;
  timeSt = `${hr}:${dct.getMinutes() < 10 ? '0' + dct.getMinutes() : dct.getMinutes()}:${dct.getSeconds() < 10 ? '0' + dct.getSeconds() : dct.getSeconds()} ${dct.getHours() >= 12 ? 'PM' : 'AM'}`;
  window.footSt = `Hospedando ${pkgs} Packages Atualmente.<br>Atualmente: ${timeSt}<br>MTS Production Copyright ${ctt.getUTCFullYear()}. `;
}
getFooter();
setInterval(getFooter, 1000);

var template = ' \
<!DOCTYPE html> \
<html> \
   <head> \
      <title>REPO.LHO</title> \
      <meta name="author" content="Evan &quot;Doc&quot; Young"> \
      <meta name="description" content="Where I host my Cydia tweaks"> \
      <meta name="keywords" content="jailbreak, doc, code, cydia"> \
      <meta name="copyright" content="&copy; 2017 Evan Young"> \
      <meta charset="utf-8"> \
      <meta name="viewport" content="width=device-width, initial-scale=1.0"> \
      <meta name="robots" content="index, nofollow"> \
      <meta name="html-valid" content="HTML5, ARIA, SVG1.1, MathML 2.0"> \
      <meta name="css-valid" content="CSSL 3"> \
      <meta name="lighthouse" content="281; A+"> \
      <link rel="stylesheet" type="text/css" href="../styles.css"> \
   </head> \
   <body style="margin: 80px 0px 35px 0px;"> \
      <header> \
         <h1>'+title+'</h1> \
      </header> \
      <div id="content"> \
         '+main+' \
      </div> \
      <footer role="footer">'+footSt+'</footer> \
   </body> \
</html> \
';
var docElement = document.documentElement;
docElement.innerHTML = template;

function checkCydia() {
  var classList = docElement.classList;
  if (navigator.userAgent.indexOf('Cydia') != -1) {
    if (document.title.indexOf(' \u00b7 ') != -1) {
      document.title = document.title.split(' \u00b7 ')[0];
    }
    classList.add('cydia');
  } else {
    classList.remove('cydia', 'depiction');
  }
}
function correctCydia() {
  if (document.documentElement.classList.contains('cydia')) {
    var base = document.createElement('base');
    var cydiaBlankLinks = document.getElementsByClassName('cydia_blank');
    base.target = '_open';
    document.head.appendChild(base);
    for (var i = 0; i < cydiaBlankLinks.length; i++) {
      cydiaBlankLinks[i].target = '_blank';
    }
  }
}
checkCydia();
correctCydia();
setInterval(() => { document.querySelector('footer').innerHTML = footSt; }, 1000);

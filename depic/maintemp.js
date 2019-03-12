var title = document.getElementById('title').innerHTML;
var compat = document.getElementById('compat').innerHTML;
var desc = document.getElementById('description').innerHTML;
var ver = document.getElementById('version').innerHTML;
var change = document.getElementById('changelog').innerHTML;
var date = document.getElementById('update').innerHTML;
var pkgs = 16;

function getFooter() {
  var ctt = new Date();
  var dct = new Date(ctt.getTime() + (ctt.getTimezoneOffset() * 60 * 1000) - (5 * 60 * 60 * 1000));
  hr = dct.getHours() % 12;
  hr == 0 ? hr = 12 : hr = hr;
  timeSt = `${hr}:${dct.getMinutes() < 10 ? '0' + dct.getMinutes() : dct.getMinutes()}:${dct.getSeconds() < 10 ? '0' + dct.getSeconds() : dct.getSeconds()} ${dct.getHours() >= 12 ? 'PM' : 'AM'}`;
  window.footSt = `Hosting ${pkgs} Packages<br>Currently: ${timeSt}<br>Copyright Doc ${ctt.getUTCFullYear()}`;
}
getFooter();
setInterval(getFooter, 1000);

var template = ' \
<!DOCTYPE html> \
<html> \
   <head> \
      <title>Doc\'s Repo</title> \
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
   <body> \
      <header> \
         <h1>'+title+'</h1> \
      </header> \
      <div id="content"> \
         <h2 role="header">Description</h2> \
         <ul> \
            <li> \
               <p><strong>Compatible with iOS '+compat+'</strong></p> \
               '+desc+' \
            </li> \
            <li> \
               <a href="screenshots.html" role="button" class="cydia_blank">View Screenshots</a> \
            </li> \
         </ul> \
         <h2 role="header">Changelog</h2> \
         <ul> \
            <li> \
               <p><strong>Changes in Version '+ver+'</strong> &middot; '+date+'<br></p><p></p> \
               <ul>'+change+'</ul> \
            </li> \
            <li> \
               <a href="changelog.html" role="button" class="cydia_blank">Full Changelog</a> \
            </li> \
         </ul> \
         <h2 role="header">Social Media</h2> \
         <ul> \
               <li> \
                  <a href="https://paypal.me/DocCodes" role="button">Donate to further development</a> \
               </li> \
            <li> \
               <a href="https://www.twitter.com/evaneliasyoung" role="button">Follow on Twitter</a> \
            </li> \
            <li> \
               <a href="https://www.github.com/evaneliasyoung" role="button">View on GitHub</a> \
            </li> \
            <li> \
               <a href="https://www.reddit.com/user/British-Mystery" role="button">View on Reddit</a> \
            </li> \
         </ul> \
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

    document.querySelector('header').remove();
    document.querySelector('body').style.margin = '0 0 35px 0';
  }
}
checkCydia();
correctCydia();
setInterval(() => { document.querySelector('footer').innerHTML = footSt; }, 1000);

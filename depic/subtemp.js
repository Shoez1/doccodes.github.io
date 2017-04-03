var title = document.getElementById('title').innerHTML;
var main = document.getElementById('main').innerHTML;
var pkgs = 11;
function getTime() {
	var ctt = new Date();
	var dct = new Date(ctt.getTime()+(ctt.getTimezoneOffset()*60*1000)-(5*60*60*1000));
	hr=dct.getHours()%12;
	hr==0?hr=12:hr=hr;
	timeSt = `${hr}:${dct.getMinutes()}:${dct.getSeconds()<10?'0'+dct.getSeconds():dct.getSeconds()} ${dct.getHours()>=12?'PM':'AM'}`;
	window.footSt = `Hosting ${pkgs} Packages<br>Currently: ${timeSt}<br>Copyright Doc ${ctt.getUTCFullYear()}`;
}
getTime();
setInterval(getTime, 1000);

var template = ' \
<!DOCTYPE html> \
<html> \
	<head> \
		<meta name="viewport" content="width=device-width, initial-scale=1"> \
		<meta http-equiv="content-type" content="text/html" charset="utf-8"/> \
		<link rel="stylesheet" type="text/css" href="../styles.css"> \
		<meta charset="utf-8"> \
		<title>Doc\'s Repo</title> \
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
	if (navigator.userAgent.indexOf("Cydia") != -1) {
		if (document.title.indexOf(" \u00b7 ") != -1) {
			document.title = document.title.split(" \u00b7 ")[0];
		}
		classList.add("cydia");
	} else {
		classList.remove("cydia", "depiction");
	}
}
function correctCydia() {
	if (document.documentElement.classList.contains("cydia")) {
		var base = document.createElement("base");
		var cydiaBlankLinks = document.getElementsByClassName("cydia_blank");
		base.target = "_open";
		document.head.appendChild(base);
		for(var i = 0; i < cydiaBlankLinks.length; i++) {
			cydiaBlankLinks[i].target = "_blank";
		}
	}
}
checkCydia();
correctCydia();
setInterval(function(){document.querySelector('footer').innerHTML = footSt;}, 1000);
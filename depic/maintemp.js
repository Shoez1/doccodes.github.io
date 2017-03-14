var title = document.getElementById('title').innerHTML;
var compat = document.getElementById('compat').innerHTML;
var desc = document.getElementById('description').innerHTML;
var ver = document.getElementById('version').innerHTML;
var change = document.getElementById('changelog').innerHTML;
var update = document.getElementById('update').innerHTML;

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
					<p><strong>Changes in Version '+ver+'</strong></p><p></p> \
					<ul>'+change+'</ul> \
				</li> \
				<li> \
					<p>Updated: '+update+'</p> \
				</li> \
			</ul> \
			<h2 role="header">Social Media</h2> \
			<ul> \
				<li> \
					<a href="https://www.twitter.com/Bowser65" role="button">Follow on Twitter</a> \
				</li> \
				<li> \
					<a href="https://www.github.com/DocCodes" role="button">View on GitHub</a> \
				</li> \
				<li> \
					<a href="https://www.reddit.com/user/British-Mystery" role="button">View on Reddit</a> \
				</li> \
			</ul> \
		</div> \
		<footer role="footer">Copyright Doc 2017</footer> \
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
		
		document.querySelector("header").remove();
		document.querySelector("body").style.margin = "0 0 35px 0";
	}
}
checkCydia();
correctCydia();
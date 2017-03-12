var screenshots = document.getElementById('gallery').innerHTML;

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
			<h1>Screenshots</h1> \
		</header> \
		<div id="content"> \
			<ul style="list-style: none;"> \
				'+screenshots+' \
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
	}
}
checkCydia();
correctCydia();
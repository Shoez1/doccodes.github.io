var title = document.getElementById('title').innerHTML;
var compat = document.getElementById('compat').innerHTML;
var desc = document.getElementById('description').innerHTML;
var ver = document.getElementById('version').innerHTML;
var change = document.getElementById('changelog').innerHTML;

var template = ' \
<!DOCTYPE html> \
<html> \
	<head> \
		<meta http-equiv="content-type" content="text/html" charset="utf-8"/> \
		<link rel="stylesheet" type="text/css" href="styles.css"> \
		<meta charset="utf-8"> \
		<title>Doc\'s Repo</title> \
	</head> \
	<body> \
		<header> \
			<h1>'+title+'<h1> \
		</header> \
		<div id="content"> \
			<h2 role="header">Description</h2> \
			<ul> \
				<li> \
					<p><strong>Compatible with iOS '+compat+'</strong></p> \
					'+desc+' \
				</li> \
			</ul> \
			<h2 role="header">Changelog</h2> \
			<ul> \
				<li> \
					<p><strong>Changes in Version '+ver+'</strong></p><p></p> \
					<ul>'+change+'</ul> \
				</li> \
			</ul> \
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
document.documentElement.innerHTML = template;
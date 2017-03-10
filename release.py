##
# release.py (Interprets release data for tweaks)
# Copyright (c) Evan Young
##
import hashlib
import os

ctrl = input("Control File\n")
deb = input("Deb File\n")
ctrlinf = open(ctrl, 'r')
add = []

def checksum(filename, method):
	buffer = 65536
	with open(filename, 'rb') as f:
		for block in iter(lambda: f.read(buffer), b''):
			method.update(block)
	return method.hexdigest()
def printd(deb):
	print()
	order = ["Package", "Name", "Author", "Description", "Section", "Version", "Architecture", "Maintainer",
			"Depends", "Filename", "Size", "MD5sum", "SHA1", "SHA256", "Depiction"]
	for k in order:
		print("{0}: {1}".format(k, deb[k]))
def spaceToEnd(red):
	t = red.readline()
	return t[t.index(' ')+1:t.index('\n')]
def populate(dinf, cinf):
	deb = {}
	deb['Package'] = spaceToEnd(cinf)
	deb['Name'] = spaceToEnd(cinf)
	deb['Version'] = spaceToEnd(cinf)
	deb['Architecture'] = spaceToEnd(cinf)
	deb['Description'] = spaceToEnd(cinf)
	deb['Author'] = spaceToEnd(cinf)
	deb['Maintainer'] = deb['Author']
	deb['Depiction'] = ''
	deb['Section'] = spaceToEnd(cinf)
	deb['Depends'] = input("Depends\n")
	
	deb['Filename'] = "debs//{0}".format(dinf.split('/')[-1].strip())
	deb['MD5sum'] = checksum(dinf, hashlib.md5())
	deb['SHA1'] = checksum(dinf, hashlib.sha1())
	deb['SHA256'] = checksum(dinf, hashlib.sha256())
	
	deb['Size'] = os.path.getsize(dinf)
	return deb


##print(md5(deb))
end = populate(deb, ctrlinf)
printd(end)
ctrlinf.close()
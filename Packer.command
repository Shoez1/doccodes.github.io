#bin/bash
clear

cd `dirname $0`
echo Removing Packages
rm -r Packages
rm -r Packages.bz2
rm -r Packages.gz

echo Generating Packages
dpkg-scanpackages -m . /dev/null > Packages
Bzip2 -fks Packages
gzip -c Packages > Packages.gz

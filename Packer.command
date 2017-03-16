#bin/bash

cd `dirname $0`
rm -r Packages
rm -r Packages.bz2
rm -r Packages.gz

dpkg-scanpackages -m . /dev/null > Packages
Bzip2 -fks Packages
gzip -c Packages > Packages.gz

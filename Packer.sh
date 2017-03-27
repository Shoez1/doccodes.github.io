#bin/bash

cd `dirname $0`
rm -r Packages

echo Generating Packages
dpkg-scanpackages -m . /dev/null > Packages
bzip2 -fksq Packages
gzip -fkq Packages

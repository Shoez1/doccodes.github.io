#!/bin/sh

cd `dirname $0`
echo Removing .DS_Store
find . -not -name '.' -type d -maxdepth 1 -exec cd {} \; -exec find . -name '*.DS_Store' -type f -delete \;

cd `dirname $0`
echo Packaging Debian
find . -not -name '.' -type d -maxdepth 1 -exec dpkg-deb -bZgzip {} \; -exec rm -r {} \;

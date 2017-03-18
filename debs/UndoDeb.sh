#!/bin/sh
clear

cd `dirname $1`
echo Unpackaging Debian Archive
open $1

fold=${1:0:${#1}-4}
sleep 0.5
cd $fold

echo Unpackaging Debian Remnants
tar -zxf control.tar.gz
tar -zxf data.tar.gz
mkdir DEBIAN
mv control DEBIAN/
sleep 0.5

echo Removing Debian Remnants
rm -r $1
rm -r control.tar.gz
rm -r data.tar.gz
rm -r debian-binary

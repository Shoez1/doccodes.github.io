#!/bin/sh
clear

Unpack () {
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
    rm -r control.tar.gz
    rm -r data.tar.gz
    rm -r debian-binary
}
export -f Unpack

cd `dirname $0`
debs=()
for file in `find . -name '*.deb'`; do
    debs+=($file)
done
len="${#debs[@]}"

for (( i=1; i<=$len; i++ )); do
    cur="${debs[$i-1]}"
    curlen="${#cur}"
    subs="${cur:2:$curlen-6}"
    printf "\e[1m[$i]\e[0m $subs\n"
done

printf "Deb Number: "
read -a debnum
Unpack "${debs[$debnum-1]}"

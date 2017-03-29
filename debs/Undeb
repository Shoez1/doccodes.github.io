#!/bin/bash
bold="\e[1m"
reg="\e[0m"

Unpack () {
    deb=$1
    printf "${bold}Making Destination Folder${reg}\n"
    fold=${deb:2:${#deb}-6}
    mkdir $fold
    cp $deb "${fold}/${fold}.deb"
    cd $fold

    printf "${bold}Extracting Debian Archive${reg}\n"
    ar vx $deb
    tar -xzf data.tar.gz
    tar -xzf control.tar.gz

    printf "${bold}Moving Debian Control${reg}\n"
    mkdir DEBIAN
    mv control DEBIAN/control

    printf "${bold}Removing Extra Pieces${reg}\n"
    rm $deb
    rm control.tar.gz
    rm data.tar.gz
    rm debian-binary
}
export -f Unpack

cd `dirname $0`
debs=( $(find . -name '*.deb') )
len="${#debs[@]}"

for (( i=1; i<=$len; i++ )); do
    cur="${debs[$i-1]}"
    curlen="${#cur}"
    subs="${cur:2:$curlen-6}"
    printf "${bold}[$i]${reg} $subs\n"
done

printf "Deb Number: "
read -a debnum
Unpack "${debs[$debnum-1]}"

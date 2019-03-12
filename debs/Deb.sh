#!/bin/bash
bold="\e[1m"
reg="\e[0m"
Rename () {
    deb=$1
    deb=${deb:2:${#deb}-2}
    cat $1/DEBIAN/control | {
        while read CMD; do
            len=${#CMD}
            if [[ "$CMD" == Package* ]]; then
                package=${CMD:9:len}
            elif [[ "$CMD" == Version* ]]; then
                version=${CMD:9:$len}
            fi
        done

        name=$package'_'$version'_iphoneos-arm'
        mv $1 $name
    }
}
export -f Rename

cd `dirname $0`
printf "${bold}Removing .DS_Store${reg}\n"
find . -name '*.DS_Store' -delete

printf "${bold}Renaiming Folders Appropriately${reg}\n"
find . -maxdepth 1 -type d ! -name '.' -exec bash -c 'Rename "$0"' {} \;

printf "${bold}Packaging Debian Archives${reg}\n"
find . -maxdepth 1 -type d ! -name '.' -exec dpkg-deb -bZgzip {} \; -exec rm -r {} \;

#!/bin/sh
clear

Rename () {
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
echo Removing .DS_Store
find . ! -name '.*' -type d -maxdepth 1 -exec cd {} \; -exec find . -name '*.DS_Store' -type f -delete \;

echo Renaiming Folders Appropriately
find . ! -name '.*' -type d -maxdepth 1 -exec bash -c 'Rename "{}"' \;

echo Packaging Debian Archives
find . ! -name '.*' -type d -maxdepth 1 -exec dpkg-deb -bZgzip {} \; -exec rm -r {} \;

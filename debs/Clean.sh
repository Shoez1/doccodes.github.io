#!/bin/bash

cd `dirname $0`

files=()
purge=()
for file in "`find . -name '*.deb'`"; do files+=($file); done
len=${#files[@]}

printf "\e[1mRemoving Duplicants\e[0m\n"
for (( i=0; i<$len; i++ )); do
    base_i=${files[i]}
    p=${base_i%%_*}
    cur_i=${base_i:2:${#p}-2}
    for (( j=0; j<$len; j++ )); do
        base_j=${files[j]}
        p=${base_j%%_*}
        cur_j=${base_j:2:${#p}-2}
        if [ $j -ne $i -a "$cur_j" == "$cur_i" ]; then
            if [ "$base_j" -nt "$base_i" ]; then
                rm $base_i
                printf "Removing ${base_i} because it is older than ${base_j}\n"
            fi
        fi
    done
done

#!/bin/sh

cd `dirname $0`
printf "Commit Info: "
read -a info
git add .
git commit -m $info

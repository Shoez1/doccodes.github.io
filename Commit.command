#!/bin/sh

printf "Commit Name: "
read -a reason

cd `dirname $0`
git add .
git commit -m $reason
git push origin master

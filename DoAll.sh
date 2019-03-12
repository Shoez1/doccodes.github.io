#!/bin/bash

cd `dirname $0`
bash debs/Deb
bash debs/Clean
bash Pack

##
# pack.py (Pack Packages for a cydia repo)
# Copyright (c) Evan Young 2017
##
import bz2
import os

path = os.path.dirname(os.path.realpath(__file__))

writer = bz2.BZ2File('Packages.bz2', 'w') 
pkg = open("{0}\Packages".format(path), 'rb')

for l in pkg:
    writer.write(l)

writer.close()
pkg.close()

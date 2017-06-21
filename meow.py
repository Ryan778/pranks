#Python script to create "meow.txt" with ~953 MB worth of "meow"

import platform
import os

print platform.machine()
print platform.version()
print platform.platform()

print os.uname()

print 'creating meow.txt'
fn = 'meow.txt'
file = open(fn, 'w')
for i in range(40000000):
	file.write("meow meow meow meow meow ");
file.close();
print 'created meow.txt'

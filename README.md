MyoHomeControl
==============

A home automation system using Myo, which sends HTTP commands to an Intel Edison running a web server.

About
=====

Made at CalHacks 2014.

Setup
=====

1) Cut extension cords, solder them to a switch using the starter kit for Edison
2) Run the node server on the Edison
3) Create a WiFi network on your phone (tethering)
4) Connect the Edison to the WiFi network
5) Run entrepot.py in a terminal window
6) Load control.lua as a Myo Script, have it running (and connect the Myo)
7) Select the terminal window that entrepot.py is running in
8) You have your home automation system: use gestures to "center" your orientation to fit
   the physical orientation of the appliances (that is, so that your hand is at the center
   of two objects), and to switch on and off devices by "pointing" towards them.

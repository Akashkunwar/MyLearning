#!/bin/bash

read color

case $color in
red) echo "you are on fire";;
blue) echo "you are cool";;
white) echo "you come with piece";;
black) echo "you are cheotic";;
*) echo "you are mood spoiler";;
esac

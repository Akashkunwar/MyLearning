#!/bin/bash

if [ $# -gt 2 ]
then
	echo arrguement given are more han sufficient Total arguenments : $# arguenments : $1 $2 $3
elif [ $# -gt 1 ]
then
	echo arrguenment given are sufficient Total arguenments : $# arguenments : $1 $2
elif [ $# -gt 0 ]
then
	echo arguenment given are not sufficient Total arguenments : $# arguenments : $1
else
	echo arguenment are needed $#
fi

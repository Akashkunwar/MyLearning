#!/bin/bash
echo path is set as $PATH
i=0
IFS=:
for n in $PATH
do 
	echo $i $n
	(( i++ ))
done

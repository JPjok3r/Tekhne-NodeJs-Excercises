#!/usr/bin/env bash

var=${@:2:2}
var=(I am ${var[*]} and $4) #lo correcto es var=(I am "${@:2:2}" and "${@:4:1}")
echo ${var[*]}
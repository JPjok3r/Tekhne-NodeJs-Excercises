#!/usr/bin/env bash

case "$1" in
    (jpeg|jpg)
        echo "It is jpeg."
        ;;
    (png)
        echo "It is $1."
        ;;
    (gif)
        echo "It is $1."
        ;;
    (*)
        echo "$1 is not an image!"
        ;;
    esac

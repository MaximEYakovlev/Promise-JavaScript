#!/bin/bash
# Bash Menu Script
source action.sh

PS3='Please enter your choice: '
options=("start postgres_db container" "start front" "start back" "Quit")
select opt in "${options[@]}"
do
    case $opt in
        "start postgres_db container")
            start_db
            ;;
        "start front")
            start_front
            ;;
        "start back")
            start_back
            ;;
        "Quit")
            break
            ;;
        *) echo "invalid option $REPLY";;
    esac
done
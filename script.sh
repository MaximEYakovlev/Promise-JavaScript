#!/bin/bash
# Bash Menu Script
PS3='Please enter your choice: '
options=("start postgres_db container" "start front" "start back" "Quit")
select opt in "${options[@]}"
do
    case $opt in
        "start postgres_db container")
            docker-compose -f docker-compose.yml up -d
            echo "you started postgres_db container"
            ;;
        "start front")
            echo "you chose choice 2"
            ;;
        "start back")
            echo "you chose choice $REPLY which is $opt"
            ;;
        "Quit")
            break
            ;;
        *) echo "invalid option $REPLY";;
    esac
done
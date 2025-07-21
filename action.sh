#!/bin/bash

start_db() {
    docker-compose -f docker-compose.yml up -d
    echo "you started postgres_db container"
}

start_front() {
    echo "front started"
}

start_back() {
    echo "back started"
}
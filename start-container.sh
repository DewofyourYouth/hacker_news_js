#!/bin/zsh
docker-compose down --rmi local
yarn build
docker-compose up -d
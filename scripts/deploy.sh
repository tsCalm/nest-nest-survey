#!/bin/bash
REPOSITORY=/home/ec2-user/build

cd $REPOSITORY

sudo /usr/bin/npm i
sudo /usr/bin/pm2 kill
sudo /usr/bin/pm2 start "node dist/main.js"
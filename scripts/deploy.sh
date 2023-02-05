#!/bin/bash
REPOSITORY=/home/ec2-user/build

cd $REPOSITORY

sudo pm2 kill
sudo pm2 start "node dist/main.js"
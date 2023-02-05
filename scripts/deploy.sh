export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

#!/bin/bash
REPOSITORY=/home/ec2-user/build

cd $REPOSITORY

sudo pm2 kill
sudo pm2 start "node dist/main.js"
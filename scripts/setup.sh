#!/usr/bin/env sh
export NVM_DIR="$HOME/.nvm"
[ -s "$(brew --prefix)/opt/nvm/nvm.sh" ] && \. "$(brew --prefix)/opt/nvm/nvm.sh"                                       # This loads nvm
[ -s "$(brew --prefix)/opt/nvm/etc/bash_completion.d/nvm" ] && \. "$(brew --prefix)/opt/nvm/etc/bash_completion.d/nvm" # This loads nvm bash_completion

# install nvm via homebrew
brew install nvm
# install latest LTS version of Node
nvm install --lts
# install latest version of npm
npm install --global npm
# install latest version of yarn
npm install --global yarn
# install packages
yarn install

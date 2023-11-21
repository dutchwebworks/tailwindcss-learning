# Learning TailwindCSS CLI

*By Dennis Burger, Amsterdam, September 2023*

## Prerequisites

* NodeJS v18+
* Use Node Version Manager (NVM) to handle your local versions of NodeJS

## One time install

* Open a Terminal and go to the directory where the `.nvmrc` resides
* Run `nvm install` to install the correct version of NodeJS for this project
* Run `nvm use` to actually switch to the correct version that this project uses
* Run `npm install` to install the depedencies for this project.

## Running this project

* Run `npm run watch` to have TailwindCSS watch your HTML and have it write `dist/style.css` with it's TailwindCSS classes.
* Run `npm run build` for a one time production build of this project.
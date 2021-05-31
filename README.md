# jsenv

This tool is meant to "create a productive environment" for your nodejs scripts.

The idea is to enable you to write code like the one below without worrying about `npm install` or package.json files. You can find out more details about why and how [here](https://dev.to/vonheikemen/create-a-productive-environment-for-your-personal-nodejs-scripts-1o2p).

```js
#! /usr/bin/env jsenv

import fetch from 'node-fetch';
import html from 'cheerio';

const response = await fetch('http://example.com');
const $ = html.load(await response.text());

console.log($('p').text());
```

## Installation

The way this works is by installing and setting up your "environment" ahead of time so you don't have to use `npm init` and `npm install` everytime you want to make a script.

* Step 1: clone this repository.

```sh
git clone https://github.com/VonHeikemen/jsenv
```

* Step 2: Next install all the packages you'll need. 

You are encouraged to modify the package.json to add or remove packages as you see fit.

```sh
cd ./jsenv
npm install
```

* Step 3: Add `jsenv` to your PATH

For the time being you'll need to this manually.

On linux and mac: modify the `jsenv` file to use the correct path to this repository, make executable and the copy it to your PATH.

## Usage

After installation you can use it in the same way you use `node` in the command line.

```sh
jsenv /path/to/script.js
```

## Support

If you find this tool useful and want to support my efforts, [buy me a coffee ☕](https://www.buymeacoffee.com/vonheikemen).

[![buy me a coffee](https://res.cloudinary.com/vonheikemen/image/upload/v1618466522/buy-me-coffee_ah0uzh.png)](https://www.buymeacoffee.com/vonheikemen)


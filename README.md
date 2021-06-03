# jsenv

This tool is meant to "create a productive environment" for your nodejs scripts.

The idea is to enable you to write code like the one below without worrying about `npm install` or package.json files. You can find out more details about why and how [here](https://dev.to/vonheikemen/create-a-productive-environment-for-your-personal-nodejs-scripts-1o2p).

```js
#! /usr/bin/env jse

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

```sh
npm link
```

## Usage

After installation you'll have three different commands to run scripts.

* `jsc`: Only supports common-js modules. Doesn't have support for top-level await. You can `require` "global" modules.

* `jsm`: Only supports native es modules. Has top-level await. But you can't get "global" modules using `import` or `require`, instead you'll need to use the global function called `use`.

* `jse`: Supports es module syntax through a third party module loader ([esm](https://www.npmjs.com/package/esm)). Can also use `require` if you want to. Has top-level await support. Can use "global" modules with `import` or `require`. What's the catch? Startup times will be slightly slower than the others.

Usage in the command line (with `jse`).

```sh
jse /path/to/script.js --one arg --flag
```

> Note: if you don't want all those executables in your `PATH`, change the `bin` property in `package.json` before using `npm link` command.

## Support

If you find this tool useful and want to support my efforts, [buy me a coffee ☕](https://www.buymeacoffee.com/vonheikemen).

[![buy me a coffee](https://res.cloudinary.com/vonheikemen/image/upload/v1618466522/buy-me-coffee_ah0uzh.png)](https://www.buymeacoffee.com/vonheikemen)


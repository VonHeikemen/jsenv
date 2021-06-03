#! /usr/bin/env node

const path = require('path');

// Setup "global" packages
process.env.NODE_PATH = module.paths[1];
require('module')._initPaths();

// Setup es modules
// require = require('esm')(module, { 'await': true, 'cache': false });

// Setup global utility functions
require('./main.js');

// Run the script
const script = path.resolve(process.argv[2]);

if(script) {
  require(script);
} else {
  console.error('Must provide a valid path to a script');
  process.exit(1);
}


#! /usr/bin/env node

import { resolve } from 'path';
import { createRequire } from 'module';

// Setup function to require "global" modules
global['use'] = createRequire(import.meta.url);

// Setup global utility functions
use('./main.js');

// Run the script
const script = resolve(process.argv[2]);

if(script) {
  await import(script);
} else {
  console.error('Must provide a valid path to a script');
  process.exit(1);
}


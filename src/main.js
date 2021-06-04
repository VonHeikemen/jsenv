const cli = require('arg');
const sh = require('@util/sh.js');
const io = require('@util/stdio.js');

Object.assign(global, {
  sh,
  cli,
  ...io
});


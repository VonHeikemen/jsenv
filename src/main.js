const execa = require('execa');
const cli = require('arg');
const sh = require('@util/sh.js');

function stdout(str) {
  process.stdout.write(str);
}

async function stdin() {
  process.stdin.setEncoding('utf8');
  let input = '';

  for await (const chunk of process.stdin) {
    input += chunk;
  }

  return input;
}

Object.assign(global, {
  sh,
  cli,
  stdin,
  stdout,
});


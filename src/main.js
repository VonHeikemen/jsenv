const { createInterface } = require('readline');
const execa = require('execa');
const cli = require('arg');

const color_support = require('color-support').hasBasic;
const color = require('ansi-colors');
color.enabled = color_support;

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

async function prompt(message) {
  const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const user_input = await new Promise((resolve) => {
    readline.question(message, resolve);
  });

  readline.close();

  return user_input;
}

function format_number(number) {
  return new Intl.NumberFormat('de-DE').format(number);
}

const shell = (options) => (cmd) => execa.commandSync(cmd, options);
const sh = shell({ stdio: 'inherit' });
sh.str = str => str.replace(/ /g, '\\ ');
sh.quiet = shell();
sh.run = (cmd) => sh.quiet(cmd).stdout;
sh.build = shell;
sh.safe = (cmd) => {
  try {
    return sh(cmd);
  } catch (e) {
    return e
  }
};

Object.assign(global, {
  sh,
  cli,
  color,
  prompt,
  stdin,
  stdout,
  format_number
});


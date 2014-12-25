#!/usr/bin/env node

var xmasAscii = require('./');
var args = process.argv.splice(2);

if (args.indexOf('-a') !== -1 || args.indexOf('--all') !== -1) {
  xmasAscii.ascii.forEach(function (ascii) {
    process.stdout.write(ascii + '\n');
  });

  return;
}

process.stdout.write(xmasAscii() + '\n');

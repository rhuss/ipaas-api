#!/usr/bin/env node
let process = require('process');
var reporter = undefined;
var options = {
  recursive: true
};
if (process.env.CIRCLE_TEST_REPORTS) {
  console.log("Using junit reporter");
  reporter = require('nodeunit').reporters.junit;
  options.output = process.env.CIRCLE_TEST_REPORTS + '/junit';
} else {
  console.log("Using console reporter");
  reporter = require('nodeunit').reporters.default;
}
reporter.run(['test'], options);


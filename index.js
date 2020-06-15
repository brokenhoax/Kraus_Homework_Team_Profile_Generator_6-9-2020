// const path = require("path");
// const fs = require("fs");

const gatherData = require('./app');
const renderData = require('./lib/htmlrender');

console.log('Hello! World!')

async function runProgram () {
  await gatherData.getUserInput();
  await renderData.render();
}

runProgram()
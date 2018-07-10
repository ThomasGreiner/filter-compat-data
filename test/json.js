"use strict";

const fs = require("fs");
const path = require("path");
const {promisify} = require("util");

const readDir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const getStat = promisify(fs.stat);

async function testFile(filepath) {
  const content = await readFile(filepath);
  
  try {
    JSON.parse(content);
  } catch(ex) {
    console.error(`Invalid JSON file: ${filepath}`);
    console.error(ex);
    process.exit(1);
  }
}

async function walkDir(dir) {
  const files = await readDir(dir);
  
  for (const file of files) {
    const filepath = path.join(dir, file);
    const stat = await getStat(filepath);
    
    if (stat.isDirectory()) {
      walkDir(filepath);
    } else {
      testFile(filepath);
    }
  }
}

walkDir("data");

#!/usr/bin/env node
const readFile = process.argv[2];
const destFile = process.argv[3];

const {createReadStream, createWriteStream, writeFile} = require("fs")

const {Transform, Writable} = require("stream");

const capitalize = Transform();
const writeStream = Writable();

capitalize._transform = (buffer, _, cb) => {
  cb(null, buffer.toString().toUpperCase())
}

writeStream._write = (buffer, _, next) => {
  writeFile(destFile, buffer, (error) => {
    if(error) throw error;
    console.log("Woohooooooo it's done!");
  })
  next();
}

createReadStream(readFile)
.pipe(capitalize)
.pipe(writeStream)




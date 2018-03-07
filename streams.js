#!/usr/bin/env node
'use strict';

const { readFile } = process.argv[2];
const { destFile } = process.argv[3];

const { createReadStream } = require('');
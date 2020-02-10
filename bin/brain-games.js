#!/usr/bin/env node
import { hello } from '../src/index.js';

const name = hello();

console.log('Welcome to the Brain Games!');
console.log('Hello, ' + name);

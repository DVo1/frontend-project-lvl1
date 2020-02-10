#!/usr/bin/env node
import { hello, greeteng } from '../src/index.js';

const name = hello();

console.log('Welcome to the Brain Games!');
console.log(greeteng() + name);

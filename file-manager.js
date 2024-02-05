import * as readline from 'node:readline';
import * as os from 'os';
import commandExecutor from './commandExecutor.js';
import { getWorkingDirectory } from "./common.js";

const userArgs = process.argv.slice(2)[0];
const equalSignIndex = userArgs.indexOf('=');
const userName = userArgs.slice(equalSignIndex + 1);

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.on('line', (line) => {
    commandExecutor(line);
});

process.on('exit', (code) => {
    process.stdout.write(`Thank you for using File Manager, ${userName}, goodbye!` + os.EOL);
});

process.stdout.write(`Welcome to the File Manager, ${userName}!` + os.EOL);
process.stdout.write(`You are currently in: ${getWorkingDirectory()}` + os.EOL);
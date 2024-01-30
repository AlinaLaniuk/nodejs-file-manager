import * as readline from 'node:readline';

const userArgs = process.argv.slice(2)[0];
const equalSignIndex = userArgs.indexOf('=');
const userName = userArgs.slice(equalSignIndex + 1);

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.on('line', (line) => {
    console.log(`Received: ${line}`);
});

process.on('exit', (code) => {
    process.stdout.write(`Thank you for using File Manager, ${userName}, goodbye!`);
});

process.stdout.write(`Welcome to the File Manager, ${userName}!`);
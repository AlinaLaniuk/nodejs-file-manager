import * as fs from 'fs';
import * as fsPromises from 'fs/promises';
import * as path from 'path';
import { getWorkingDirectory } from '../common.js';

async function copyFiles(args) {
    try {
        if(args.length !== 2){
            throw new Error('Unexpected arguments.');
        }
        const userFromFilePathInput = args[0];
        const userToFilePathInput = args[1];
        const from = path.isAbsolute(userFromFilePathInput) ? userFromFilePathInput : path.resolve(getWorkingDirectory(), userFromFilePathInput);
        const to = path.isAbsolute(userToFilePathInput) ? userToFilePathInput : path.resolve(getWorkingDirectory(), userToFilePathInput);
        await fsPromises.access(from);
        await fsPromises.access(to);
        const readStream = fs.createReadStream(from);
        const writeStream = fs.createWriteStream(to);
        readStream.on('data', (chunk) => {
            writeStream.write(chunk);
        });
    } catch (err) {
        process.stdout.write('Wrong file path.' + '\n');
    }
};

export default copyFiles;
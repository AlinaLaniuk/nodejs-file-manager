import * as fsPromises from 'fs/promises';
import * as path from 'path';
import * as os from 'os';
import { getWorkingDirectory } from '../common.js';
import copyFiles from './copyFiles.js';

async function moveFile(args){
    try {
        if(args.length !== 2){
            throw new Error('Unexpected arguments.' + os.EOL);
        }
        await copyFiles(args);
        const userFromFilePathInput = args[0];
        const from = path.isAbsolute(userFromFilePathInput) ? userFromFilePathInput : path.resolve(getWorkingDirectory(), userFromFilePathInput);
        await fsPromises.rm(from);
    } catch (err) {
        process.stdout.write('Wrong file path.' + os.EOL);
    }
};

export default moveFile;
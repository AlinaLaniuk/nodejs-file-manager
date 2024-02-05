import * as fsPromises from 'fs/promises';
import * as path from 'path';
import { getWorkingDirectory } from '../common.js';
import copyFiles from './copyFiles.js';

async function deleteFile(args) {
    try {
        if (args.length !== 1) {
            throw new Error('Unexpected arguments.');
        }
        const deleteFileUserInput = args[0];
        const deleteFilePath = path.isAbsolute(deleteFileUserInput) ? deleteFileUserInput : path.resolve(getWorkingDirectory(), deleteFileUserInput);
        await fsPromises.access(deleteFilePath);
        await fsPromises.rm(deleteFilePath);
    } catch (err) {
        process.stdout.write('Wrong file path.' + '\n');
    }
};

export default deleteFile;
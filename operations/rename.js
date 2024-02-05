import * as promisifyFs from 'fs/promises';
import * as path from 'path';
import { getWorkingDirectory } from '../common.js';

async function rename(args){
    try {
        if(args.length < 2){
            throw new Error('Unecxpected arguments');
        }
        const userFilePathInput = args[0];
        const newFileName = args[1];
        const filePath = path.isAbsolute(userFilePathInput) ? userFilePathInput : path.resolve(getWorkingDirectory(), userFilePathInput);
        const newFilePath = path.resolve(path.parse(filePath).dir, newFileName);
        await promisifyFs.access(filePath);
        await promisifyFs.rename(filePath, newFilePath);
        process.stdout.write('File successfully renamed.');

    } catch (err) {
        process.stdout.write('Wrong file path.');
    }
};

export default rename;
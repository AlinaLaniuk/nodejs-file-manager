import * as fs from 'fs';
import * as fsPromises from 'fs/promises';
import * as path from 'path';
import * as os from 'os';
import { getWorkingDirectory } from '../common.js';
import { finished } from 'stream/promises';

async function copyFiles(args) {
    try {
        if(args.length !== 2){
            throw new Error('Unexpected arguments.');
        }
        const userFromFilePathInput = args[0];
        const userToFilePathInput = args[1];
        const from = path.isAbsolute(userFromFilePathInput) ? userFromFilePathInput : path.resolve(getWorkingDirectory(), userFromFilePathInput);
        const to = path.isAbsolute(userToFilePathInput) ? userToFilePathInput : path.resolve(getWorkingDirectory(), userToFilePathInput, path.parse(from).base);
        await fsPromises.access(from);
        await fsPromises.writeFile(to, '');
        const readStream = fs.createReadStream(from);
        const writeStream = fs.createWriteStream(to);
        await finished(readStream.pipe(writeStream));
    } catch (err) {
        process.stdout.write('Wrong file path.' + os.EOL);
    }
};

export default copyFiles;
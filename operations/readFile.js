import * as fs from 'fs';
import * as promisifyFs from 'fs/promises';
import * as path from 'path';
import { getWorkingDirectory } from '../common.js';

async function readFile(args) {
    const userFilePathInput = args[0];
    const filePath = path.isAbsolute(userFilePathInput) ? userFilePathInput : path.resolve(getWorkingDirectory(), userFilePathInput);
    try {
        await promisifyFs.access(filePath);
        const stream = fs.createReadStream(filePath);
        stream.on('data', (data) => {
            process.stdout.write(data + '\n');
        });
    } catch (err) {
        process.stdout.write('Wrong file path.');
    }
};

export default readFile;
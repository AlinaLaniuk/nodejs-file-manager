import * as promisifyFs from 'fs/promises';
import * as path from 'path';
import { getWorkingDirectory } from '../common.js';

async function addNewFile(args) {
    const newFileName = args[0];
    try {
        await promisifyFs.writeFile(path.join(getWorkingDirectory(), newFileName), '');
        process.stdout.write('New empty file successfully created.')
    } catch (err) {
        process.stdout.write('Cannot create file.');
    }
};

export default addNewFile;
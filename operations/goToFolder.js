import * as path from 'path';
import * as os from 'os';
import { access } from 'fs/promises';
import { getWorkingDirectory, changeWorkingDirectory } from '../common.js';

async function goToFolder(newPath) {
    try {
        if(newPath.length !== 1){
            throw new Error('Unexpected arguments.' + os.EOL);
        }
        const pathString = newPath.join('');
        const isPathAbsolute = path.isAbsolute(...newPath);
        if (isPathAbsolute) {
            await access(pathString);
            changeWorkingDirectory(pathString);
        } else {
            const newWorkingDir = path.resolve(getWorkingDirectory(), pathString);
            await access(newWorkingDir);
            changeWorkingDirectory(newWorkingDir);
        }
    } catch (err) {
        process.stdout.write('No such file or directory'  + os.EOL);
    }
};

export default goToFolder;
import * as path from 'path';
import * as os from 'os';
import { changeWorkingDirectory, getWorkingDirectory } from '../common.js';

function goUpper() {
    try {
        const currentWorkingDir = getWorkingDirectory();
        const root = path.parse(currentWorkingDir).root;
        if (currentWorkingDir === root) {
            process.stdout.write('You cannot go upper.' + os.EOL);
        } else {
            const newCurrentWorkingDirPath = path.resolve(getWorkingDirectory(), '..');
            changeWorkingDirectory(newCurrentWorkingDirPath);
        }
    } catch (err) {
        process.stdout.write('Try again. Something wrong' + os.EOL);
    }
};

export default goUpper;
import * as path from 'path';
import { changeWorkingDirectory, getWorkingDirectory } from '../common.js';

function goUpper(){
    const currentWorkingDir = getWorkingDirectory();
    const root = path.parse(currentWorkingDir).root;
    if(currentWorkingDir === root){
        process.stdout.write('You cannot go upper.');
    } else {
        const lastFolder = path.basename(currentWorkingDir);
        const newCurrentWorkingDirPath = path.join(...currentWorkingDir.split(path.sep).filter((part) => part !== lastFolder));
        changeWorkingDirectory(newCurrentWorkingDirPath);
    }
};

export default goUpper;
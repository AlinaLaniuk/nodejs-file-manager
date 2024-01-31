import { chdir } from 'process';
import * as path from 'path';
import * as os from 'os';

let currentWorkingDir = os.homedir();

function goUpper(){
    const root = path.parse(currentWorkingDir).root;
    if(currentWorkingDir === root){
        process.stdout.write('You cannot go upper.');
    } else {
        const lastFolder = path.basename(currentWorkingDir);
        const newCurrentWorkingDirPath = path.join(...currentWorkingDir.split(path.sep).filter((part) => part !== lastFolder));
        currentWorkingDir = newCurrentWorkingDirPath;
        return currentWorkingDir;
    }
};

export default goUpper;
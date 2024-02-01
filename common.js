import * as os from 'os';
import * as path from 'path';

let currentWorkingDir = os.homedir();

export function changeWorkingDirectory(newWorkingDirectory){
    currentWorkingDir = newWorkingDirectory;
};

export function getWorkingDirectory(){
    return currentWorkingDir;
}
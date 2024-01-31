import * as os from 'os';
let currentWorkingDir = os.homedir();

export function changeWorkingDirectory(newWorkingDirectory){
    currentWorkingDir = newWorkingDirectory;
};

export function getWorkingDirectory(){
    return currentWorkingDir;
}
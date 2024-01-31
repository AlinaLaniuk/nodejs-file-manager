import * as path from 'path';
import { getWorkingDirectory, changeWorkingDirectory } from '../common.js';

function goToFolder(newPath){
    
    // const isPathAbsolute = path.isAbsolute(newPath);
    // if(isPathAbsolute){
    //     changeWorkingDirectory(newPath);
    // } else {
    //     changeWorkingDirectory(getWorkingDirectory() + newPath);
    // }
};

export default goToFolder;
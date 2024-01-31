import * as path from 'path';
import { getWorkingDirectory, changeWorkingDirectory } from '../common.js';

function goToFolder(newPath){
    const pathString = newPath.join('');
    const isPathAbsolute = path.isAbsolute(...newPath);
    if(isPathAbsolute){
        changeWorkingDirectory(newPath);
    } else {
        
    }
};

export default goToFolder;
import * as fs from 'fs/promises';
import { getWorkingDirectory } from '../common.js';

async function listWorkingDirContent(){
    const workingDirContent = await fs.readdir(getWorkingDirectory(), {withFileTypes: true});
    const sortedFiles = workingDirContent.filter((dirent) => dirent.isFile()).map((dirent) => dirent.name).sort();
    const sortedFolders = workingDirContent.filter((dirent) => dirent.isDirectory()).map((dirent) => dirent.name).sort();
    const tableData = [];
    sortedFiles.forEach((name) => tableData.push({Name: name, Type: 'file'}));
    sortedFolders.forEach((name) => tableData.push({Name: name, Type: 'directory'}));
    console.table(tableData);
};

export default listWorkingDirContent;
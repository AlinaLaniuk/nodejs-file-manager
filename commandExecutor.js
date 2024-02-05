import goUpper from "./operations/goUpper.js";
import goToFolder from "./operations/goToFolder.js";
import listWorkingDirContent from "./operations/list.js";
import readFile from "./operations/readFile.js";
import addNewFile from "./operations/addNewFile.js";
import rename from "./operations/rename.js";
import copyFiles from "./operations/copyFiles.js";
import deleteFile from "./operations/deleteFile.js";
import osOperations from "./operations/osOperations.js";
import { getWorkingDirectory } from "./common.js";
import moveFile from "./operations/moveFile.js";
import calculateHash from "./operations/hash.js";
import * as os from 'os';

const commands = {
    up: goUpper,
    cd: goToFolder,
    ls: listWorkingDirContent,
    cat: readFile,
    add: addNewFile,
    rn: rename,
    cp: copyFiles,
    mv: moveFile,
    rm: deleteFile,
    os: osOperations,
    hash: calculateHash
}

async function commandExecutor(line) {
    const parsedLine = line.split(' ');
    const command = parsedLine.shift();
    const args = [...parsedLine];
    await commands[command](args);
    process.stdout.write(`You are currently in: ${getWorkingDirectory()}` + os.EOL);
};

export default commandExecutor;
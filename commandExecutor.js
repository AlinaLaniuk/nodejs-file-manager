import goUpper from "./operations/goUpper.js";
import goToFolder from "./operations/goToFolder.js";
import listWorkingDirContent from "./operations/list.js";
import readFile from "./operations/readFile.js";
import addNewFile from "./operations/addNewFile.js";
import rename from "./operations/rename.js";
import copyFiles from "./operations/copyFiles.js";
import { getWorkingDirectory } from "./common.js";

const commands = {
    up: goUpper,
    cd: goToFolder,
    ls: listWorkingDirContent,
    cat: readFile,
    add: addNewFile,
    rn: rename,
    cp: copyFiles
}

async function commandExecutor(line) {
    const parsedLine = line.split(' ');
    const command = parsedLine.shift();
    const args = [...parsedLine];
    await commands[command](args);
    process.stdout.write(`You are currently in: ${getWorkingDirectory()}` + '\n');
};

export default commandExecutor;
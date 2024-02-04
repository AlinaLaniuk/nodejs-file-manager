import goUpper from "./operations/goUpper.js";
import goToFolder from "./operations/goToFolder.js";
import listWorkingDirContent from "./operations/list.js";
import readFile from "./operations/readFile.js";
import { getWorkingDirectory } from "./common.js";

const commands = {
    up: goUpper,
    cd: goToFolder,
    ls: listWorkingDirContent,
    cat: readFile,
}

async function commandExecutor(line) {
    const parsedLine = line.split(' ');
    const command = parsedLine.shift();
    const args = [...parsedLine];
    await commands[command](args);
    process.stdout.write(`You are currently in: ${getWorkingDirectory()}` + '\n');
};

export default commandExecutor;
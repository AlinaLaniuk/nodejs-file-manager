import goUpper from "./operations/goUpper.js";
import goToFolder from "./operations/goToFolder.js";
import { getWorkingDirectory } from "./common.js";

const commands = {
    up: goUpper,
    cd: goToFolder
}

function commandExecutor(line) {
    const parsedLine = line.split(' ');
    const command = parsedLine.shift();
    const args = [...parsedLine];
    commands[command](args);
    process.stdin.write(`You are currently in: ${getWorkingDirectory()}` + '\n');
};

export default commandExecutor;
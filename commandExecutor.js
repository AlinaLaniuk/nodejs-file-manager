import { cwd } from 'process';
import goUpper from "./operations/goUpper.js";

const commands = {
    up: goUpper,
}

function commandExecutor(line) {
    const currentWorkingDir = commands[line]();
    process.stdin.write(`You are currently in: ${currentWorkingDir}` + '\n');
};

export default commandExecutor;
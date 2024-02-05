import * as os from 'os';

const cpus = () => {
    const cpusData = os.cpus();
    const message = cpusData.map((cpuData) => `model: ${cpuData.model}, clock rate: ${cpuData.speed}`).join(os.EOL);
    return `amount of CPUS: ${cpusData.length}` + os.EOL + message + os.EOL;
};

const osOperations = {
    '--EOL': () => {return `EOL: ${'//' + os.EOL}`},
    '--cpus': cpus,
    '--homedir': () => {return `Homedir: ${os.homedir()}` + os.EOL},
    '--username': () => {return `Username: ${os.userInfo().userName}` + os.EOL},
    '--architecture': () => {return `Architecture: ${os.arch()}` + os.EOL}
}

function osOperationsExecutor(args) {
    try {
        if (args.length !== 1) {
            throw new Error('Unexpected arguments.');
        }
        const flag = args[0];
        process.stdout.write(osOperations[flag]());
    } catch (err) {
        process.stdout.write('Try again. Something wrong' + '\n');
    }
};

export default osOperationsExecutor;
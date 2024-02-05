import * as fs from 'fs';
import * as zlib from 'zlib';
import * as os from 'os';
import * as path from 'path';
import { pipeline } from 'stream';
import { promisify } from 'util';
import { getWorkingDirectory } from '../common.js';

async function compress(args) {
    try{
        if(args.length !== 2){
            throw new Error('Unexpected arguments.' + os.EOL);
        }
        const userFilePathInput = args[0];
        const userDestinationPathInput = args[1];
        const from = path.isAbsolute(userFilePathInput) ? userFilePathInput : path.resolve(getWorkingDirectory(), userFilePathInput);
        const fileName = path.basename(from, path.extname(from));
        const to = path.isAbsolute(userDestinationPathInput) ? userDestinationPathInput : path.resolve(getWorkingDirectory(), userDestinationPathInput, `${fileName}.br`);
        const promisifyPipeline = promisify(pipeline);
        const gzip = zlib.createBrotliCompress();
        const source = fs.createReadStream(from);
        const destination = fs.createWriteStream(to);
        await promisifyPipeline(source, gzip, destination);
    } catch(err){
        process.stdout.write('Try again. Something wrong' + err + os.EOL);
    }
};

export default compress;
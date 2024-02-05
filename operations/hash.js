import * as crypto from 'crypto';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import * as fsPromises from 'fs/promises';
import { finished } from 'stream/promises';
import { getWorkingDirectory } from '../common.js';

async function calculateHash (args){
    try{
        if(args.length !== 1){
            throw new Error('Unexpected arguments.');
        }
        const userPathInput = args[0];
        const filePath = path.isAbsolute(userPathInput) ? userPathInput : path.resolve(getWorkingDirectory(), userPathInput);
        await fsPromises.access(filePath);
        const hash = crypto.createHash('sha256');
        const stream = fs.createReadStream(filePath);
        stream.on('data', (data) => {
            hash.update(data);
        });
    
        stream.on('end', () => {
            const result = hash.digest('hex');
            process.stdout.write(result + os.EOL);
        });
    
        stream.on('error', (error) => {
            throw new Error('Operation failed');
        });

        await finished(stream);
    } catch(err){
        process.stdout.write('Try again. Something wrong' + err + '\n');
    }
};

export default calculateHash;
const fs = require('fs');

const source = './src/ocpp1.6/schemas';
const destination = 'ocpp-commands.d.ts';

const commands =
    fs
    .readdirSync(source)
    .map(fileName => fileName.split('.')[0])
    .filter(name => !name.includes('Response'));

fs.openSync(destination, 'w');
fs.appendFileSync(destination, 'export enum OcppCommand {');
commands.forEach((command, index) => {
    const terminator = index === commands.length - 1 ? '' : ',';
    fs.appendFileSync(destination, `\n\t${command} = '${command}'${terminator}`);
});
fs.appendFileSync(destination, '\n}');
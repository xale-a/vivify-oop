const fs = require('fs');
fs.writeFile('log/log.txt', 'log:', { flag: 'w' }, function () { });
export const logger = fs.createWriteStream('log/log.txt', {
  flags: 'a'
});
export const writeLine = (line: string) => logger.write(`\n${line}`);
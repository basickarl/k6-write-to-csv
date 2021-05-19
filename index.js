import fs from 'fs';

export function writeToCsv(filename, data) {
    fs.writeFileSync(filename, `${data}\n`);
}
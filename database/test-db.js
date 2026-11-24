
const db = require('./db');

const tables = db.prepare(`
    SELECT name
    FROM sqlite_master
    WHERE type = 'table'
    AND name NOT LIKE 'sqlite_%'
`).all();

console.log('Database tables:');
console.table(tables);

db.close();

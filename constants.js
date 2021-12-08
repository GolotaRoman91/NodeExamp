const userName = 'postgres';
const userPass = '1234';
const dbPath = 'localhost:5432';
const dbName = 'HomeWork';
const dbstring = `postgres://${userName}:${userPass}@${dbPath}/${dbName}`;

exports.dbstring = dbstring;

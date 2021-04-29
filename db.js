var PouchDB = require('pouchdb');

PouchDB.plugin(require('pouchdb-find'));

// var db = new PouchDB('hospital');

var db = new PouchDB('http://localhost:5984/hospital');

console.log('Database is connected');

module.exports = db;


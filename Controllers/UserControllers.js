//POUCH DB
var PouchDB = require('pouchdb');

// LOCAL(IN SYSTEM) DATABASE
var localDB = new PouchDB('hospital');

//Distance(REMOTE) DATABASE
// var remoteDB = new PouchDB('http://localhost:5984/company');

var remoteDB = new PouchDB('http://localhost:5984/hospital');


var db = require('../db')

//DATABASES SYNCHRONIZING(synchronizing local database and remote database)
exports.databases = (req, res) => {
    //Synchronising local database and remote database
    localDB.replicate.to(remoteDB);
    // remoteDB.replicate.from(localDB);
    console.log("Databases synchronized successfully");
    res.send({
        status: 200,
        message: 'Successfully synchronized'
    })
}

exports.getHospitalsNearby = (req, res) => {
    db.allDocs({include_docs: true}, function (err, doc)  {
        if(err) {
            console.log(err)
        } else {
            res.send({
                status: 200,
                doc: doc.rows
            })
            console.log(doc.rows)
        }
    })
}

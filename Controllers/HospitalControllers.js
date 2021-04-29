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


// ADDING NEW HOSPITAL DATA
exports.addHospital = (req,res) => {
    doc = {

        hospitalName: req.body.hospitalName,
        doctorName: req.body.doctorName,
        address: req.body.address,
        phone: req.body.phone,
        data: req.body.data,
        lat: req.body.lat,
        lon: req.body.lon,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    }


    // ADDING THE HOSPITAL DATA...
    db.post(doc, (err, data) => {
        if(err) {
            return console.log(err);
        } else {
            console.log(data, 'hospital data is now added');
            db.find({
                selector:{
                    _id: data.id
                },
                fields:['hospitalName', 'doctorName', 'address', 'phone', 'data', 'lat', 'lon', 'latitude', 'longitude']
            }).then(hospitaldetails => {
                return res.send({
                    status:200,
                    hospitaldetails: hospitaldetails,
                    hospitalName: hospitaldetails.docs[0].hospitalName,
                    doctorName: hospitaldetails.docs[0].doctorName,
                    address: hospitaldetails.docs[0].address,
                    phone: hospitaldetails.docs[0].phone,
                    data: hospitaldetails.docs[0].data,
                    lat: hospitaldetails.docs[0].lat,
                    lon: hospitaldetails.docs[0].lon,
                    latitude: hospitaldetails.docs[0].latitude,
                    longitude: hospitaldetails.docs[0].longitude,
                })
            }).catch(err => {
                console.log(err)
            })
        }
    })


}



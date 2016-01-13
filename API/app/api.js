var mongoose = require('mongoose');
var Doctors = require('./models/doctors');
module.exports = function (app, express) {
    var api = express.Router();
    api.get('/', function (req, res) {
        res.json({ code: '100', data: 'API is working great' });
    });
    api.get('/Doctors/Check', function (req, res) {
        Doctors.findOne({ 'Email': 'amiraly@deltacode.co' }, '', function (err, Obj) {
            if (err)
                return res.json({ code: '1', data: 'No doctors witht his Email' });
            else
                res.json({ code: '100', data: Obj });
        })
    });
    api.post('/Doctors/Register', function (req, res) {
        var _newDoctor = new Doctors({
            Email: 'amiraly@deltacode.co',
            Phone: '012367523675',
            Fullname: 'Amir Aly Ahmed',
            Status: 'Active',
            Speciality: 'Nural',
            LastLogin: new Date(),
        });
        _newDoctor.save(function (err, Obj) {
            if (err)
                return res.json({ code: '1', data: err });
            else
                res.json({ code: '100', data: Obj });
        })
    });
    return api;
};



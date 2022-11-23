const path = require('path');
const Shark = require('../models/sharks');

exports.index = function (req, res) {
    res.sendFile(path.resolve('views/sharks.html'));
};

exports.create = function (req, res) {
    var newShark = new Shark(req.body);
    newShark.save(function (err) {
            if(err) {
            res.status(400).send('Unable to save shark to database');
        } else {
            res.redirect('/sharks/getshark');
        }
  });
};

exports.list = function (req, res) {
        Shark.find({}).exec(function (err, sharks) {
                if (err) {
                        return res.send(500, err);
                }
                res.render('getshark', {
                        sharks: sharks
             });
        });
};

exports.delete = async (req, res) =>{
        try {
                await Shark.findByIdAndDelete(req.params.id);
                res.redirect('/sharks/getshark'); 
        } catch (err) {
                res.status(400).send('ERROR: Shark not found');
        }
};
exports.editor = async (req, res) => {
        try {
                var sharky = await Shark.findById(req.params.id);
                res.render('editshark', {
                        sharky: sharky
                });
        } catch (err) {
                res.status(400).send('ERROR: Shark not found');
        }
};

exports.edit = async (req, res) => {
        try {
                await Shark.findByIdAndUpdate(req.params.id,req.body);
                res.redirect('/sharks/getshark');
        } catch (err) {
                res.status(400).send('ERROR: Shark could not be edited');
        }
};

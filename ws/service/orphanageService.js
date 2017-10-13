var mongoose = require('mongoose');
var Orphanage = require.main.require('./ws/models/orphanage');

exports.addOrphanage = function(req, res) {

    var orphanage = new Orphanage(req.body);
    orphanage.created = Date.now();
    saveOrphanage(orphanage, res);
};

var saveOrphanage = function(orphanage, res) {
    orphanage.save(function(err, orphanage) {
        if (err) {
            res.send(err);
        }

        res.json(orphanage);
    });
}


exports.findAllOrphanages = function(req, res) {

    Orphanage.find().exec(function(err, orphanages) {
        if (err) {
            res.send(err);
        }

        res.json(orphanages);
    });
};

exports.simpleSearch = function(req, res) {

    if(req.query.prm == null) {
        res.json("Open search disabled!")
    }

    Orphanage.find({ $text: { $search: req.query.prm } }, function(err, orphanages) {
        if (err) {
            res.send(err);
        }

        res.json(orphanages);

    });

};


exports.findOrphanageById = function(req, res) {
    Orphanage.findOne({'_id' : req.params.orphanage_id})
        .populate('owners caregivers rating')
        .exec(function(err, orphanage) {

        if (err) {
            res.send(err);
        }

        res.json(orphanage);
    });
};


exports.updateOrphanage = function(req, res) {

    Orphanage.findById(req.params.orphanage_id, function(err, orphanage) {

        if (err) {
            res.send(err);
        }

        populateOrphanage(req.body, orphanage, res, function(orphanage, res) {
            saveOrphanage(orphanage, res);
        });
    });

};


var populateOrphanage = function(body, orphanage, res, callback) {

    if(body.name != null) {
        orphanage.name = body.name;
    }
    if(body.description != null) {
         orphanage.description = body.description;
    }
    if(body.image != null) {
         orphanage.image = body.image;
    }
    if(body.address != null) {
         orphanage.address = body.address;
    }
    if(body.dictrict != null) {
         orphanage.dictrict = body.dictrict;
    }
    if(body.city != null) {
         orphanage.city = body.city;
    }
    if(body.contacts != null) {
         orphanage.contacts = body.contacts;
    }
    if(body.totaldonationcount != null) {
         orphanage.totaldonationcount = body.totaldonationcount;
    }
    if(body.noofchildren != null) {
         orphanage.noofchildren = body.noofchildren;
    }
    if(body.owners != null) {
         orphanage.owners = body.owners;
    }
    if(body.caregivers != null) {
         orphanage.caregivers = body.caregivers;
    }
    if(body.rating != null) {
         orphanage.rating = body.rating;
    }
    if(body.requests != null && body.requests.length > 0) {
        orphanage.requests = body.requests;
    }
    callback(orphanage, res);
};

exports.deleteOrphanage = function(req, res) {

    Orphanage.remove({_id: req.params.orphanage_id}, function(err, orphanage) {
        if (err) {
            res.send(err);
        }

        res.json('Orphanage deleted');
    });
};

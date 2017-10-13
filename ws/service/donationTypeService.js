var DonationType = require.main.require('./ws/models/donationType');

exports.addDonationType = function(req, res) {

    var donationType = new DonationType(req.body);

    donationType.save(function(err, donationType) {
        if (err) {
            res.send(err);
        }

        res.json(donationType);
    });
};

exports.findAllDonationTypes = function(req, res) {

    DonationType.find(function(err, donationTypes) {
        if (err) {
            res.send(err);
        }

        res.json(donationTypes);
    });
};

exports.findDonationTypeById = function(req, res) {
    DonationType.findById(req.params.donationType_id, function(err, donationType) {
        if (err) {
            res.send(err);
        }

        res.json(donationType);
    });
};

exports.updateDonationType = function(req, res) {

    DonationType.findById(req.params.donationType_id, function(err, donationType) {

        if (err) {
            res.send(err);
        }

        donationType.name = req.body.name;

        donationType.save(function(err) {
            if (err) {
                res.send(err);
            }

            res.json(donationType);
        });
    });
};

exports.deleteDonationType = function(req, res) {

    DonationType.remove({_id: req.params.donationType_id}, function(err, donationType) {
        if (err) {
            res.send(err);
        }

        res.json('DonationType deleted');
    });
};

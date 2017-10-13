var mongoose = require('mongoose');
var Donation = require.main.require('./ws/models/donation');

exports.addDonation = function(req, res) {

    var donation = new Donation(req.body);
    //dummy data
    if(req.body.date == null) {
        donation.date = Date.now();
    }
    if(req.body.fullfilled != null &&
        (req.body.fullfilled.toUpperCase() === 'YES' || req.body.fullfilled === true)) {
        donation.fullfilled = true;
    } else {
        donation.fullfilled = false;
    }
    donation.createDate = Date.now();
    saveDonation(donation, res);
};

var saveDonation = function(donation, res) {
    donation.save(function(err, donation) {
        if (err) {
            res.send(err);
        }

        res.json(donation);
    });
}

exports.findAllDonations = function(req, res) {

    Donation.find().exec(function(err, donations) {
        if (err) {
            res.send(err);
        }

        res.json(donations);
    });
};

exports.findDonationById = function(req, res) {
    Donation.findOne({'_id' : req.params.donation_id})
        .populate('donationtype orphanage profile')
        .exec(function(err, donation) {
        if(donation.request != null) {
            var requests = donation.orphanage.requests;
            if(requests != null) {
                var request = requests.id(donation.request);
                donation.request = request;
            }
        }


        if (err) {
            res.send(err);
        }

        res.json(donation);
    });
};

exports.updateDonation = function(req, res) {

    Donation.findById(req.params.donation_id, function(err, donation) {

        if (err) {
            res.send(err);
        }

        populateDonation(req.body, Donation, res, function(donation, res) {
            saveDonation(donation, res);
        });
    });

};

var populateDonation = function(body, Donation, res, callback) {

    if(body.date != null) {
        donation.date = body.date;
    }
    if(body.donationtype != null) {
         donation.donationtype = body.donationtype;
    }
    if(body.orphanage != null) {
         donation.orphanage = body.orphanage;
    }
    if(body.profile != null) {
         donation.profile = body.profile;
    }
    if(body.request != null) {
         donation.request = body.request;
    }
    if(body.quentity != null) {
         donation.quentity = body.quentity;
    }
    if(body.fullfilled != null) {
         donation.fullfilled = body.fullfilled;
    }
    if(body.totaldonationcount != null) {
         donation.totaldonationcount = body.totaldonationcount;
    }
    if(body.fullfilledQuentity != null) {
         donation.fullfilledQuentity = body.fullfilledQuentity;
    }
    if(body.fullfilled != null &&
        (body.fullfilled.toUpperCase() === 'YES' || body.fullfilled === true)) {
        donation.fullfilled = true;
    } else if(body.fullfilled != null &&
        body.fullfilled.toUpperCase() === 'NO' || body.fullfilled === false) {
        donation.fullfilled = false;
    }

    callback(Donation, res);
};

exports.deleteDonation = function(req, res) {

    Donation.remove({_id: req.params.donation_id}, function(err, donation) {
        if (err) {
            res.send(err);
        }

        res.json('Donation deleted');
    });
};

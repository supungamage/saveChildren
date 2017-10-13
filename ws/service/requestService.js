var Orphanage = require.main.require('./ws/models/orphanage');

exports.addRequest = function(req, res) {

    Orphanage.findById(req.params.orphanage_id, function(err, orphanage) {
        if (err) {
            res.send(err);
        }

        req.body.created = Date.now();
        if(req.body.fullfilled != null &&
           (req.body.fullfilled.toUpperCase() === 'YES' || req.body.fullfilled === true)) {
            req.body.fullfilled = true;
        } else {
            req.body.fullfilled = false;
        }
        orphanage.requests.push(req.body);

        orphanage.save(function(err, orphanage) {
            if (err) {
                res.send(err);
            }

            res.json(orphanage);
        });
    });
};

exports.findAllRequests = function(req, res) {

    Orphanage.findById(req.params.orphanage_id, function(err, orphanage) {
        if (err) {
            res.send(err);
        }

        res.json(orphanage.requests);
    });
};

exports.findRequestById = function(req, res) {
    Orphanage.findById(req.params.orphanage_id, function(err, orphanage) {
        if (err) {
            res.send(err);
        }
        res.json(orphanage.requests.id(req.params.request_id));
    });
};

exports.updateRequest = function(req, res) {

    Orphanage.findById(req.params.orphanage_id, function(err, orphanage) {
        if (err) {
            res.send(err);
        }

        populateRequest(req.body, orphanage, res, req.params.request_id, saveOrphanage);
    });
};

var saveOrphanage = function(orphanage, res) {
    orphanage.save(function(err, orphanage) {
            if (err) {
                res.send(err);
            }

            res.json(orphanage);
        });
};

var populateRequest = function(body, orphanage, res, requestId, callback) {

    var request = orphanage.requests.id(requestId);

    if(body.date != null) {
        request.date = body.date;
    }
    if(body.description != null) {
         request.description = body.description;
    }
    if(body.requestedQuantity != null) {
         request.requestedQuantity = body.requestedQuantity;
    }
    if(body.fullfilledQuantity != null) {
         request.fullfilledQuantity = body.fullfilledQuantity;
    }
    if(body.fullfilled != null &&
        (body.fullfilled.toUpperCase() === 'YES' || body.fullfilled === true)) {
        request.fullfilled = true;
    } else if(body.fullfilled != null &&
        body.fullfilled.toUpperCase() === 'NO' || body.fullfilled === false) {
        request.fullfilled = false;
    }

    callback(orphanage, res);
};

exports.deleteRequest = function(req, res) {

    Orphanage.findById(req.params.orphanage_id, function(err, orphanage) {
        if (err) {
            res.send(err);
        }

        var request = orphanage.requests.id(req.params.request_id).remove();

        orphanage.save(function(err, orphanage) {
            if (err) {
                res.send(err);
            }

            res.json(orphanage);
        });
    });
};

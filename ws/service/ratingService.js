var Rating = require.main.require('./ws/models/rating');

exports.addRating = function(req, res) {

    var rating = new Rating(req.body);

    rating.save(function(err, rating) {
        if (err) {
            res.send(err);
        }

        res.json(rating);
    });
};

exports.findAllRatings = function(req, res) {

    Rating.find(function(err, ratings) {
        if (err) {
            res.send(err);
        }

        res.json(ratings);
    });
};

exports.findRatingById = function(req, res) {
    Rating.findById(req.params.rating_id, function(err, rating) {
        if (err) {
            res.send(err);
        }

        res.json(rating);
    });
};

exports.updateRating = function(req, res) {

    Rating.findById(req.params.rating_id, function(err, rating) {

        if (err) {
            res.send(err);
        }

        rating.name = req.body.name;
        rating.rate = req.body.rate;

        rating.save(function(err) {
            if (err) {
                res.send(err);
            }

            res.json(rating);
        });
    });
};

exports.deleteRating = function(req, res) {

    Rating.remove({_id: req.params.rating_id}, function(err, rating) {
        if (err) {
            res.send(err);
        }

        res.json('rating deleted');
    });
};

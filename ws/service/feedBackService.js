var Feedback = require.main.require('./ws/models/feedback');

exports.addFeedback = function(req, res) {

    var feedback = new Feedback(req.body);

    feedback.save(function(err, feedback) {
        if (err) {
            res.send(err);
        }

        res.json(feedback);
    });
};

exports.findAllFeedbacks = function(req, res) {

    Feedback.find(function(err, feedbacks) {
        if (err) {
            res.send(err);
        }

        res.json(feedbacks);
    });
};

exports.findFeedbackById = function(req, res) {
    Feedback.findById(req.params.feedback_id, function(err, feedback) {
        if (err) {
            res.send(err);
        }

        res.json(feedback);
    });
};

exports.updateFeedback = function(req, res) {

    Feedback.findById(req.params.feedback_id, function(err, feedback) {

        if (err) {
            res.send(err);
        }

        feedback.feedback = req.body.feedback;
        feedback.rating = req.body.rating;
        feedback.orphanage = req.body.orphanage;

        feedback.save(function(err) {
            if (err) {
                res.send(err);
            }

            res.json(feedback);
        });
    });
};

exports.deleteFeedback = function(req, res) {

    Feedback.remove({_id: req.params.feedback_id}, function(err, feedback) {
        if (err) {
            res.send(err);
        }

        res.json('Feedback deleted');
    });
};

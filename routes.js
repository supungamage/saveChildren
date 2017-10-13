var express    = require('express');

var ratingService = require('./ws/service/ratingService');
var roleFunctionService = require('./ws/service/roleFunctionService');
var roleService     = require('./ws/service/roleService');
var profileService     = require('./ws/service/profileService');
var orphanageService = require('./ws/service/orphanageService');
var donationTypeService = require('./ws/service/donationTypeService');
var requestService = require('./ws/service/requestService');
var feedbackService = require('./ws/service/feedbackService');
var donationService = require('./ws/service/donationService');

var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
    console.log('A request came!');
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.get('/', function(req, res) {
    res.json({ message: 'love them, care them as same as my kid, make better world tommorrow!' });   
});

router.route('/donationtypes').post(donationTypeService.addDonationType)
    .get(donationTypeService.findAllDonationTypes);
router.route('/donationtypes/:donationType_id').get(donationTypeService.findDonationTypeById)
    .put(donationTypeService.updateDonationType)
    .delete(donationTypeService.deleteDonationType);

router.route('/ratings').post(ratingService.addRating)
    .get(ratingService.findAllRatings);
router.route('/ratings/:rating_id').get(ratingService.findRatingById)
    .put(ratingService.updateRating)
    .delete(ratingService.deleteRating);

router.route('/roles').post(roleService.addRole)
    .get(roleService.findAllRoles);
router.route('/roles/:role_id').get(roleService.findRoleById)
    .put(roleService.updateRole)
    .delete(roleService.deleteRole);

router.route('/roles/:role_id/functions').post(roleFunctionService.addRoleFunction)
    .get(roleFunctionService.findAllRoleFunctions);
router.route('/roles/:role_id/functions/:function_id').get(roleFunctionService.findRoleFunctionById)
    .put(roleFunctionService.updateRoleFunction)
    .delete(roleFunctionService.deleteRoleFunction);

router.route('/profiles').post(profileService.addProfile)
    .get(profileService.findAllProfiles);
router.route('/profiles/:profile_id').get(profileService.findProfileById)
    .put(profileService.updateProfile)
    .delete(profileService.deleteProfile); 

router.route('/orphanages').post(orphanageService.addOrphanage)
    .get(orphanageService.findAllOrphanages);
router.route('/orphanages/:orphanage_id').get(orphanageService.findOrphanageById)
    .put(orphanageService.updateOrphanage)
    .delete(orphanageService.deleteOrphanage); 

router.route('/orphanageSearch').get(orphanageService.simpleSearch);
//router.route('/advanceSearch').get(productService.advanceSearch);

router.route('/orphanages/:orphanage_id/requests').post(requestService.addRequest)
    .get(requestService.findAllRequests);
router.route('/orphanages/:orphanage_id/requests/:request_id').get(requestService.findRequestById)
    .put(requestService.updateRequest)
    .delete(requestService.deleteRequest); 

router.route('/donations').post(donationService.addDonation)
    .get(donationService.findAllDonations);
router.route('/donations/:donation_id').get(donationService.findDonationById)
    .put(donationService.updateDonation)
    .delete(donationService.deleteDonation);

router.route('/feedbacks').post(feedbackService.addFeedback)
    .get(feedbackService.findAllFeedbacks);
router.route('/feedbacks/:feedback_id').get(feedbackService.findFeedbackById)
    .put(feedbackService.updateFeedback)
    .delete(feedbackService.deleteFeedback);

module.exports = router;
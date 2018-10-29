const express = require('express');
const router = express.Router();

let firebaseController = require('../controllers/firebaseController');

const runAction =  (action, req, res) => {
	action(req, res)
		.then( (data) => {
			res.status(200).send(data);
			return;
		})
		.catch((err) => {
			res.status(err.status || 400).send(err);
			return;
		});
};

router.get('/', (req, res) => {
	res.json({status: "/firebase is running healthy."});
});

router.get('/token/:uid', (req, res) => runAction(firebaseController.getCustomToken, req, res));

module.exports = router;
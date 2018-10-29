module.exports = function(app) {
	const firebase = require('./firebase');

	app.use('/api/firebase', firebase);
};
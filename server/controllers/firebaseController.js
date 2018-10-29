let admin = require("firebase-admin");

class FirebaseController {

	constructor() {

	}

	static getCustomToken(req) {
		return admin.auth().createCustomToken(req.params.uid).then((res) => {
			console.log("custome token +++++++++++++", res);
			return { token: res };
		}).catch((err) => {
			console.log("getting custom Token error");
			throw err;
		});
	}

}

module.exports = FirebaseController;
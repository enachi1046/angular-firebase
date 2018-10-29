
let express = require('express');
let http = require('http');
let bodyParser = require('body-parser');

const port = process.env.PORT || 8000;

let admin = require("firebase-admin");
let serviceAccount = require("./serviceKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mytest-c9dc1.firebaseio.com"
});

let app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Content-Type, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version, X-File-Name, Authorization');
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
	res.header('Access-Control-Allow-Credentials', true);

	if ('OPTIONS' === req.method) {
	  res.sendStatus(200);
	}
	else {
	  next();
	}
});


require('./router/index')(app);

app.use((req, res, next) => {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use((err, req, res, next) => {
	res.locals.message = err.message;
	res.locals.error = err;

	res.status(err.status || 500);
	res.end();
});


http.createServer(app).listen(port, () => {
	console.log('Runing server on port: ' + port);
});
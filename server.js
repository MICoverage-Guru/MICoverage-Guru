var express = require("express");
const bodyParser = require("body-parser");
var firebase = require("firebase");
var app = express();
var cors = require("cors");
var path = require("path");
const sgMail = require("@sendgrid/mail");
const http = require("http");
var server = http.createServer(app);
const nocache = require("nocache");
app.use(nocache());

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "build")));

sgMail.setApiKey(
	"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"
);

templates = {
	new_user_submission: "d-6e72f614681c4e06988f5bc600839e46"
};

const firebaseConfig = {
	apiKey: "AIzaSyCPKa9uoGSTzKLGjmrEY8IFoWupcEB4jhs",
	authDomain: "micoverage-guru.firebaseapp.com",
	databaseURL: "https://micoverage-guru.firebaseio.com",
	projectId: "micoverage-guru",
	storageBucket: "micoverage-guru.appspot.com",
	messagingSenderId: "102241484290",
	appId: "1:102241484290:web:4bb7517b58402407a0311b",
	measurementId: "G-2Y7M4ZHHQZ"
};

firebase.initializeApp(firebaseConfig);

app.get("/ggwp", function(req, res) {
	console.log("HTTP Get Request");
	res.send("HTTP GET Request");
	//Insert key,value pair to database
	firebase
		.database()
		.ref("/")
		.set({ TestMessage: "GET Request" });
});

app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.post("/submitInsuranceRequest", function(req, res) {
	console.log(req.body);
	console.log(req.body.Q1);
	console.log(JSON.parse(req.body.vehicles_data));
	let isInsured = false;
	var user_data;
	if (req.body.Q1 === "Yes") {
		isInsured = true;
		if (req.body.Q20 === "Yes") {
			user_data = {
				zipCode: req.body.zip_code,
				insuranceType: req.body.insurance_type,
				Q1: req.body.Q1,
				Q2: req.body.Q2,
				Q3: req.body.Q3,
				Q4: req.body.Q4,
				Q5: req.body.Q5,
				Q6: req.body.Q6,
				vehicle_object: JSON.parse(req.body.vehicles_data),
				Q14: req.body.Q14,
				Q15: req.body.Q15,
				Q16: req.body.Q16,
				Q17: req.body.Q17,
				insured: isInsured,
				Q18: req.body.Q18,
				Q19: req.body.Q19,
				Q20: req.body.Q20,
				Q21: req.body.Q21,
				Q22: req.body.Q22,
				Q23: req.body.Q23,
				Q24: req.body.Q24,
				Q25: req.body.Q25,
				Q26: req.body.Q26,
				Q27: req.body.Q27
			};
		} else {
			user_data = {
				zipCode: req.body.zip_code,
				insuranceType: req.body.insurance_type,
				Q1: req.body.Q1,
				Q2: req.body.Q2,
				Q3: req.body.Q3,
				Q4: req.body.Q4,
				Q5: req.body.Q5,
				Q6: req.body.Q6,
				vehicle_object: JSON.parse(req.body.vehicles_data),
				Q14: req.body.Q14,
				Q15: req.body.Q15,
				Q16: req.body.Q16,
				Q17: req.body.Q17,
				insured: isInsured,
				Q18: req.body.Q18,
				Q19: req.body.Q19,
				Q20: req.body.Q20,
				Q25: req.body.Q25,
				Q26: req.body.Q26,
				Q27: req.body.Q27
			};
		}
	} else {
		user_data = {
			zipCode: req.body.zip_code,
			insuranceType: req.body.insurance_type,
			Q1: req.body.Q1,
			Q2: req.body.Q2,
			Q3: req.body.Q3,
			Q4: req.body.Q4,
			Q5: req.body.Q5,
			Q6: req.body.Q6,
			vehicle_object: JSON.parse(req.body.vehicles_data),
			Q14: req.body.Q14,
			Q15: req.body.Q15,
			Q16: req.body.Q16,
			Q17: req.body.Q17,
			insured: isInsured,
			Q25: req.body.Q25,
			Q26: req.body.Q26,
			Q27: req.body.Q27
		};
	}
	var msg = {
		to: "autoleadsdemo@gmail.com",
		from: "autoleadsdemo@gmail.com",
		templateId: templates["new_user_submission"],
		dynamic_template_data: user_data
	};
	console.log(msg);
	const user_database = firebase
		.database()
		.ref("/")
		.child("UserDetails");
	var unique_user_id = req.body.uid;
	user_database.child(unique_user_id).set(user_data);
	sgMail.send(msg, (error, result) => {
		if (error) {
			console.log(error);
			res.json({ success: 0 });
		} else {
			console.log("Email sent!");
			res.json({ success: 1 });
		}
	});
});

app.post("/scheduleAppt", function(req, res) {
	var unique_user_id = req.body.uid;
	console.log(unique_user_id);
	const user_record = firebase
		.database()
		.ref("/")
		.child("UserDetails")
		.child(unique_user_id);
	user_record.update({
		appointmentPref: req.body.timestamp
	});
	res.json({ success: 1 });
});

app.post("/subscribeToUpdates", function(req, res) {
	var user_email = req.body.email;
	const sub_db = firebase
		.database()
		.ref("/")
		.child("EmailSubscriptions");
	sub_db.push({
		email_address: user_email
	});
	res.json({ success: 1 });
});

const port = process.env.PORT || 3000;
server.listen(port);

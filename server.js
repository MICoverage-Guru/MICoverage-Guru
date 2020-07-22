var express = require("express");
const bodyParser = require("body-parser");
var firebase = require("firebase");
var app = express();
var cors = require("cors");
var path = require("path");
var unix_timestamp = require("unix-timestamp");
var serveStatic = require("serve-static");
const sgMail = require("@sendgrid/mail");
const http = require("http");
var server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(
	serveStatic(path.join(__dirname, "client/build"), {
		maxAge: "1d",
		setHeaders: setCustomCacheControl
	})
);

console.log(process.env.NODE_ENV);
function setCustomCacheControl(res, path) {
	if (serveStatic.mime.lookup(path) === "text/html") {
		// Custom Cache-Control for HTML files
		res.setHeader("Cache-Control", "public, max-age=0");
	}
}

sgMail.setApiKey(
	"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"
);

templates = {
	new_user_submission: "d-6e72f614681c4e06988f5bc600839e46",
	contact_form_submission: "d-541c50c38dcd4568b144c9badb5ad5e9",
	referral_form_submission: "d-3a7cca55e1ea43b280ba531ad2036a3b",
	active_customer_survey: "d-b1c856cdd9bd4039aa4413cf163fce59",
	contact_form_survey: "d-400edfec54ca4fafa2a04d17dced5e78"
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

app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

app.post("/api/submitInsuranceRequest", function(req, res) {
	let isInsured = false;
	let isDealership = false;
	var user_data;
	let insuranceType_formatted;
	if (req.body.insurance_type == "auto_home")
		insuranceType_formatted = "Auto and Home Insurance";
	else if (req.body.insurance_type == "auto")
		insuranceType_formatted = "Auto Insurance";

	if (req.body.Q1 === "Yes") {
		isInsured = true;
		if (req.body.Q26 === "Dealership") {
			isDealership = true;
			user_data = {
				zipCode: req.body.zip_code,
				insuranceType: insuranceType_formatted,
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
				Q19: req.body.Q19,
				Q25: req.body.Q25,
				Q26: req.body.Q26,
				Q27: req.body.Q27,
				dealership: isDealership,
				Q28: req.body.Q28
			};
		} else {
			user_data = {
				zipCode: req.body.zip_code,
				insuranceType: insuranceType_formatted,
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
				Q19: req.body.Q19,
				Q25: req.body.Q25,
				Q26: req.body.Q26,
				Q27: req.body.Q27,
				dealership: isDealership
			};
		}
	} else {
		if (req.body.Q26 === "Dealership") {
			isDealership = true;
			user_data = {
				zipCode: req.body.zip_code,
				insuranceType: insuranceType_formatted,
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
				Q27: req.body.Q27,
				dealership: isDealership,
				Q28: req.body.Q28
			};
		} else {
			user_data = {
				zipCode: req.body.zip_code,
				insuranceType: insuranceType_formatted,
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
				Q27: req.body.Q27,
				dealership: isDealership
			};
		}
	}
	var msg = {
		to: "autoleadsdemo@gmail.com",
		from: "admin@micoverageguru.com",
		templateId: templates["new_user_submission"],
		dynamic_template_data: user_data
	};
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
			res.json({ success: 1 });
		}
	});
});

app.post("/api/scheduleAppt", function(req, res) {
	var unique_user_id = req.body.uid;
	const user_record = firebase
		.database()
		.ref("/")
		.child("UserDetails")
		.child(unique_user_id);
	user_record.update({
		appointmentPref: req.body.timestamp
	});
	var user_timestamp;
	if (req.body.timestamp == "now") {
		user_timestamp = unix_timestamp.now();
	} else {
		user_timestamp = unix_timestamp.fromDate(req.body.timestamp);
	}
	const email1_delivery_timestamp = parseInt(
		unix_timestamp.add(user_timestamp, "+2h")
	);
	const email2_delivery_timestamp = parseInt(
		unix_timestamp.add(user_timestamp, "+71h")
	);
	var email1_msg = {
		to: req.body.email,
		from: { email: "admin@micoverageguru.com", name: "MICoverage Guru" },
		templateId: templates["active_customer_survey"],
		send_at: email1_delivery_timestamp
	};
	sgMail.send(email1_msg, (error, result) => {
		if (error) {
			console.log(error);
		}
	});
	var email2_msg = {
		to: req.body.email,
		from: { email: "admin@micoverageguru.com", name: "MICoverage Guru" },
		templateId: templates["active_customer_survey"],
		send_at: email2_delivery_timestamp
	};
	sgMail.send(email2_msg, (error, result) => {
		if (error) {
			console.log(error);
		}
	});
	res.json({ success: 1 });
});

app.post("/api/subscribeToUpdates", function(req, res) {
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

app.post("/api/contactSubmit", function(req, res) {
	const email1_delivery_timestamp = parseInt(
		unix_timestamp.add(unix_timestamp.now(), "+24h")
	);
	const email2_delivery_timestamp = parseInt(
		unix_timestamp.add(unix_timestamp.now(), "+48h")
	);
	var email1_msg = {
		to: req.body.email,
		from: { email: "admin@micoverageguru.com", name: "MICoverage Guru" },
		templateId: templates["contact_form_survey"],
		send_at: email1_delivery_timestamp
	};
	sgMail.send(email1_msg, (error, result) => {
		if (error) {
			console.log(error);
		}
	});
	var email2_msg = {
		to: req.body.email,
		from: { email: "admin@micoverageguru.com", name: "MICoverage Guru" },
		templateId: templates["contact_form_survey"],
		send_at: email2_delivery_timestamp
	};
	sgMail.send(email2_msg, (error, result) => {
		if (error) {
			console.log(error);
		}
	});
	const user_data = {
		name: req.body.name,
		email: req.body.email,
		phone: req.body.phone,
		question: req.body.question
	};
	var msg = {
		to: "admin@micoverageguru.com",
		from: "admin@micoverageguru.com",
		templateId: templates["contact_form_submission"],
		dynamic_template_data: user_data
	};
	const contact_db = firebase
		.database()
		.ref("/")
		.child("ContactFormSubmissions");
	contact_db.push(user_data);
	sgMail.send(msg, (error, result) => {
		if (error) {
			console.log(error);
			res.json({ success: 0 });
		} else {
			res.json({ success: 1 });
		}
	});
});

app.post("/api/referralSubmit", function(req, res) {
	const user_data = {
		name: req.body.name,
		email: req.body.email,
		phone: req.body.phone
	};
	var msg = {
		to: "admin@micoverageguru.com",
		from: "admin@micoverageguru.com",
		templateId: templates["referral_form_submission"],
		dynamic_template_data: user_data
	};
	console.log(msg);
	const referral_db = firebase
		.database()
		.ref("/")
		.child("ReferralFormSubmissions");
	referral_db.push(user_data);
	sgMail.send(msg, (error, result) => {
		if (error) {
			console.log(error);
			res.json({ success: 0 });
		} else {
			res.json({ success: 1 });
		}
	});
});

app.post("/adminAuth", function(req, res) {
	var authkey = req.body.authkey;
	if (authkey == "dangilbert") {
		res.cookie(
			"session_token",
			Math.random()
				.toString(36)
				.substring(2, 15)
		);
		res.redirect("/admin/user_details");
	} else {
		res.redirect("/admin");
	}
});

app.post("/api/getUserRecords", function(req, res) {
	const user_db = firebase
		.database()
		.ref("/")
		.child("UserDetails");
	user_db.on("value", snapshot => {
		if (snapshot.exists()) {
			let objs = Object.values(snapshot.val());
			let toPushArray = [];
			for (var i = 0; i < objs.length; i++) {
				let obj = objs[i];
				let toPushObj = {
					fname: obj.Q4,
					lname: obj.Q5,
					email: obj.Q25,
					phone: obj.Q27,
					apptPref: obj.appointmentPref
						? obj.appointmentPref === "now"
							? obj.appointmentPref.toString()
							: obj.appointmentPref
						: "didn't select"
				};
				toPushArray.push(toPushObj);
			}
			res.send(toPushArray);
		} else {
			res.send();
		}
	});
});

const port = process.env.PORT || 3000;
server.listen(port);

var express = require("express");
const bodyParser = require("body-parser");
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

app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.post("/submitInsuranceRequest", function(req, res) {
	console.log(req.body);
	console.log(req.body.Q1);
	console.log(JSON.parse(req.body.vehicles_data));
	let isInsured = false;
	if (req.body.Q1 === "Yes") {
		isInsured = true;
		var msg = {
			to: "autoleadsdemo@gmail.com",
			from: "autoleadsdemo@gmail.com",
			templateId: templates["new_user_submission"],
			dynamic_template_data: {
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
				Q26: req.body.Q26
			}
		};
	} else {
		var msg = {
			to: "sayamkanwar616@gmail.com",
			from: "autoleadsdemo@gmail.com",
			templateId: templates["new_user_submission"],
			dynamic_template_data: {
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
				Q26: req.body.Q26
			}
		};
	}
	console.log(msg);
	sgMail.send(msg, (error, result) => {
		if (error) {
			console.log(error);
			res.json({ success: 0 });
		} else {
			console.log("Email sent!");
			res.json({ success: 1 });
		}
	});
	// res.redirect("http://localhost/form/1");
});

const port = process.env.PORT || 3000;
server.listen(port);

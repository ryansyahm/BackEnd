const nodemailer = require("nodemailer");
const util = require("util");

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "fikriansyah51@gmail.com",
		pass: "mowyfzjfjrefmpjd",
	},
});

const transportPromise = util.promisify(transporter.sendMail).bind(transporter);

module.exports = { transporter, transportPromise };

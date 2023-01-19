const Email = require('../models/email_model');
const nodemailer = require('../config/nodemailer');



module.exports.AddEmail = async (req, res, next) => {

    // console.log(req.body.email);
    try {
        var record = await Email.create({
            email: req.body.email,
            password: req.body.password
        })
        if (record) {
            return res.json({ status: true, message: " Your Data insert" });
        }
        return res.json({ status: false, message: " Your Data not insert " + err.message });

    }
    catch (err) {
        return res.json({ status: false, message: "something wrong " + err.message });
    }
}

module.exports.sendEmail = async (req, res) => {
    try {
        return new Promise(async () => {
            const email = req.body.email;
            console.log(email);
            const record = await Email.findOne({ email: email });
            console.log(record);
            if (record) {
                res.cookie('email', req.body.email);
                var subject = 'hello'
                var html = "Hello Chennal Well Come to My Guys" +

                    "<h1>Well come</h1>"
                const sendotp = nodemailer.sendOTPEmail(email, subject, html);
                if (sendotp) {
                    return res.json({ status: true, message: 'Email send' });
                }
                return res.json({ status: true, message: "Email not Found" });
            }
            return res.json({ status: true, message: "Email not Found" });
        })
    }
    catch (err) {
        return res.json({ status: true, message: "something wrong" + err.message });
    }
}
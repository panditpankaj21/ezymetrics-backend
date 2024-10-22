const nodemailer = require('nodemailer')

const sendEmail = async (to, subject, text) => {
    let transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_APP_PASSWORD,
        }
    })

    let mailOptions = {
        from: process.env.EMAIL_USER,
        to: to,
        subject: subject,
        text: text,
    }

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}


module.exports = { sendEmail }
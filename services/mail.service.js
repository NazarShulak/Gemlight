const nodemailer = require('nodemailer');
const { constants: { SYSTEM_EMAIL, SYSTEM_EMAIL_PASSWORD, FROM, GMAIL_SERVICE } } = require('../constants');


const transporter = nodemailer.createTransport({
    service: GMAIL_SERVICE,
    auth: {
        user: SYSTEM_EMAIL,
        pass: SYSTEM_EMAIL_PASSWORD
    }
});

const sendMail = async (userMail, confirmationCode) => {
    await transporter.sendMail({
        from: FROM,
        to: userMail,
        subject: 'Authentication',
        html: `<h3>Verificate</h3>
               <p>Please confirm your email by clicking on the following link</p>
               <a href=http://localhost:8000/auth/confirm/${confirmationCode}> Click here</a>`
    })
}

module.exports = {
    sendMail
};

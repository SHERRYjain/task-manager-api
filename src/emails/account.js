const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.USER_KEY,
      pass: process.env.PASS_KEY
    }
});

const sendWelcomeEmail = (email, name) => {
    transporter.sendMail({
        from: 'foo@example.com', // sender address
        to: email, // list of receivers
        subject: "Thanks for joining in", // Subject line
        text: `Welcome to the app, ${name}. Let me know how you get along with it`, // plain text body
        // html: "<b>Hello world?</b>", // html body
    });
}

const sendCancelEmail = (email, name) => {
    transporter.sendMail({
        from: 'abcd@gmail.com',
        to: email,
        subject: "Account removal alert",
        text: `Hey ${name}! Please let us know why did you removed your account.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail,
}

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jpowell6@live.com',
        subject: 'Welcome to the Task Managaer App',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jpowell6@live.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. Hope to see you back soon!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}
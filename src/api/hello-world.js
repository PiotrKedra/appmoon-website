export default function handler(req, res) {

  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: 'pkedra@codenauts.io', // Change to your recipient
    from: 'contact@codenauts.io', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: 'Bobik <strong>and easy to do anywhere, even with Node.js</strong>',
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
      res.status(200).json({ hello: `world` })
    })
    .catch((error) => {
      console.error(error)
      res.status(200).json({ hello: `sth not working` })
    })
}
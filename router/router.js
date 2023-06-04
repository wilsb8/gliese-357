const express = require('express');
const router = express.Router();

// Define a route
router.get('/', (req, res) => {
    const data = {
        message: 'Home'
    };
    res.render('index', {data});
});

router.get('/contact', (req, res) => {
    const data = {
        message: 'Contact'
    };
    res.render('contact', {data});
});

// contact POST route

router.post('/contact', (req, res) => {
    console.log("Posting to /...");
    console.log("Data:", req.body);
  
    // Construct the email content using the form data
    const output = `
      <h2>You have a new contact request</h2>
      <h3>Contact Details</h3>
      <ul>  
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Subject: ${req.body.subject}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `;
  
    console.log(output);
  
    // create reusable transporter object using the default SMTP transport
    let mailTransporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 2525,
      service: 'gmail',
      auth: {
        user: `${process.env.User}`,
        pass: `${process.env.Password}`
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      },
    });
  
    // setup email data with unicode symbols
    let mailOptions = {
      from: '"The Website" <no-reply@williamaferguson.com>',
      to: `${process.env.User}`,
      subject: 'Contact Request', // Subject line
      text: 'You have a message from the website!', // Plain text body
      html: output // HTML body
    };
  
    // send mail with defined transport object
    mailTransporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        const errorMessage = 'There was a problem sending your email!';
        console.log(errorMessage);
        res.status(500).json({ error: errorMessage });
      } else {
        const successMessage = 'Your message has been sent. Thank you!';
        console.log(successMessage);
        console.log(info);
        res.status(200).json({ message: successMessage });
      }
    });
  });

router.get('/about', (req, res) => {
    const data = {
        message: 'About'
    };
    res.render('about', {data});
});

router.get('/services', (req, res) => {
    const data = {
        message: 'Services'
    };
    res.render('services', {data});
});

module.exports = router;
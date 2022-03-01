const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());
app.use(cors());

app.post('/mail', async (req, res) => {
  const to_mail = req.body.email;
  const message = req.body.message;
  console.log(req.body);
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'visioneyewear182@gmail.com',
      pass: 'Asdf@5234',
    },
  });

  const mailOptions = {
    from: 'visioneyewear182@gmail.com',
    to: 'visioneyewear182@gmail.com',
    subject: 'Message from Customer',
    html: `<h1>Hi there,</h1><h4>Here is a message from ${to_mail}</h4><p>${message}</p>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.json({
        msg: error,
      });
    } else {
      res.json({
        msg: info,
      });
    }
  });
});

app.listen(3001, () => {
  console.log('Server is Running');
});

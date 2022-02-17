const express = require('express');

const app = express();
const cors = require('cors');
var nodemailer = require('nodemailer');

app.use(express.json());
app.use(cors());

app.post('/mail', async (req, res) => {
  const to_mail = req.body.email;
  const message = req.body.message;
  console.log(req.body);
  var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'virtivaghjiramni@gmail.com',
      pass: 'Asdf@4234',
    },
  });

  var mailOptions = {
    from: 'virtivaghjiramni@gmail.com',
    to: to_mail,
    subject: 'Message from vision eyewear',
    html: `<h1>Hi there,</h1><p>${message}</p>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.json({
        msg: error,
      });
    } else {
      res.json({
        msg: 'success',
      });
    }
  });
});

app.listen(3001, () => {
  console.log('Server is Running');
});

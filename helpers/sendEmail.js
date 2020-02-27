function sendEmail(addressee, subject, text) {
  let nodemailer = require("nodemailer");

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "gamenightappfa@gmail.com",
      pass: "gamen1te;"
    }
  });

  var mailOptions = {
    from: "gamenightfa@gmail.com",
    to: addressee,
    subject: subject,
    text: text
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

module.exports = sendEmail;

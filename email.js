var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "radhaardha@gmail.com",
    pass: "1234abc;"
  }
});

var mailOptions = {
  from: "radhaardha@gmail.com",
  to: "fadhilahmetra@gmail.com",
  subject: "Sending Email using Node.js",
  text: "Hello Happy World",
  html:`<button type="button">Click Me!</button>`
};

transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

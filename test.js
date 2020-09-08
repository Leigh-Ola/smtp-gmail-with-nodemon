var nodemailer = require("nodemailer");

require("dotenv").config();

// function sendEthereal(name, email, number, service) {
// Uses ethereal email for testing : https://ethereal.email/
//   console.log("sending...");
//   var transport = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false,
//     auth: {
//   user: "", <- email here
//   pass: "" <- password here
// },
//     tls: {
//       rejectUnauthorized: false
//     }
//   });

//   // name = Kiara Ernser
//   // username = kiara.ernser@ethereal.email
//   // pass = a5m4xjKHPUUCFam3mm
//   var mailOptions = {
//   from: "", <- email here
//   to: "", <- recipient email here
//   subject: "Test Nodemailer with Ethereal Gmail",
//   html: `<h1>Yayyy!</h1>`
// };

//   transport.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return console.log(error);
//     }
//     console.log("Email sent: " + info.response);
//   });
// }

function send() {
  console.log("sending...");
  var transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "", // <- email here
      pass: "" // <- password here
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  var mailOptions = {
    from: "", // <- email here
    to: "", // <- recipient email here
    subject: "Test Nodemailer with Gmail",

    html: `<h1>Yayyy!</h1>`
  };

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Email sent: " + info.response);
  });
}

send();

const nodemailer = require("nodemailer");

module.exports = {
     sendEmail: (req, res) => {
          const transporter = nodemailer.createTransport({
               host: 'smtp.ethereal.email',
               port: 587,
               secure: false,
               auth: {
                   user: 'zachary.nikolaus88@ethereal.email',
                   pass: 'C72bRWhSe3rKEhqfME'
               }
          });

          const mailOptions = {
               from: 'Zachary Nikolaus <zachary.nikolaus88@ethereal.email>',
               to: 'danigar1813@gmail.com',
               subject: 'Welcome to Trivia Me.',
               text: 'Get ready to learn and challenge yourself!'
          }

          transporter.sendMail(mailOptions, (err, info) => {
               if (err) return res.status(500).send(err);
               console.log("Email was sent!");
               res.status(200).jsonp(req.body);
          })
     }
};
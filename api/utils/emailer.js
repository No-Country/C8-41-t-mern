import nodemailer from "nodemailer";
import nodemailerSendgrid from "nodemailer-sendgrid";
import sendgridMail from "@sendgrid/mail";

const apiKey =
  "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";

const SengridApiKey = process.env.SENGRID_API;

sendgridMail.setApiKey(SengridApiKey);


// const createTrans = () => {
//   // const transport = nodemailer.createTransport({
//   //   host: "smtp.mailtrap.io",
//   //   port: 2525,
//   //   auth: {
//   //     user: "4ef83b7b725ae5",
//   //     pass: "f5739d35a98dfe",
//   //   },
//   // });

//   const transport = nodemailer.createTransport(
//     nodemailerSendgrid({
//       apiKey: apiKey,
//     })
//   );

//   return transport;
// };

// async function sendMail(user) {
//   const transporter = createTrans();
//   const info = await transporter.sendMail({
//     to: "yohancasaol@gmail.com",
//     from: "yannokaiserfrom@gmail.com",
//     subject: "Sending with SendGrid is Fun",
//     text: "and easy to do anywhere, even with Node.js",
//     html: "<strong>and easy to do anywhere, even with Node.js</strong>",
//   });

//   console.log(info);
//   console.log("Message sent: ", info.messageId);

//   //Usar SendGrid
//   // sendgridMail.setApiKey(apiKey);
//   // const msg = {
//   //   to: 'yohanolmedo@yahoo.es', // Change to your recipient
//   //   from: 'yannokaiserfrom@gmail.com', // Change to your verified sender
//   //   subject: 'Sending with SendGrid is Fun',
//   //   text: 'and easy to do anywhere, even with Node.js',
//   //   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//   // }

//   // sendgridMail.send(msg)
//   // .then((response) => {
//   //   console.log(sendgridMail)
//   //   console.log(response[0].statusCode)
//   //   console.log(response[0].headers)
//   // })
//   // .catch((error) => {
//   //   console.error(error)
//   // })
// }


function getMessage() {
  const body = 'This is a test email using SendGrid from Node.js';
  return {
    to: 'yohancasaol@gmai.com',
    from: 'yohanwebdev@gmail.com',
    subject: 'Test email with Node.js and SendGrid',
    text: body,
    html: `<strong>${body}</strong>`,
  };
}


async function sendEmail() {
  try {
    await sendGridMail.send(getMessage());
    console.log('Test email sent successfully');
  } catch (error) {
    console.error('Error sending test email');
    console.error(error);
    if (error.response) {
      console.error(error.response.body)
    }
  }
}

(async () => {
  console.log('Sending test email');
  await sendEmail();
})();


async function sendRecoveryPasswordMail(user, link) {
  const transporter = createTrans();
  const info = await transporter.sendMail({
    to: user.email,
    from: "yohancasaol@gmail.com",
    subject: "Recuperación de contraseña",
    text: `Buen día, ha solicitado recuperar su contraseña en nuestro sitio web, hacer click en el siguiente enlace: 
    
    ${link}`,
    html: link,
  });

  console.log(info);
  console.log("Actualizar Usuario: ");
}

export { sendEmail, sendRecoveryPasswordMail };
//export default sendMail;

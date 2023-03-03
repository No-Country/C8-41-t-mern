import nodemailer from "nodemailer";

const enviar = (user, template, token) => {
  let templates = [
    {
      id: "bienvenida",
      subject: "Bienvenido a Mortichikian", //rellenar con objeto datos
      text: "Este es un texto de prueba",
      html: `
  <html>
    <head>
      <title>hola</title>
    </head>
    <body>
      <p>Hello ${user.name},</p>
      <p>This is template 1.</p>
    </body>
  </html>
  `,
    },
    {
      id: "psReset",
      subject: "Recuperacion de contraseña",
      text: "Este es un texto de prueba",
      html: `
  <html>
    <head>
      <title>hola</title>
    </head>
    <body>
      <p>Hola ${user.name},</p>
      <a href=${process.env.URL_FRONT}/newpassword/${user.uid}?token=${token} > Haga click en el siguiente Link </a>
    </body>
  </html>
  `,
    },
  ];

  let datos = templates.filter((dato) => dato.id === template);

  if (datos.length == 0) {
    return console.log("No se ha seleccionado ningun template");
  }
  let transport = nodemailer.createTransport({
    host: "smtp.gmail.com", //Servidor del email.
    post: 465,
    secure: false,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  let mailOptions = {
    form: "remitente",
    to: user.email,
    subject: datos[0].subject,
    html: datos[0].html,
  };

  transport.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error.message);
    } else {
      console.log("email enviado");
    }
  });
};

export { enviar };

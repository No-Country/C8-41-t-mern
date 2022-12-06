import sgMail from "@sendgrid/mail";

const URL_FRONT = process.env.URL_FRONT
const SengridApiKey = process.env.SENGRID_API;

sgMail.setApiKey(SengridApiKey);

//Mensaje de bienvenida
function getMessage(user) {
  const body = "Este es un ejemplo de bienvenida";
  return {
    to: `${user.email}`,
    from: "yohanolmedo@hotmail.com",
    subject: "Mensaje de bienvenida",
    text: body,
    html: `<strong>${body}</strong>`,
  };
}

async function sendEmail(userCreate) {
  try {
    await sgMail.send(getMessage(userCreate));
    console.log("Mensaje enviado correctamente");
  } catch (error) {
    console.error("Error al enviar el mensaje");
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
  }
}

//Recuperar contraseña
function getMessagePassword(user, link, token) {
  const body =
    "Buen día, ha solicitado recuperar su contraseña en nuestro sitio web, hacer click en el siguiente enlace:";
  return {
    to: `${user.email}`,
    from: "yohanolmedo@hotmail.com",
    subject: "Recuperación de contraseña",
    text: body,
    html: `<strong>${body}</strong> 
    
    
    <a href=${URL_FRONT}/newpassword/${user.uid}?token=${token} > Haga click en el siguiente Link </a>
    
    `,
  };
}
{/* <a href=${link} > ${link} </a> */}

async function sendRecoveryPasswordMail(userPassword, link, token) {
  try {
    await sgMail.send(getMessagePassword(userPassword, link, token));
    console.log("Mensaje de recuperación enviado correctamente");
  } catch (error) {
    console.error("Error al enviar el mensaje");
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
  }
}

export { sendEmail, sendRecoveryPasswordMail };

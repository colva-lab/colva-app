const accountRecovery = "Recuperación de la cuenta";
const verificationCode = "Obtener un código de verificación";
const codeSent = "Colva enviará un código de verificación al correo de tu cuenta";
const back = "Atrás";
const sendMail = "Enviar correo";
const code = "Código";
const stepValidateEmail = {
  validateEmail: "Validar correo electrónico",
  enterCode: "Ingrese el código enviado a su correo electrónico",
  validateCode: "Validar código"
};
const changePassword = {
  title: "Cambiar contraseña",
  subTitle: "Introduzca su nueva contraseña",
  save: "Guardar"
};
const error = {
  title: "Error",
  subTitle: "No se pudo restaurar la contraseña",
  tryAgain: "Inténtalo de nuevo"
};
const resetUserPassword = {
  accountRecovery,
  verificationCode,
  codeSent,
  back,
  sendMail,
  code,
  stepValidateEmail,
  changePassword,
  error
};
export {
  accountRecovery,
  back,
  changePassword,
  code,
  codeSent,
  resetUserPassword as default,
  error,
  sendMail,
  stepValidateEmail,
  verificationCode
};

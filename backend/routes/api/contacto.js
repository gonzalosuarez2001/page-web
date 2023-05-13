const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post('/api/contacto', async (req, res) => {
  const mail = {
    to: "gonzalosuarez9977@gmail.com",
    subject: "Contacto Web",
    html: `${req.body.name} se contacto a traves de la web y quiere más informacion a este correo: ${req.body.email} <br> Además, hizo el siguiente comentario: ${req.body.coment} <br> Su tel es: ${req.body.tel}`,
  };

  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.STMP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transport.sendMail(mail);

  res.status(201).json({
    error: false,
    message: "Mensaje Enviado",
  });
});

module.exports = router;

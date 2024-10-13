// const express = require('express');
// const nodemailer = require('nodemailer');
// const cors = require('cors');

// const app = express();

// // Middlewares para manejar JSON y formularios
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());

// // Ruta para manejar el envío del formulario
// app.post('/send', async (req, res) => {
//   const { name, email, message } = req.body;

//   // Configura Nodemailer con tu cuenta de Gmail
//   let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'cesarmallungo@gmail.com', // Tu correo de Gmail
//       pass: 'tuContraseña', // Tu contraseña de Gmail o contraseña de aplicaciones
//     },
//   });

//   // Configurar los detalles del correo electrónico
//   let mailOptions = {
//     from: email, // El correo del remitente
//     to: 'tuCorreo@gmail.com', // Tu correo de destino
//     subject: `Mensaje de ${name}`, // Asunto del correo
//     text: message, // Cuerpo del correo
//   };

//   // Enviar el correo
//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).send('Correo enviado exitosamente');
//   } catch (error) {
//     console.log(error);
//     res.status(500).send('Error al enviar el correo');
//   }
// });

// // Inicia el servidor
// app.listen(5000, () => {
//   console.log('Servidor en ejecución en http://localhost:5000');
// });

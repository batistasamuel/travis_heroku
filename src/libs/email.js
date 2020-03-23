const nodemailer = require("nodemailer");

const EMail = {}

// Estou deixando esses dados aqui para facilitar para todo mundo
const EMAIL = 'sentinellog@marti.com.br'
const PASSWORD = 'sentinellog123'
const SMTP = 'mail.marti.com.br'
const PORT = 465

EMail.send = async (email, subject, body) => {
    const transporter = nodemailer.createTransport({
        host: SMTP,
        port: PORT,
        secure: true,
        auth: {
            user: EMAIL,
            pass: PASSWORD,
        }
    });
    
    const info = await transporter.sendMail({
        from: `"Sentinel Log" <${EMAIL}>`,
        to: `${email}`,
        subject: subject,
        html: body,
    });

    return info
}

module.exports = EMail


require('dotenv').config();
import nodemailer from 'nodemailer';

let sendSimpleEmail = async (dataSend) => {

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, //true for 465, false for other ports
        auth: {
            // TODO: replace `user` and `pass` values from <https://forwardemail.net>
            user: process.env.EMAIL_APP,
            pass: process.env.EMAIL_APP_PASSWORD,
        },
    });


    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Hoang Viet 👻" <hoangphamhl000@gmail.com>',
        to: dataSend.reciverEmail,
        subject: "Thông tin đặt lịch khám bệnh",
        html: getBodyHTMLEmail(dataSend),
    });
}

let getBodyHTMLEmail = (dataSend) => {
    let result = ''
    if (dataSend.language === 'vi') {
        result =
            `
            <h3>Xin chào ${dataSend.patientName}</h3>
            <p>Email xác nhận đặt lịch khám bệnh online</p>
            <p>Thông tin lịch khám:</p>
            <div><b>Thời gian: ${dataSend.time}</b></div>
            <div><b>Bác sĩ: ${dataSend.doctorName}</b></div>

            <p>Nếu thông tin trên là đúng sự thật, vui lòng click vào đường link phía dưới.</p>
            <div>
            <a href=${dataSend.redirectLink} target="_blank">>>Click<<</a>
            </div>

            <div>Cảm ơn quý khách đã sử dụng dịch vụ của chúng tôi!!</div>
            ` // html body
    }
    if (dataSend.language === 'en') {
        result =
            `
            <h3>Dear ${dataSend.patientName}</h3>
            <p>Email confirmation of online medical appointment booking</p>
            <p>Schedule information:</p>
            <div><b>Time: ${dataSend.time}</b></div>
            <div><b>Doctor: ${dataSend.doctorName}</b></div>

            <p>If the above information is true, please click on the link below.</p>
            <div>
            <a href=${dataSend.redirectLink} target="_blank">>>Click<<</a>
            </div>

            <div>Thank you for using our service!!</div>
            ` // html body
    }
    return result;
}

module.exports = {
    sendSimpleEmail: sendSimpleEmail,
}
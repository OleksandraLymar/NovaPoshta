const deliveryModel = require("../models/deliveries")
const nodemailer = require("nodemailer")
const fetch = require("node-fetch")

exports.create = function (request, response) {
    // Получили новое обращение на сервере
    let delivery = request.body
    delivery.created_at = Date.now()
    // TODO тут бек проводит свое исследование еще раз. Проверки на длину валидность и тд
    // Создали запись в базе данных
    const newDelivery = new deliveryModel(delivery)


    // Сохранили запись в базе данных
    newDelivery.save( async function (err) {
        if (err) { // Если ошибка - вернуть ошибку
            console.log(err)
            return response.status(422).json(err)
        } else { // Если все хорошо - вернуть что мы сохранили в обращении

            let transporter = nodemailer.createTransport({
                pool: true,
                host: process.env.MAIL_HOST,
                port: process.env.MAIL_PORT,
                secure: true, // use TLS
                auth: {
                    user: process.env.MAIL_USERNAME,
                    pass: process.env.MAIL_PASSWORD,
                },
            });

            // обращение к моему сотруднику
            let toMe = await transporter.sendMail({
                from: process.env.MAIL_FROM_ADDRESS, // sender address
                to: "keeper@ninydev.com", // list of receivers
                subject: "New Contact", // Subject line
                text: JSON.stringify(newDelivery), // plain text body
                html: JSON.stringify(newDelivery), // html body
            });

            // письмо клиенту
            let toUser = await transporter.sendMail({
                from: process.env.MAIL_FROM_ADDRESS, // sender address
                to: newDelivery.email, // list of receivers
                subject: "Спасибо за обращение", // Subject line
                text: JSON.stringify(newDelivery), // plain text body
                html: JSON.stringify(newDelivery), // html body
            });

            // Отправить сообщение в TG
            let api = "https://api.telegram.org/bot" + process.env.TG_API
                + "/sendMessage?chat_id=" + process.env.TG_ID + "&text=";

            // Подготовить сообщение (заменить проблемы на %20 и поставить переносы
            let msg = JSON.stringify(newDelivery) // Сообщение
            msg =  msg.replace(/ /g, '%20').split('\n').join('%0A');
            await fetch(api + msg)
            // Фиксируем номер отправки по данным сервера
            newDelivery.sendToMe = toMe.messageId
            newDelivery.sendToUser = toUser.messageId

            // Сохраняем номера отправки почты на сервере
            newDelivery.save(function (err) {
                if (err) { // Если ошибка - вернуть ошибку
                    console.log(err)
                    return response.status(422).json(err)
                }
                return response.status(201).json(newDelivery)
            })
        }
    });
}
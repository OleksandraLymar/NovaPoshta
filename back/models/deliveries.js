// Подключиение модуля работы с базой
const mongoose = require("mongoose");

// Настройка полей (схемы)
const deliverySchema = new mongoose.Schema({

    name: String,
    email: String,
    phone: String,
    message: String,
    created_at: Date,
    sendToMe: String,
    sendToUser: String
});

module.exports = mongoose.model("deliveries", deliverySchema);
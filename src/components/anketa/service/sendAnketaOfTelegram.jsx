'use server';
import { ConfigServices } from "@/services/config";

export default async function sendAnketaOfTelegram(data, name, phone) {

    const [TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID] = ConfigServices.getENV();
    const contact = `Имя: ${name}\nТелефон: ${phone}\n\n`;

    let question = "";
    data.map((item) => (question += `Вопрос:${item.question}\nОтвет:${item.answer}\n\n`));

    let text = `Новая заявка\n${contact}${question}\n`;

    const response = await fetch("https://api.telegram.org/bot" + TELEGRAM_BOT_TOKEN + "/sendMessage", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST",
            "Access-Control-Allow-Headers":
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text,
        }),
    });
    return response;
}
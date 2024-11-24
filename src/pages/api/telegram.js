import { ConfigServices } from "@/services/config";
import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = JSON.parse(req.body);
    const name = data.name;
    const phone = data.tel;
    const comments = data.comments;
    const response = await tgSender(name, phone, comments);
    if (response.success) {
      return res.status(200).json(response);
    } else {
      return res.status(403).json(response);
    }
  } else {
    return res
      .status(405)
      .json({ success: false, message: "Ошибка в форме заявки." });
  }
}

async function tgSender(name, phone, comments) {
  const [TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID] = ConfigServices.getENV();
  const text = `
    Новая заявка с сайта:\n 
    Имя: ${name} \n
    Телефон: ${phone} \n
    Комментарий: ${comments}
  `;
  const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${text}`;

  try {
    // Send the message via the Telegram Bot API
    const response = await axios.get(telegramUrl);

    if (response.data.ok) {
      return { success: true, message: "Телеграм вернул положительный ответ!" };
    } else {
      return { success: false, message: "В заявке есть ошибочные данные." };
    }
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
    return {
      success: false,
      message: "Что-то пошло не так, попробуйте позднее.",
    };
  }
}

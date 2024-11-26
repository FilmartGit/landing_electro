import { ConfigServices } from "@/services/config";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = JSON.parse(req.body);
    console.log(data);
    // const name = data.name;
    // const phone = data.tel;
    // const comments = data.comments;
    // const response = await tgSender(name, phone, comments);
    // if (response.success) {
    //   return res.status(200).json(response);
    // } else {
    //   return res.status(403).json(response);
    // }
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

  try {
    // Send the message via the Telegram Bot API
    await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${text}`
    )
      .then((res) => {
        return JSON.parse(res);
      })
      .then((data) => {
        return { success: true, message: data };
      })
      .catch((error) => {
        return { success: false, message: error };
      });
  } catch (error) {
      console.error("Error sending message to Telegram:", error);
    return {
      success: false,
      message: "Что-то пошло не так, попробуйте позднее.",
    };
  }
}

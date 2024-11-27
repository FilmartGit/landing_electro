import { ConfigServices } from "@/services/config";

export default async function SenderTelegram(req) {
  const data = req.body;
  const name = req.get("name");
  const phone = req.get("tel");
  const comments = req.get("comments");
  const [TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID] = ConfigServices.getENV();
  const text = `
      Новая заявка с сайта:\n 
      Имя: ${name} \n
      Телефон: ${phone} \n
      Комментарий: ${comments || "без комментария"}
    `;

  await fetch(
    "https://api.telegram.org/bot" + TELEGRAM_BOT_TOKEN + "/sendMessage",
    {
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
    }
  )
    .then((response) => response.json())
    .then((data) => {
      return { ok: true, message: "Форма успешно отправлена!" };
    })
    .catch((error) => {
      return { ok: false, message: "Ошибка в отправке формы, попробуйте позднее", error: error };
    });
}

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
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
      }),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("Message sent successfully:", data);
    })
    .catch((error) => {
      console.error("Error sending message:", error);
    });

  // fetch('https://api.telegram.org/bot' + TELEGRAM_BOT_TOKEN + '/sendMessage', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       chat_id: TELEGRAM_CHAT_ID,
  //       text
  //     })
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log('Message sent successfully:', data);
  //   })
  //   .catch(error => {
  //     console.error('Error sending message:', error);
  //   });

  // const Bot = new TelegramBot(TELEGRAM_BOT_TOKEN);
  // Bot.sendMessage(TELEGRAM_CHAT_ID, text);
  // return res.status(200).json({ok: true, message: "Заявка успешно отправлена"});
}

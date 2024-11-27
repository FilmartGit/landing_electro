import { ConfigServices } from "@/services/config";
//import TelegramBot from 'node-telegram-bot-api';

export default async function SenderTelegram( req ){
    const data =  req.body;     
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

    alert(text);

    // const response = await fetch('', {
    //     method: "post",
    //     body: text,
    // });

    // const Bot = new TelegramBot(TELEGRAM_BOT_TOKEN);
    // Bot.sendMessage(TELEGRAM_CHAT_ID, text);
    // return res.status(200).json({ok: true, message: "Заявка успешно отправлена"});
}
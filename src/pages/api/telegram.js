import { ConfigServices } from '@/services/config';
import axios from 'axios';

export default async function handlerTelegram(req, res) {
  if (req.method === 'POST') {
    const { name, phone, comments } = req.body;
    const [TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID] = ConfigServices.getENV();

    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const text = `
      Новая заявка с сайта:\n 
      Имя: ${name} \n
      Телефон: ${phone} \n
      Комментарий: ${comments}
    `;

    try {
      // Send the message via the Telegram Bot API
      const response = await axios.post(telegramUrl, {
        chat_id: TELEGRAM_CHAT_ID,
        text: text,
      });

      if (response.data.ok) {
        return res.status(200).json({ success: true, message: 'Заявка успешно отправлена!' });
      } else {
        return res.status(500).json({ success: false, message: 'В заявке есть ошибочные данные.' });
      }
    } catch (error) {
      console.error('Error sending message to Telegram:', error);
      return res.status(500).json({ success: false, message: 'Что-то пошло не так, попробуйте позднее.' });
    }
  } else {
    return res.status(405).json({ message: 'Ошибка в форме заявки.' });
  }
}
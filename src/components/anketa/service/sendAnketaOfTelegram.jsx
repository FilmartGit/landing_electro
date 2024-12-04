'use server';

export default async function sendAnketaOfTelegram({data}) {
    const response = await fetch("https://api.telegram.org/bot7234405382:AAHsY0P2-qjc4echcqBUS8eXKxuTzxLp4Sg/sendMessage", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST",
            "Access-Control-Allow-Headers":
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        body: JSON.stringify({
            chat_id: '-1002185777557',
            text: data,
        }),
    });
    return response;
}
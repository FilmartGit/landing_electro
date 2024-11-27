import Loader from "@/components/modal/ui/loader";
import UIbuttonSender from "@/components/ui/button_sender";
import { UIicons } from "@/components/ui/icons";
import { useState } from "react";

export default function FormPageBody({
  setResultState,
  setStateModalNotification,
}) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event) {
    setIsLoading(true);
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const phone = formData.get("tel");
    const comments = formData.get("comments");
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
        setIsLoading(false);
        setResultState((result) => {
          return {
            ...result,
            ok: "true",
            title: "Успешно",
            description:
              "Ваша заявка отправлена и специалисты уже приступили к расчету.",
          };
        });
        setStateModalNotification(true);
      })
      .catch((error) => {
        setIsLoading(false);
        setResultState((result) => {
          return {
            ...result,
            ok: "false",
            title: "Ошибка",
            description: result.message,
          };
        });
        setStateModalNotification(true);
      });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="border-b border-dotted border-[#585858] box-border">
          <div className="pt-10 w-1/2 border-l border-r border-dotted border-[#585858] box-border mx-auto px-6  pb-5">
            <label
              htmlFor="formName"
              className="text-slate-50 text-lg font-normal"
            >
              ваше имя
            </label>
            <input
              id="formName"
              type="text"
              name="name"
              className="bg-[#D9D9D9] rounded-lg border-0 w-full mt-2 mb-5 p-5"
              required
            />
            <label
              htmlFor="formPhone"
              className="text-slate-50 text-lg font-normal"
            >
              номер телефона
            </label>
            <input
              id="formPhone"
              type="tel"
              name="tel"
              className="bg-[#D9D9D9] rounded-lg border-0 w-full mt-2 mb-5 p-5"
              required
            />
            <label
              htmlFor="formComment"
              className="text-slate-50 text-lg font-normal"
            >
              дополнительный комментарий
            </label>
            <input
              id="formComment"
              type="text"
              name="comments"
              className="bg-[#D9D9D9] rounded-lg border-0 w-full mt-2 mb-5 p-5"
            />
            <p className="text-slate-50 text-lg font-normal">прикрепите файл</p>
            <label
              htmlFor="formFile"
              className="bg-[#444444] rounded-lg border flex items-center justify-center w-full mt-2 p-5 border-dashed border-[#585858] cursor-pointer hover:bg-[#525252] transition-colors"
            >
              <UIicons.fileDownloading className="w-5 h-5 text-[#D9D9D9]" />
            </label>
            <input id="formFile" type="file" name="file" className="hidden" />
          </div>
        </div>
        <div className="w-1/2 border-l border-r border-dotted border-[#585858] box-border mx-auto p-6 pb-24">
          <UIbuttonSender
            title={isLoading ? <Loader /> : "ОТПРАВИТЬ"}
            type="submit"
            handleClick={() => {}}
            className="w-full"
          />
        </div>
      </form>
    </>
  );
}

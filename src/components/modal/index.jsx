import { useState } from "react";
import UIbuttonSender from "../ui/button_sender";
import { UIicons } from "../ui/icons";
import FullModal from "../ui/modal-full";
import Loader from "./ui/loader";
import { ConfigServices } from "@/services/config";

export default function Modal({
  stateModal,
  changeModal,
  setResultState,
  setStateModalNotification,
}) {
  const [isLoading, setIsLoading] = useState(false);

  async function action(event) {
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
        changeModal(false);
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
    <FullModal
      title="Получить КП"
      body={
        <form onSubmit={action}>
          <div className="px-6 pb-5">
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
              name="comment"
              className="bg-[#D9D9D9] rounded-lg border-0 w-full mt-2 mb-5 p-5"
            />
            <p className="text-slate-50 text-lg font-normal">прикрепите файл</p>
            <label
              htmlFor="formFile"
              className="bg-[#444444] rounded-lg border flex items-center justify-center w-full mt-2 p-5 border-dashed border-[#585858] cursor-pointer hover:bg-[#525252] transition-colors"
            >
              <UIicons.fileDownloading className="w-5 h-5 text-[#D9D9D9]" />
            </label>

            <input id="formFile" type="file" name="files" className="hidden" />
          </div>

          <div className="border-t border-dashed border-[#6d6d6d] box-border mx-auto p-6">
            <UIbuttonSender
              title={isLoading ? <Loader /> : "ОТПРАВИТЬ"}
              type="submit"
              handleClick={() => {}}
              className="w-full"
            />
          </div>
        </form>
      }
      stateModal={stateModal}
      changeModal={changeModal}
    />
  );
}

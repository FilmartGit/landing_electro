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
  const [fileState, setFileState] = useState({
    ok: false,
    name: ".jpg/png, .pdf, .docx, .xlsx",
  });

  async function action(event) {
    setIsLoading(true);
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const phone = formData.get("tel");
    const comments = formData.get("comments");
    const files = formData.get("file");

// Локальная проверка формы на размер файла
if (files.size > 52000000) {
  setIsLoading(false);
  setResultState((result) => {
    return {
      ...result,
      ok: "false",
      title: "Ошибка в файле",
      description:
        "Размер файла превысил допустимые 50мб. Попробуйте отправить его нам в чат Telegram",
    };
  });
  setStateModalNotification(true);
  return false;
}

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
        // Если отправилось, отправляем следом файл
        if (files.name) {
          const formDto = new FormData();
          formDto.append("chat_id", TELEGRAM_CHAT_ID);
          formDto.append("document", files);
          console.log(formDto);
          axios
            .post(
              "https://api.telegram.org/bot" +
                TELEGRAM_BOT_TOKEN +
                "/sendDocument",
              formDto,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            )
            .then((el) => {
              setIsLoading(false);
              setResultState((result) => {
                return {
                  ...result,
                  ok: "true",
                  title: "Успешно",
                  description:
                    "Ваша заявка отправлена. Мы уже приступили к рассмотрению вашей заявки. Ожидайте звонка нашего специалиста.",
                };
              });
              setStateModalNotification(true);
            });
        } else {
          setIsLoading(false);
          setResultState((result) => {
            return {
              ...result,
              ok: "true",
              title: "Успешно",
              description:
                "Ваша заявка отправлена. Ожидайте звонка нашего специалиста.",
            };
          });
          setStateModalNotification(true);
        }
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

  function handleFile(event) {
    setFileState((oldState) => {
      return {
        ...oldState,
        ok: true,
        name: event.target.computedName,
      };
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
            <p className="text-slate-50 text-lg font-normal">
              прикрепите файл (не более 50 мб.)
              <br />
              {fileState.name}
            </p>
            <label
              htmlFor="formFile"
              className={clsx(
                "rounded-lg border flex items-center justify-center w-full mt-2 p-5 border-dashed border-[#585858] cursor-pointer hover:bg-[#525252] transition-colors",
                fileState.ok ? "bg-green-800" : "bg-[#444444]"
              )}
            >
              {fileState.ok ? (
                <UIicons.ok className="w-7 h-7 text-slate-50" />
              ) : (
                <UIicons.fileDownloading className="w-7 h-7 text-[#D9D9D9]" />
              )}
            </label>

            <input id="formFile" type="file" name="files" className="hidden" onChange={handleFile}/>
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

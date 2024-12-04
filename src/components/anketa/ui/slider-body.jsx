import Loader from "@/components/modal/ui/loader";
import clsx from "clsx";
import { useState } from "react";
import sendAnketaOfTelegram from "../service/sendAnketaOfTelegram";

export default function SliderBody({
  dataAnswer,
  dataQuestion,
  counterSlide,
  changeDataAnswer,
  changeNextSlide,
  setFinish,
  finish,
  resetDataAnswer,
  resetCounter,
  setResultState,
  setStateModalNotification,
}) {
  const [isLoading, setIsLoading] = useState(false);

  // Запись ответа и переход на следующий слайд
  function handleSetDataAnswer(e) {
    let text = e.target.textContent;
    changeDataAnswer({
      question: dataQuestion[counterSlide].question,
      answer: text,
    });
    // если есть следующий вопрос, то переход, иначе показать финальный слайд
    if (counterSlide + 1 === dataQuestion.length) {
      setFinish(true);
    } else {
      changeNextSlide();
    }
  }

    // Функция передачи данных в сервис отправки анкеты
  async function sendAnketaForm(e) {
    e.preventDefault();
    setIsLoading(true);
    const formContact = new FormData(e.target);
    const name = formContact.get("anketa_name");
    const phone = formContact.get("anketa_phone");

    const response = await sendAnketaOfTelegram(dataAnswer, name, phone);
    if (response.ok) {
      setIsLoading(false);

// Вывести благодарственное окно
      setResultState((result) => {
        return {
          ...result,
          ok: "true",
          title: "Успешно",
          description:
            "Ваша заявка отправлена. Мы уже приступили к рассмотрению. Ожидайте звонка нашего специалиста.",
        };
      });
      setStateModalNotification(true);
      setFinish(false);
      resetDataAnswer();
      resetCounter();
    } else {
      setIsLoading(false);
      setResultState((result) => {
        return {
          ...result,
          ok: "false",
          title: "Ошибка отправки",
          description:
            "Что-то пошло не так. Попробуйте написать нам в чат Telegram",
        };
      });
      setStateModalNotification(true);
    }
  }

  return !finish ? (
    <>
      <div className="text-slate-50 text-center text-lg font-bold w-full lg:w-1/2 sm:w-3/4 mx-auto leading-5 mt-5 py-5">
        {dataQuestion[counterSlide].question}
      </div>
      <div className="flex flex-col mt-5 gap-2">
        {dataQuestion[counterSlide].answer.map((answer, index) => (
          <div
            key={index}
            onClick={handleSetDataAnswer}
            className={clsx(
              "flex justify-center p-3 bg-[#3F3F3F] rounded-lg hover:bg-[#D9D9D9] text-slate-50 hover:text-slate-950 transition-all cursor-pointer",
              dataAnswer[counterSlide]?.answer === answer
                ? "bg-[#FFED00] text-slate-950"
                : ""
            )}
          >
            {answer}
          </div>
        ))}
      </div>
    </>
  ) : (
    <>
      <div className="text-slate-50 text-center text-lg font-bold w-full lg:w-1/2 sm:w-3/4 mx-auto leading-5 mt-5 py-5">
        Остался последний шаг:
      </div>
      <div className="flex flex-col mt-5 gap-2">
        <div className="flex flex-col mx-auto justify-center p-3 bg-[#3F3F3F] rounded-lg text-slate-50 transition-all cursor-pointer w-full lg:w-1/2 sm:w-3/4">
          <form onSubmit={sendAnketaForm} className="flex flex-col gap-2">
            <label htmlFor="anketa_name">Как вас зовут?</label>
            <input
              type="text"
              name="anketa_name"
              id="anketa_name"
              className="bg-[#D9D9D9] rounded-lg border-0 w-full text-black p-3"
              required
            />
            <label htmlFor="anketa_phone">Ваш номер телефона</label>
            <input
              type="text"
              name="anketa_phone"
              id="anketa_phone"
              className="bg-[#D9D9D9] rounded-lg border-0 w-full text-black p-3"
              required
            />
            <button
              type="submit"
              className="block rounded-xl mx-auto bg-[#FFED00] text-black py-3 mt-5 px-20 font-semibold hover:shadow-2xl hover:shadow-amber-300 transition-shadow"
            >
              {isLoading ? <Loader /> : "ОТПРАВИТЬ"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

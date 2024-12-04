import clsx from "clsx";
import Image from "next/image";

export default function SliderHeader({
  counterSlide,
  changeNextSlide,
  changePrevSlide,
  dataAnswer,
  dataQuestion,
  setFinish,
  maxCountSlide,
}) {
  // Если на вопрос зарегистрирован ответ, то листать дальше можно, иначе нельзя.
  function handleNextSlide() {
    if (counterSlide + 2 > dataAnswer.length) {
      if (dataQuestion.length === dataAnswer.length) {
        setFinish(true);
      } else return false;
    } else {
      changeNextSlide();
    }
  }

  function handlePrevSlide() {
    setFinish(false);
    changePrevSlide();
  }

  return (
    <div className="flex justify-center bg-[#1A1A1A] rounded-lg px-5 py-5">
      <div className="lg:w-1/4 sm:w-[12.5%] w-[12%] flex items-center">
        <div className="mr-auto flex gap-5 items-center">
          <button
            onClick={handlePrevSlide}
            className="bg-[#D9D9D9] rounded-lg flex justify-center items-center py-2 lg:px-10 px-1 sm:px-2 h-fit"
          >
            <Image src={"back.svg"} alt="" width="20" height="20" />
          </button>
          <p className="text-slate-50">
            {counterSlide + 1} из {maxCountSlide}
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 sm:w-3/4 w-2/3">
        <p className="text-slate-50 text-center font-base leading-5 ">
          Ответьте на несколько вопросов и мы подберем вам индивидуальное
          предложение
        </p>
      </div>
      <div className="lg:w-1/4 sm:w-[12.5%] w-[12%] flex items-center">
        <button
          onClick={handleNextSlide}
          className={clsx(
            "rounded-lg flex justify-center items-center py-2 lg:px-10 px-1 sm:px-2 h-fit ml-auto",
            counterSlide + 1 > dataAnswer.length
              ? "bg-gray-500"
              : "bg-[#D9D9D9]"
          )}
        >
          <Image src={"next_rules.svg"} alt="" width="20" height="20" />
        </button>
      </div>
    </div>
  );
}

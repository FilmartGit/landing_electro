import { useState } from "react";
import { dataQuestion } from "../model/dataQuestion";
import useStateRules from "../model/useStateRules";
import SliderBody from "./slider-body";
import SliderHeader from "./slider-header";
import useDataAnswer from "../model/useDataAnswer";

export default function Slider({ setResultState, setStateModalNotification }) {
  const [dataAnswer, changeDataAnswer, resetDataAnswer] = useDataAnswer();
  const [finish, setFinish] = useState(false);
  const [counterSlide, changeNextSlide, changePrevSlide, resetCounter] = useStateRules(
    dataQuestion.length
  );

  return (
    <div className="lg:h-fit md:min-h-96">
      
      <SliderHeader
        counterSlide={counterSlide}
        maxCountSlide={dataQuestion.length}
        changeNextSlide={changeNextSlide}
        changePrevSlide={changePrevSlide}
        dataAnswer={dataAnswer}
        dataQuestion={dataQuestion}
      />

      <SliderBody
        counterSlide={counterSlide}
        changeNextSlide={changeNextSlide}
        dataAnswer={dataAnswer}
        changeDataAnswer={changeDataAnswer}
        dataQuestion={dataQuestion}
        finish={finish}
        setFinish={setFinish}
        setResultState={setResultState}
        setStateModalNotification={setStateModalNotification}
        resetDataAnswer={resetDataAnswer}
        resetCounter={resetCounter}
      />

    </div>
  );
}

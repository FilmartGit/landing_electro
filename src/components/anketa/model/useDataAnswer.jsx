import { useState } from "react";

export default function useDataAnswer() {
  const [dataAnswer, setDataAnswer] = useState([]);
  const changeDataAnswer = (newDataAnswer) =>
    setDataAnswer((oldDataAnswer) => {
      oldDataAnswer = oldDataAnswer.filter(
        (item) => item.question !== newDataAnswer.question
      );
      return [...oldDataAnswer, { ...newDataAnswer }];
    });
  const resetDataAnswer = () => setDataAnswer([]);

  return [dataAnswer, changeDataAnswer, resetDataAnswer];
}

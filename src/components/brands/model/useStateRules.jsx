import { useState } from "react";

export default function useStateRules(maxSlide) {
  const [stateSlide, setStateSlide] = useState(0);

  function changeNextSlide() {
    setStateSlide((oldIndex) => {
      if (oldIndex + 3 > maxSlide) {
        return oldIndex;
      } else {
        return oldIndex + 1;
      }
    });
  }

  function changePrevSlide() {
    setStateSlide((oldIndex) => {
      if (oldIndex - 1 < 0) {
        return oldIndex;
      } else {
        return oldIndex - 1;
      }
    });
  }

  return [
    stateSlide,
    changeNextSlide,
    changePrevSlide
  ]
}

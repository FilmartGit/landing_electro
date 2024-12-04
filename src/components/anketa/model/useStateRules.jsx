import { useState } from 'react';

export default function useStateRules(maxCountSlide) {
  const [counterSlide, setCounterSlide] = useState(0);

  function changeNextSlide() {
    if ((counterSlide + 1) < (maxCountSlide)) {
      setCounterSlide((oldIndex) => oldIndex + 1);
    } else {
      setCounterSlide((oldIndex) => oldIndex);
    }
  }

  function changePrevSlide() {
    if (counterSlide === 0) {
      setCounterSlide((oldIndex) => oldIndex);
    } else {
      setCounterSlide((oldIndex) => oldIndex - 1);
    }
  }

  const resetCounter = () => setCounterSlide(0);

  return [counterSlide, changeNextSlide, changePrevSlide, resetCounter];
}
import ContainerLayout from "../ui/container";
import HeaderAnketa from "./ui/header";
import Slider from "./ui/slider";

export default function Anketa({ setResultState, setStateModalNotification }) {
  return (
    <ContainerLayout>
      <HeaderAnketa />
      <Slider
        setResultState={setResultState}
        setStateModalNotification={setStateModalNotification}
      />
    </ContainerLayout>
  );
}

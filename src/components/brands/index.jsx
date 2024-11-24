import { ServiceBrand } from "@/pages/api/brands";
import HeaderBrand from "./ui/header";
import useStateRules from "./model/useStateRules";
import ContainerLayout from "../ui/container";
import SliderBrands from "./ui/slider";

export default function Brands() {
  const data = ServiceBrand.GetAll();
  const [stateSlide, changeNextSlide, changePrevSlide] = useStateRules(
    data.length
  );

  return (
    <ContainerLayout>
      <HeaderBrand next={changeNextSlide} prev={changePrevSlide} />
      <SliderBrands data={data} stateSlide={stateSlide} />
    </ContainerLayout>
  );
}

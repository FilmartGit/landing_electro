import { useState } from 'react';
import ContainerLayout from "../ui/container";
import ButtonBox from "./ui/buttonModal";
import Subtitle from "./ui/subtitle";
import TitleH1 from "./ui/titile";
import SubButton from './ui/subButton';

export default function FirstView({changeModal}) {
   return (
    <ContainerLayout className="border-l border-r border-dotted border-[#585858] ">
      <TitleH1 />
      <Subtitle className="border-t border-b border-dotted border-[#585858]" />
      <ButtonBox changeModal={changeModal}/>
      <SubButton />
    </ContainerLayout>
  );
}

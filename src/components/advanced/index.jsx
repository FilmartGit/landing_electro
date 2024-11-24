import ContainerLayout from "../ui/container";
import AdvancedBody from './ui/body';
import AdvancedHeader from "./ui/header";

export default function Advanced() {
  return (
    <ContainerLayout>
      <AdvancedHeader />
      <AdvancedBody />
    </ContainerLayout>
  );
}

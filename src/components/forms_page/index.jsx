import ContainerLayout from "../ui/container";
import FormPageBody from "./ui/form-page-body";
import HeaderFormPage from "./ui/header";

export default function FormPage({
  setResultState,
  setStateModalNotification,
}) {
  return (
    <ContainerLayout>
      <HeaderFormPage />
      <FormPageBody
        setResultState={setResultState}
        setStateModalNotification={setStateModalNotification}
      />
    </ContainerLayout>
  );
}

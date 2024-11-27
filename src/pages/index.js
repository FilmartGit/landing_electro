import Advanced from "@/components/advanced";
import Brands from "@/components/brands";
import Cataloge from "@/components/cataloge";
import FirstView from "@/components/firstview";
import FormPage from "@/components/forms_page";
import HeaderMenu from "@/components/header";
import PageLayout from "@/components/layout/page";
import Modal from "@/components/modal";
import ModalNotification from "@/components/ui/modal-notification";
import { useState } from "react";

export default function Home() {
  const [stateModal, changeState] = useState(false);
  const [stateModalNotification, setStateModalNotification] = useState(false);
  const [resultState, setResultState] = useState({
    title: "Уведомление",
    description: "Системное уведомление VDS.",
    ok: false,
  });

  return (
    <PageLayout>
      <HeaderMenu />
      <FirstView changeModal={changeState} />
      <Cataloge changeModal={changeState} />
      <Brands />
      <Advanced />
      <FormPage
        setResultState={setResultState}
        setStateModalNotification={setStateModalNotification}
      />
      <HeaderMenu />
      <Modal
        stateModal={stateModal}
        changeModal={changeState}
        setResultState={setResultState}
        setStateModalNotification={setStateModalNotification}
      />
      <ModalNotification
        stateModal={stateModalNotification}
        changeModal={setStateModalNotification}
        result={resultState}
      />
    </PageLayout>
  );
}
// Осталось потом модалочки подключить

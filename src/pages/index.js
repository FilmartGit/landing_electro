import Advanced from '@/components/advanced';
import Brands from '@/components/brands';
import Cataloge from '@/components/cataloge';
import FirstView from '@/components/firstview';
import FormPage from '@/components/forms_page';
import HeaderMenu from '@/components/header';
import PageLayout from '@/components/layout/page';
import { useState } from 'react';

export default function Home() {
  const [stateModal, changeState] = useState(false);

  return (
    <PageLayout>
      <HeaderMenu />
      <FirstView changeModal={changeState}/>
      <Cataloge changeModal={changeState}/>
      <Brands />
      <Advanced />
      <FormPage />
      <HeaderMenu />
    </PageLayout>   
  );
}
// Осталось потом модалочки подключить 
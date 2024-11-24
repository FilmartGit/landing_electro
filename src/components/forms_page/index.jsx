import ContainerLayout from '../ui/container';
import FormPageBody from './ui/form-page-body';
import HeaderFormPage from './ui/header';

export default function FormPage(){
    return <ContainerLayout>
        <HeaderFormPage />
        <FormPageBody />
    </ContainerLayout>
}
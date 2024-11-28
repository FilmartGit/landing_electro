import { ServiceCategory } from '@/pages/api/category';
import GroupCataloge from './ui/groupCataloge';
import Headercataloge from './ui/header';

export default function Cataloge({changeModal}){

    const data = ServiceCategory.GetAll();

    return (
        <div className='lg:w-[900px] md:w-full mx-auto'>
            <Headercataloge changeModal={changeModal}/>
            <GroupCataloge data={data}/>
        </div>
    )
}
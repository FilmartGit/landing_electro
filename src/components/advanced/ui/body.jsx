import Image from 'next/image';
import { useEffect } from 'react';

export default function AdvancedBody(){
    let width = 0;
    useEffect(()=>{
        width = window.innerWidth;
    }, []);
    
    return (
        <>
            <div className='flex gap-5 flex-col-reverse lg:flex-row'>
                <div className='flex flex-col gap-3 lg:w-1/2 sm:w-full justify-between lg:px-0 sm:px-2 px-2'>
                    <div className='w-full bg-[#444444] rounded-lg p-5 h-full'>
                        <h3 className='text-slate-50 text-xl font-normal'>
                            Сервис
                        </h3>
                        <p className='text-slate-300 leading-5 font-light'>
                            Самостоятельно организуем доставку до объекта или на ваш склад. Гибкая система оплаты.
                        </p>
                    </div>
                    <div className='w-full bg-[#444444] rounded-lg p-5 h-full'>
                        <h3 className='text-slate-50 text-xl font-normal'>
                            Удобный формат работы
                        </h3>
                        <p className='text-slate-300 leading-5 font-light'>
                            Быстрая онлайн заявка по вашему проекту или ТЗ, мы сделаем расчеты и подготовим комплектацию.
                        </p>
                    </div>
                    <div className='w-full bg-[#444444] rounded-lg p-5 h-full'>
                        <h3 className='text-slate-50 text-xl font-normal'>
                            Техническая консультация
                        </h3>
                        <p className='text-slate-300 leading-5 font-light'>
                            Наши специалисты подберут оптимальное решения под ваш бюджет.
                        </p>
                    </div>
                </div>
                <div className='relative lg:w-1/2 sm:w-full sm:px-0 px-2'>
                    <div className='absolute bottom-5 left-5 bg-[#383838] p-3 text-slate-50 text-sm leading-4 font-light w-56 rounded-md'>
                    Проверенные временем решения даже для высоко нагруженных объектов.
                    </div>
                    <Image src={'/male.png'} alt="" width={width < 900 ? "700" : "441" } height="361" className='lg:mx-0 sm:mx-auto'/>
                </div>
            </div>
        </>
    )
}
import Image from 'next/image';

export default function AdvancedBody(){
    return (
        <>
            <div className='flex gap-5'>
                <div className='flex flex-col gap-3 w-1/2 justify-between'>
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
                <div className='relative w-1/2'>
                    <div className='absolute bottom-5 left-5 bg-[#383838] p-3 text-slate-50 text-sm leading-4 font-light w-56 rounded-md'>
                    Проверенные временем решения даже для высоко нагруженных объектов.
                    </div>
                    <Image src={'/male.png'} alt="" width="441" height="361"/>
                </div>
            </div>
        </>
    )
}
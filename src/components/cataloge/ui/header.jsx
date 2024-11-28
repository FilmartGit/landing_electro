import Image from 'next/image';

export default function Headercataloge({changeModal}){
    return <div className='flex lg:justify-end border-b border-dotted border-[#585858] box-border sm:justify-center'>
        <div className='w-full lg:w-1/2 sm:w-3/4 border-l border-r border-dotted border-[#585858] box-border pt-20'>
            <h2 className='text-slate-50 text-2xl sm:text-[40px] text-center sm:leading-10 leading-6 font-bold  pb-10'>Востребованные категории товаров</h2>
        </div>
        <div className='lg:w-1/4 relative hidden lg:block'>
            <button onClick={()=>changeModal((oldState) => !oldState)} className='absolute bottom-14 bg-[#FFED00] text-black rounded-lg flex py-2 lg:px-6 lg:gap-2 items-center lg:ml-3 '>
                Открыть все 
                <Image src={'arrow_right.svg'} alt="" width="18" height="18"/>
            </button>
        </div>
    </div>
}
import Image from 'next/image';

export default function Headercataloge({changeModal}){
    return <div className='flex justify-end border-b border-dotted border-[#585858] box-border'>
        <div className='w-1/2 border-l border-r border-dotted border-[#585858] box-border pt-20'>
            <h2 className='text-slate-50 text-[40px] text-center leading-10 font-bold  pb-10'>Востребованные категории товаров</h2>
        </div>
        <div className='w-1/4 relative'>
            <button onClick={()=>changeModal((oldState) => !oldState)} className=' absolute bottom-14 bg-[#FFED00] text-black rounded-lg flex py-2 px-6 gap-2 items-center ml-3'>
                Открыть все 
                <Image src={'arrow_right.svg'} alt="" width="18" height="18"/>
            </button>
        </div>
    </div>
}
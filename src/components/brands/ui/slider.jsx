import Image from 'next/image';

export default function SliderBrands({data, stateSlide}){
    return <div className='grid grid-cols-4 py-14 gap-5'>
        <Image key={data[stateSlide].id} src={data[stateSlide].img} alt="" width="198" height="51" className='hover:text-[#129F6F]'/>
        <Image key={data[stateSlide+1].id} src={data[stateSlide+1].img} alt="" width="198" height="51" className='hover:text-[#129F6F]'/>
        <Image key={data[stateSlide+2].id} src={data[stateSlide+2].img} alt="" width="198" height="51" className='hover:text-[#129F6F]'/>
        <Image key={data[stateSlide+3].id} src={data[stateSlide+3].img} alt="" width="198" height="51" className='hover:text-[#129F6F]'/>
    </div>
}
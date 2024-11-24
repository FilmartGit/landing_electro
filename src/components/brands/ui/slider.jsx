import Image from 'next/image';

export default function SliderBrands({data, stateSlide}){
    return <div className='grid grid-cols-4 py-14 gap-5'>
        {data.slice(stateSlide, stateSlide + 4).map( logo => {
            return  <Image key={logo.id} src={logo.img} alt="" width="198" height="51" className='hover:text-[#129F6F]'/>
        })}
    </div>
}
import Image from "next/image";

export default function HeaderBrand({ next, prev }) {
  return (
    <div className="mt-10 flex border-b border-dotted border-[#585858] box-border">
      <div className="w-1/4 flex items-center">
        <button onClick={prev} className='bg-[#D9D9D9] rounded-lg flex justify-center items-center py-2 px-10 ml-auto h-fit mr-5'>
          <Image src={"back.svg"} alt="" width="20" height="20" />
        </button>
      </div>
      <div className="w-1/2 border-l border-r border-dotted border-[#585858] box-border">
        <h2 className="text-slate-50 text-[40px] text-center leading-10 font-bold pt-20 px-5 pb-10">
          Популярные бренды
        </h2>
      </div>
      <divs className="w-1/4 flex items-center">
        <button onClick={next} className='bg-[#D9D9D9] rounded-lg flex justify-center items-center py-2 px-10 h-fit ml-5'>
          <Image src={"next_rules.svg"} alt="" width="20" height="20" />
        </button>
      </divs>
    </div>
  );
}

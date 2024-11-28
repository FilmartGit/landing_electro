import Image from "next/image";

export default function HeaderBrand({ next, prev }) {
  return (
    <div className="mt-10 flex border-b border-dotted border-[#585858] box-border justify-center">
      <div className="lg:w-1/4 sm:w-[12.5%] w-[12%] flex items-center">
        <button onClick={prev} className='bg-[#D9D9D9] rounded-lg flex justify-center items-center py-2 lg:px-10 px-1 sm:px-2 ml-auto h-fit mr-5'>
          <Image src={"back.svg"} alt="" width="20" height="20" />
        </button>
      </div>
      <div className="lg:w-1/2 sm:w-3/4 w-2/3 border-l border-r border-dotted border-[#585858] box-border">
        <h2 className="text-slate-50 sm:text-[40px] text-2xl text-center sm:leading-10 leading-6 font-bold  pt-20 px-5 pb-10">
          Популярные бренды
        </h2>
      </div>
      <div className="lg:w-1/4 sm:w-[12.5%] w-[12%] flex items-center">
        <button onClick={next} className='bg-[#D9D9D9] rounded-lg flex justify-center items-center py-2 lg:px-10 px-1 sm:px-2 h-fit ml-5'>
          <Image src={"next_rules.svg"} alt="" width="20" height="20" />
        </button>
      </div>
    </div>
  );
}

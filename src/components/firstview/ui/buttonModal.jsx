export default function ButtonBox({ changeState }) {
  return (
    <div className="border-l border-r border-dotted border-[#585858] w-1/2 mx-auto py-8 relative">
      <button
        onClick={() => changeState((oldState) => !oldState)}
        className="block rounded-xl mx-auto bg-[#FFED00] text-black py-5 px-20 font-semibold"
      >
        ЗАПРОСИТЬ КП
      </button>
    </div>
  );
}

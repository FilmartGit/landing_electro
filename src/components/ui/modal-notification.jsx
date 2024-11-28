import { UIicons } from "./icons";

export default function ModalNotification({
  stateModal,
  changeModal,
  result
}) {
  return stateModal ? (
    <div className="fixed top-6 w-full z-[60]">
      <div className="flex sm:w-full w-3/4 mx-auto items-center justify-center box-border ">
        <div className="text-slate-50 bg-[#585858] flex gap-5 w-fit items-center pr-5 shadow-lg shadow-zinc-900">
          <div className='pl-5'>
            { result.ok ? <UIicons.ok className="text-green-500 w-10 h-10"/> : <UIicons.error className="text-rose-500 w-10 h-10"/>}
          </div>
          <div className='p-5 border-r border-dashed border-[#747474]'>
            <h2 className='font-bold text-xl pb-3 w-full'>{result.title}</h2>
            <p>{result.description}</p>
          </div>
          <button
            onClick={() => changeModal((oldstate) => !oldstate)}
            className="ml-auto w-10 h-10"
          >
            <UIicons.closeModal className="w-10 h-10"/>
          </button>
        </div>
      </div>
    </div>
  ) : undefined;
}

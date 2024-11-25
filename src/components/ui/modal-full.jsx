import { UIicons } from './icons';

export default function FullModal({ title, body, stateModal, changeModal }) {
  return stateModal ? (
    <div className="fixed w-full h-full bg-neutral-800/55 left-0 top-0 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="w-1/3 bg-[#585858]">
        <div className="flex border-b border-dashed border-[#6d6d6d] box-border">
          <h3 className="text-slate-50 p-6">{title}</h3>
          <button onClick={()=>changeModal(oldState=>!oldState)} className='ml-auto mr-5'>
            <UIicons.closeModal className="text-[#d4d4d4]  w-8 h-8"/>
          </button>
        </div>
        {body}
      </div>
    </div>
  ) : undefined;
}
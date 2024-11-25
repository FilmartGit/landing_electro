import { UIicons } from '@/components/ui/icons';
import Image from "next/image";

export default function ModalQR({ type }) {
  return (
    <div className="absolute z-10 w-44 h-fit bg-[#1A1A1A] left-0 rounded-md shadow-2xl p-4 flex flex-col gap-2 top-20">
      <div className='flex gap-2 items-center border-b border-dashed border-[#585858]'>
        <UIicons.qrCamera className='text-slate-50'/>
        <p className='text-slate-50'>QR на {type}</p>
      </div>
      <Image
        src={
          type === "whatsapp"
            ? "qr-wp.svg"
            : type === "telegram"
            ? "qr-tg.svg"
            : undefined
        }
        width="150"
        height="150"
      />
    </div>
  );
}

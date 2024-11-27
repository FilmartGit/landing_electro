import { UIicons } from "@/components/ui/icons";

export default function Loader() {
  return (
    <div className='w-full flex items-center justify-center'>
      <UIicons.loader className="animate-spin" />
    </div>
  );
}

import { UIicons } from "@/components/ui/icons";


/**
 * Loader - spinner for loading states
 * 
 * @returns {React.ReactElement} A centered spinner
 */

export default function Loader() {
  return (
    <div className='w-full flex items-center justify-center'>
      <UIicons.loader className="animate-spin" />
    </div>
  );
}

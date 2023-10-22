import { Note, PencilSimple } from '@phosphor-icons/react';
import ModuleAccordion from '../../../components/ModuleAccordion/ModuleAccordion';
import SearchInput from '../../../components/SearchInput';

function Outline() {
  return (
    <div className="mt-5 rounded-[10px] border-[1.5px] py-[16px] px-[28px] overflow-auto h-full">
      <SearchInput placeholder="Find module or lesson" />
      <div className="my-8">
        <p className="text-sky-950 text-[20px] font-semibold text-start">
          4 Modules
        </p>
      </div>
      <ModuleAccordion title="Blank module">
        <div className="flex justify-between flex-1 mr-2">
          <div className="flex items-end gap-2">
            <Note size={30} className="text-slate-400" />
            <p className="font-light">Blank Module</p>
          </div>
          <div className="flex items-center gap-2">
            <button>
              <PencilSimple size={20} weight="bold" />
            </button>
          </div>
        </div>
      </ModuleAccordion>
    </div>
  );
}

export default Outline;

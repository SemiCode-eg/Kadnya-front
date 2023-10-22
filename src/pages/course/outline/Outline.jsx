import { FolderDashed, FolderSimple } from '@phosphor-icons/react';
import ModuleAccordion from '../../../components/ModuleAccordion/ModuleAccordion';
import SearchInput from '../../../components/SearchInput';
import ModuleLesson from '../../../components/ModuleAccordion/ModuleLesson';

function Outline() {
  return (
    <div className="mt-5 rounded-[10px] border-[1.5px] py-[16px] px-[28px] overflow-auto h-full">
      <SearchInput placeholder="Find module or lesson" />
      <div className="my-8">
        <p className="text-sky-950 text-[20px] font-semibold text-start">
          4 Modules
        </p>
      </div>
      <ModuleAccordion title="Blank module" Icon={FolderSimple}>
        <ModuleLesson text="Lesson" />
        <ModuleAccordion
          title="Blank module"
          Icon={FolderDashed}
          SummaryStyles={{
            backgroundColor: '#F9FAFB',
            padding: '0px',
          }}
          paperStyles={{
            boxShadow: '0px 0px 0px',
            marginTop: '5px',
            '::before': {
              color: '#000',
            },
          }}
        >
          <ModuleLesson text="Lesson" />
        </ModuleAccordion>
      </ModuleAccordion>
    </div>
  );
}

export default Outline;

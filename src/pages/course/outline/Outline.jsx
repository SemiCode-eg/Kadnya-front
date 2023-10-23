import { FolderDashed, FolderSimple } from '@phosphor-icons/react';
import ModuleAccordion from '../../../components/ModuleAccordion/ModuleAccordion';
import SearchInput from '../../../components/SearchInput';
import ModuleLesson from '../../../components/ModuleAccordion/ModuleLesson';
import useCourse from '../../../hooks/use-course';

function Outline() {
  const { courseData, errorMsg, loading } = useCourse();
  console.log(courseData, errorMsg, loading);

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
          summaryClasses="!p-0 !bg-[#F9FAFB]"
          paperClasses="!shadow-none before:!opacity-0"
          iconclasses="text-slate-400"
        >
          <ModuleLesson text="Lesson" />
        </ModuleAccordion>
        <ModuleLesson text="Lesson" />
      </ModuleAccordion>
    </div>
  );
}

export default Outline;

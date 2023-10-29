import { useParams } from 'react-router-dom';
import { FolderDashed, FolderSimple } from '@phosphor-icons/react';
import ModuleAccordion from '../../../components/moduleAccordion/ModuleAccordion';
import SearchInput from '../../../components/SearchInput';
import ModuleLesson from '../../../components/moduleAccordion/ModuleLesson';
import useCourse from '../../../hooks/use-course';
import OutlineHeader from '../../../components/outlineHeader/OutlineHeader';
import Container from '../Container';
import HandleErrorLoad from '../../../components/handleErrorLoad';

function Outline() {
  const { id } = useParams();
  const { courseData, errorMsg, loading } = useCourse(id);

  return (
    <>
      <OutlineHeader courseData={courseData} />
      <HandleErrorLoad loading={loading} errorMsg={errorMsg}>
        <Container>
          <SearchInput placeholder="Find module or lesson" />
          <div className="my-8">
            <p className="text-sky-950 text-[20px] font-semibold text-start">
              {courseData?.modules?.length ? courseData.modules?.length : 0}{' '}
              Modules
            </p>
          </div>
          {courseData?.modules?.map((module) => (
            <ModuleAccordion
              title={module.title}
              description={module.description}
              image={module.image}
              key={module.id}
              Icon={FolderSimple}
              moduleID={module.id}
              modules={[module]}
              paperClasses="!my-1 !shadow !rounded-lg before:!opacity-0 after:!opacity-0"
            >
              {module.lessons?.length > 0 ? (
                module.lessons?.map((lesson, i) => (
                  <ModuleLesson
                    text={lesson.title}
                    key={lesson.id}
                    addBorder={i !== 0}
                    lessonID={lesson.id}
                  />
                ))
              ) : (
                <p>There is no lessons in this module!</p>
              )}
              {module.submodules?.map((submodule) => (
                <ModuleAccordion
                  key={submodule.id}
                  title={submodule.title}
                  description={submodule.description}
                  image={submodule.image}
                  Icon={FolderDashed}
                  summaryClasses="!p-0 !bg-[#F9FAFB]"
                  paperClasses="!shadow-none"
                  iconclasses="text-slate-400"
                  moduleID={submodule.id}
                  modules={[module]}
                  submodule={[submodule]}
                  isSubmodule={true}
                  parentModuleID={module?.id}
                >
                  {submodule.lessons?.length > 0 ? (
                    submodule.lessons?.map((lesson, i) => (
                      <ModuleLesson
                        text={lesson.title}
                        key={lesson.id}
                        addBorder={i !== 0}
                        lessonID={lesson.id}
                      />
                    ))
                  ) : (
                    <p>There is no lessons in this submodule!</p>
                  )}
                </ModuleAccordion>
              ))}
            </ModuleAccordion>
          ))}
        </Container>
      </HandleErrorLoad>
    </>
  );
}

export default Outline;

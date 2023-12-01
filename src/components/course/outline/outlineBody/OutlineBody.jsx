import ModuleAccordion from '../moduleAccordion/ModuleAccordion'
import ModuleLesson from '../moduleAccordion/ModuleLesson'
import { FolderDashed, FolderSimple } from '@phosphor-icons/react'

function OutlineBody({ data = [], setRefetch = () => {} }) {
  return data?.modules?.map(module => (
    <ModuleAccordion
      title={module.title}
      description={module.description}
      image={module.image}
      key={module.id}
      Icon={FolderSimple}
      moduleID={module.id}
      modules={[module]}
      paperClasses="!my-1 !shadow !rounded-lg before:!opacity-0 after:!opacity-0"
      setRefetch={setRefetch}>
      {module.lessons?.length > 0 ? (
        module.lessons?.map((lesson, i) => (
          <ModuleLesson
            text={lesson.title}
            key={lesson.id}
            addBorder={i !== 0}
            lessonID={lesson.id}
          />
        ))
      ) : module.submodules?.length === 0 ? (
        <p>There is no lessons in this module!</p>
      ) : (
        ''
      )}
      {module.submodules?.map(submodule => (
        <ModuleAccordion
          key={submodule.id}
          title={submodule.title}
          description={submodule.description}
          image={submodule.image}
          Icon={FolderDashed}
          summaryClasses="!p-0 !bg-[#F9FAFB]"
          paperClasses="!shadow-none"
          iconClasses="text-slate-400"
          moduleID={submodule.id}
          modules={[module]}
          submodule={[submodule]}
          isSubmodule={true}
          parentModuleID={module?.id}
          setRefetch={setRefetch}>
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
  ))
}

export default OutlineBody

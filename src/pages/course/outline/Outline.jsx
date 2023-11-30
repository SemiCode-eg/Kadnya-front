import { useNavigate, useParams } from 'react-router-dom'
import { FolderDashed, FolderSimple } from '@phosphor-icons/react'
import ModuleAccordion from '../../../components/moduleAccordion/ModuleAccordion'
import SearchInput from '../../../components/SearchInput'
import ModuleLesson from '../../../components/moduleAccordion/ModuleLesson'
import useCourse from '../../../hooks/use-course'
import OutlineHeader from '../../../components/course/outline/outlineHeader/OutlineHeader'
import Container from '../Container'
import HandleErrorLoad from '../../../components/handleErrorLoad'
import { useMemo, useState } from 'react'
import { Typography } from '@mui/material'
import AddModule from '../addForms/AddModule'
import AddSubmodule from '../addForms/AddSubmodule'
import AddLesson from '../addForms/AddLesson'

function Outline() {
  const [refetch, setRefetch] = useState(false)
  const [searchData, setSearchData] = useState(null)
  const [searchLoading, setSearchLoading] = useState(false)
  const [openModuleForm, setOpenModuleForm] = useState(false)
  const [openSubModuleForm, setOpenSubModuleForm] = useState(false)
  const [openLessonForm, setOpenLessonForm] = useState(false)
  const [openQuizForm, setOpenQuizForm] = useState(false)
  const [successSubmit, setSuccessSubmit] = useState('')
  const { id } = useParams()
  const navigate = useNavigate()
  const { courseData, errorMsg, loading } = useCourse(id, refetch)

  const dataToShow = useMemo(
    () => searchData || courseData,
    [courseData, searchData],
  )

  const previewedForm = () => {
    if (openModuleForm) {
      return (
        <AddModule
          open={openModuleForm}
          onClose={() => setOpenModuleForm(false)}
          title="New Module"
          setRefetch={setRefetch}
          setSuccessSubmit={setSuccessSubmit}
        />
      )
    } else if (openSubModuleForm) {
      return (
        <AddSubmodule
          open={openSubModuleForm}
          onClose={() => setOpenSubModuleForm(false)}
          title="New Submodule"
          modules={courseData?.modules}
          setRefetch={setRefetch}
          setSuccessSubmit={setSuccessSubmit}
        />
      )
    } else if (openLessonForm) {
      return (
        <AddLesson
          open={openLessonForm}
          onClose={() => setOpenLessonForm(false)}
          title="New Lesson"
          modules={courseData?.modules}
          isMainBtn={true}
          setRefetch={setRefetch}
          setSuccessSubmit={setSuccessSubmit}
        />
      )
    } else if (openQuizForm) {
      navigate(`/products/courses/${courseData?.id}/quiz/add`)
    }
  }

  return (
    <>
      {/* TODO make error show like popup also inside each form */}
      {previewedForm()}

      <OutlineHeader
        courseData={courseData}
        setOpenLessonForm={setOpenLessonForm}
        setOpenModuleForm={setOpenModuleForm}
        setOpenSubModuleForm={setOpenSubModuleForm}
        setOpenQuizForm={setOpenQuizForm}
      />

      <HandleErrorLoad
        loading={loading}
        errorMsg={errorMsg}
        successMsg={successSubmit}
        setSuccessMsg={setSuccessSubmit}>
        <Container>
          <SearchInput
            placeholder="Find module or lesson"
            setData={setSearchData}
            URL={`courses/${id}/?q=`}
            handleLoading={setSearchLoading}
          />
          <HandleErrorLoad loading={searchLoading} errorMsg={errorMsg}>
            <div className="my-8">
              <p className="text-sky-950 text-[20px] font-semibold text-start">
                {dataToShow?.modules?.length || 0} Modules
              </p>
            </div>
            {dataToShow?.modules?.length === 0 ? (
              <Typography>Can&apos;t find these modules</Typography>
            ) : (
              dataToShow?.modules?.map(module => (
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
                      iconclasses="text-slate-400"
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
            )}
          </HandleErrorLoad>
        </Container>
      </HandleErrorLoad>
    </>
  )
}

export default Outline

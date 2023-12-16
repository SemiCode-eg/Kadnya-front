import { useState } from 'react'
import AddContentForms from './AddContentForm'
import AddContentMenu from './AddContentMenu'

function AddContentButton({
  courseData,
  setRefetch = () => {},
  setSuccessSubmit = () => {},
}) {
  const [openModuleForm, setOpenModuleForm] = useState(false)
  const [openSubModuleForm, setOpenSubModuleForm] = useState(false)
  const [openLessonForm, setOpenLessonForm] = useState(false)
  const [openQuizForm, setOpenQuizForm] = useState(false)

  return (
    <>
      <AddContentForms
        openModuleForm={openModuleForm}
        openSubModuleForm={openSubModuleForm}
        openLessonForm={openLessonForm}
        openQuizForm={openQuizForm}
        setRefetch={setRefetch}
        setSuccessSubmit={setSuccessSubmit}
        courseData={courseData}
        setOpenModuleForm={setOpenModuleForm}
        setOpenSubModuleForm={setOpenSubModuleForm}
        setOpenLessonForm={setOpenLessonForm}
      />

      <AddContentMenu
        coursesCount={courseData?.modules?.length}
        setOpenModuleForm={setOpenModuleForm}
        setOpenSubModuleForm={setOpenSubModuleForm}
        setOpenLessonForm={setOpenLessonForm}
        setOpenQuizForm={setOpenQuizForm}
      />
    </>
  )
}

export default AddContentButton

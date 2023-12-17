import AddModule from '../addForms/AddModule'
import AddSubmodule from '../addForms/AddSubmodule'
import AddLesson from '../addForms/AddLesson'
import { createQuiz } from '../../../../api/course'
import { useEffect, useState } from 'react'
import HandleErrorLoad from '../../../handleErrorLoad'
import { useNavigate } from 'react-router-dom'

const AddContentForms = ({
  openModuleForm,
  openSubModuleForm,
  openLessonForm,
  openQuizForm,
  setRefetch,
  setSuccessSubmit,
  courseData,
  setOpenModuleForm,
  setOpenSubModuleForm,
  setOpenLessonForm,
}) => {
  {
    /* TODO make error show like popup also inside each form */
  }

  const [submitError, setSubmitError] = useState('')
  const [submitSuccess, setSubmitSuccess] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (openQuizForm) {
      createQuiz({
        title: 'untitled quiz',
        description: 'new quiz',
        courseId: courseData?.id,
      })
        .then(data => {
          if (data.status === 201) {
            setSubmitSuccess('Quiz created successfully')

            setTimeout(
              navigate(
                `/products/courses/${courseData?.id}/quiz/${data.data.id}/edit`,
              ),
              400,
            )
          } else {
            setSubmitError('Server error, please try again later.')
          }
        })
        .catch(() => setSubmitError('Server error, please try again later.'))
    }
  }, [courseData?.id, navigate, openQuizForm])

  return (
    <HandleErrorLoad
      errorMsg={submitError}
      setErrorMsg={setSubmitError}
      successMsg={submitSuccess}
      setSuccessMsg={setSubmitSuccess}>
      {openModuleForm && (
        <AddModule
          open={openModuleForm}
          onClose={() => setOpenModuleForm(false)}
          title="New Module"
          setRefetch={setRefetch}
          setSuccessSubmit={setSuccessSubmit}
        />
      )}
      {openSubModuleForm && (
        <AddSubmodule
          open={openSubModuleForm}
          onClose={() => setOpenSubModuleForm(false)}
          title="New Submodule"
          modules={courseData?.modules}
          setRefetch={setRefetch}
          setSuccessSubmit={setSuccessSubmit}
        />
      )}
      {openLessonForm && (
        <AddLesson
          open={openLessonForm}
          onClose={() => setOpenLessonForm(false)}
          title="New Lesson"
          modules={courseData?.modules}
          isMainBtn={true}
          setRefetch={setRefetch}
          setSuccessSubmit={setSuccessSubmit}
        />
      )}
    </HandleErrorLoad>
  )
}

export default AddContentForms

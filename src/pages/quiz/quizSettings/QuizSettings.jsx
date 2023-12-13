import { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import { updateQuiz } from '../../../api/course/quiz'
import HandleErrorLoad from '../../../components/handleErrorLoad'
import Details from '../../../components/quiz/quizSettings/Details'
import Grading from '../../../components/quiz/quizSettings/Grading'
import EmptyQuizMsg from '../../../components/quiz/EmptyQuizMsg'

function QuizSettings() {
  const [title, setTitle] = useState('')
  const [titleErrorMsg, setTitleErrorMsg] = useState('')
  const [description, setDescription] = useState('')
  const [descriptionErrorMsg, setDescriptionErrorMsg] = useState('')
  const [passingGrade, setPassingGrade] = useState(0)
  const [showPassingGrade, setShowPassingGrade] = useState(false)
  const [hideAnswers, setHideAnswers] = useState(false)
  const [imageAsset, setImageAsset] = useState(null)
  const [SubmitErrorMsg, setSubmitErrorMsg] = useState('')
  const [submitSuccessMsg, setSubmitSuccessMsg] = useState('')
  const { id, quizId } = useParams()

  const [
    isDraft,
    submitLoading,
    setSubmitLoading,
    formRef,
    quizData,
    loading,
    errorMsg,
    refreshData,
  ] = useOutletContext()

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitErrorMsg('')

    if (title === '') {
      setTitleErrorMsg('This field is required!')
      setSubmitErrorMsg('Title is required')
      return
    }

    if (description === '') {
      setDescriptionErrorMsg('This field is required!')
      setSubmitErrorMsg('Description is required')
      return
    }

    const formData = new FormData()
    formData.append('title', title)
    formData.append('description', description)
    formData.append('hide_aswers_result_page', hideAnswers)
    formData.append('draft', isDraft)
    formData.append('course', id)

    if (imageAsset && imageAsset !== quizData?.image) {
      formData.append('image', imageAsset)
    }

    if (showPassingGrade) {
      formData.append('passing_grade', passingGrade)
    } else {
      formData.append('passing_grade', 0)
    }

    setSubmitLoading(true)
    updateQuiz(formData, quizId)
      .then(data => {
        setSubmitLoading(false)
        if (data.status === 200) {
          setSubmitSuccessMsg('Quiz updated successfully.')
          refreshData()
        } else {
          setSubmitErrorMsg('Error occurred, please try again later.')
        }
      })
      .catch(() => {
        setSubmitErrorMsg('Server Error, please try again later.')
      })
  }

  useEffect(() => {
    if (quizData) {
      setTitle(quizData.title || 'untitled quiz')
      setDescription(quizData.description)
      setPassingGrade(quizData.passing_grade)
      setHideAnswers(quizData.hide_aswers_result_page)
      setImageAsset(quizData.image)

      if (quizData.passing_grade > 0) {
        setShowPassingGrade(true)
      }
    }
  }, [quizData])

  return quizId ? (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <HandleErrorLoad
        errorMsg={errorMsg || SubmitErrorMsg}
        loading={loading || submitLoading}
        successMsg={submitSuccessMsg}
        setSuccessMsg={setSubmitSuccessMsg}>
        <Details
          title={title}
          setTitle={setTitle}
          titleErrorMsg={titleErrorMsg}
          setTitleErrorMsg={setTitleErrorMsg}
          description={description}
          setDescription={setDescription}
          descriptionErrorMsg={descriptionErrorMsg}
          setDescriptionErrorMsg={setDescriptionErrorMsg}
          imageAsset={imageAsset}
          setImageAsset={setImageAsset}
        />
        <Grading
          passingGrade={passingGrade}
          setPassingGrade={setPassingGrade}
          hideAnswers={hideAnswers}
          setHideAnswers={setHideAnswers}
          showPassingGrade={showPassingGrade}
          setShowPassingGrade={setShowPassingGrade}
        />
        <button hidden ref={formRef} />
      </HandleErrorLoad>
    </form>
  ) : (
    <EmptyQuizMsg />
  )
}

export default QuizSettings

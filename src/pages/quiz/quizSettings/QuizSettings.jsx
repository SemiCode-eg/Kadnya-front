import { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import { updateQuiz } from '../../../api/course/quiz'
import HandleErrorLoad from '../../../components/handleErrorLoad'
import Details from '../../../components/quiz/quizSettings/Details'
import Grading from '../../../components/quiz/quizSettings/Grading'

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

  const {
    isDraft,
    submitLoading,
    setSubmitLoading,
    formRef,
    quizData,
    loading,
    errorMsg,
    refreshData,
  } = useOutletContext()

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

    const formData = {
      title,
      description,
      hideAnswers,
      isDraft,
      id,
      showPassingGrade,
      passingGrade,
      imageAsset,
      image: quizData?.image,
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
      setShowPassingGrade(quizData.passing_grade > 0)
    }
  }, [quizData])

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <HandleErrorLoad
        loading={loading || submitLoading}
        errorMsg={errorMsg || SubmitErrorMsg}
        setErrorMsg={setSubmitErrorMsg}
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
  )
}

export default QuizSettings

import { useState } from 'react'
import Details from './Details'
import Grading from './Grading'
import { useOutletContext, useParams } from 'react-router-dom'
import EmptyQuizMsg from '../EmptyQuizMsg'

function QuizSettings() {
  const [title, setTitle] = useState('')
  const [titleErrorMsg, setTitleErrorMsg] = useState('')
  const [description, setDescription] = useState('')
  const [descriptionErrorMsg, setDescriptionErrorMsg] = useState('')
  const [passingGrade, setPassingGrade] = useState(0)
  const [hideAnswers, setHideAnswers] = useState(false)
  const [imageAsset, setImageAsset] = useState(null)
  const [imageAssetErrorMsg, setImageAssetErrorMsg] = useState('')
  const { quizID } = useParams()

  const [
    isDraft,
    setSubmitLoading,
    setSubmitErrorMsg,
    setSuccessSubmitMsg,
    formRef,
  ] = useOutletContext()

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitErrorMsg('')

    if (title === '') {
      setTitleErrorMsg('This field is required!')
      return
    }

    if (description === '') {
      setDescriptionErrorMsg('This field is required!')
      return
    }

    if (imageAsset === null) {
      setImageAssetErrorMsg('This field is required!')
      return
    }

    console.log(title, description, passingGrade, hideAnswers, isDraft)
    setSubmitErrorMsg('Server error, try again later!')
    // setSubmitLoading(true);
    // Patch function
  }

  return quizID ? (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <Details
        title={title}
        setTitle={setTitle}
        titleErrorMsg={titleErrorMsg}
        setTitleErrorMsg={setTitleErrorMsg}
        description={description}
        setDescription={setDescription}
        descriptionErrorMsg={descriptionErrorMsg}
        setDescriptionErrorMsg={setDescriptionErrorMsg}
        setImageAsset={setImageAsset}
        imageAssetErrorMsg={imageAssetErrorMsg}
      />
      <Grading
        passingGrade={passingGrade}
        setPassingGrade={setPassingGrade}
        hideAnswers={hideAnswers}
        setHideAnswers={setHideAnswers}
      />
      <button hidden ref={formRef} />
    </form>
  ) : (
    <EmptyQuizMsg />
  )
}

export default QuizSettings

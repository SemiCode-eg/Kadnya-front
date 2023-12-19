import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useLesson from '../../../hooks/use-lesson'
import HandleErrorLoad from '../../handleErrorLoad/index'
import { updateLesson } from '../../../api/course'
import LessonInfo from './LessonInfo'
import LessonMedia from './LessonMedia'

function LessonDetailsBody({
  isDraft,
  setIsDraft,
  formRef,
  submitError,
  setSubmitError,
  setSubmitLoading,
}) {
  const { id, lessonID } = useParams()
  const { lessonData, errorMsg, loading, setRefetch } = useLesson(lessonID)
  const [success, setSuccess] = useState('')
  const [title, setTitle] = useState('')
  const [titleErrorMsg, setTitleErrorMsg] = useState('')
  const [description, setDescription] = useState('')
  const [descriptionErrorMsg, setDescriptionErrorMsg] = useState('')
  const [imageAsset, setImageAsset] = useState(lessonData?.image)
  const [isCommentHidden, setIsCommentHidden] = useState(true)
  const [file, setFile] = useState(null)
  const [submodulesSortKey, setSubmodulesSortKey] = useState('NONE')
  const [modulesSortKey, setModulesSortKey] = useState(
    lessonData?.module || lessonData?.sub_module?.module?.id,
  )

  function handleSubmit(e) {
    e.preventDefault()

    if (title === '') {
      setTitleErrorMsg('This field is required!')
      return
    }

    if (description === '') {
      setDescriptionErrorMsg('This field is required!')
      return
    }

    setSubmitError('')
    setSubmitLoading(true)
    setSuccess('')

    const data = {
      title,
      description,
      modulesSortKey,
      submodulesSortKey,
      id,
      isCommentHidden,
      isDraft,
      imageAsset,
    }

    updateLesson(lessonID, data).then(data => {
      setSubmitError('')
      setSubmitLoading(false)
      if (data.status === 200 || (data.status === 201 && data.data)) {
        setSuccess('Lesson Data updated successfully.')
        setRefetch(prev => !prev)
      } else {
        setSubmitError('Error occurred, please try again later')
      }
    })
  }

  useEffect(() => {
    if (lessonData) {
      const fileName = lessonData?.file?.split('/').pop()
      const refactoredFileName = fileName
        ? `${fileName.substring(0, 13)}... .${fileName.split('.')[1]}`
        : ''

      setTitle(lessonData.title)
      setImageAsset(lessonData.image)
      setModulesSortKey(
        lessonData.module
          ? lessonData.module?.id
          : lessonData.sub_module?.module?.id,
      )
      setSubmodulesSortKey(
        lessonData.sub_module !== null ? lessonData.sub_module?.id : 'NONE',
      )
      setIsCommentHidden(lessonData?.hide)
      setIsDraft(lessonData?.draft)
      setFile({ name: refactoredFileName, link: lessonData?.file })
      if (lessonData.description !== 'undefined') {
        if (lessonData.description !== null) {
          setDescription(lessonData.description)
        }
      }
    }
  }, [lessonData, setIsDraft])

  return (
    <HandleErrorLoad
      loading={loading}
      success
      errorMsg={errorMsg || submitError}
      setErrorMsg={setSubmitError}
      successMsg={success}
      setSuccessMsg={setSuccess}>
      <div className="border-[1.5px] border-[#ddd] rounded-[10px] p-6">
        <p className="w-full mx-auto text-sky-950 font-[600] text-2xl tracking-[-0.25px] mb-8">
          Lesson Details
        </p>
        {errorMsg ? (
          <p className="text-md text-red-500 font-bold">{errorMsg}</p>
        ) : (
          <form
            className="flex xl:gap-[90px] gap-8 flex-wrap h-full"
            onSubmit={handleSubmit}>
            <LessonInfo
              title={title}
              setTitle={setTitle}
              titleErrorMsg={titleErrorMsg}
              setTitleErrorMsg={setTitleErrorMsg}
              description={description}
              setDescription={setDescription}
              descriptionErrorMsg={descriptionErrorMsg}
              setDescriptionErrorMsg={setDescriptionErrorMsg}
              setImageAsset={setImageAsset}
              modulesSortKey={modulesSortKey}
              setModulesSortKey={setModulesSortKey}
              submodulesSortKey={submodulesSortKey}
              setSubmodulesSortKey={setSubmodulesSortKey}
              image={lessonData?.image}
              courseId={id}
            />

            <LessonMedia
              lessonID={lessonID}
              isCommentHidden={isCommentHidden}
              setIsCommentHidden={setIsCommentHidden}
              file={file}
              setFile={setFile}
              setRefetch={setRefetch}
            />

            <button ref={formRef} hidden type="submit" />
          </form>
        )}
      </div>
    </HandleErrorLoad>
  )
}

export default LessonDetailsBody

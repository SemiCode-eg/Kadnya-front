import { useState } from 'react'
import HandleErrorLoad from '../../../handleErrorLoad'
import TitleField from './TitleField'
import FormFooter from './FormFooter'
import { useParams } from 'react-router-dom'
import { addSessionTitle } from '../../../../api/coachProgram'

function AddSessionForm({ onClose, setRefetch }) {
  const [title, setTitle] = useState('')
  const [submitErrMsg, setSubmitErrMsg] = useState('')
  const [submitLoading, setSubmitLoading] = useState(false)
  const { programId } = useParams()

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitErrMsg('')
    setSubmitLoading(true)

    addSessionTitle({ title, coach_program: programId }).then(data => {
      setSubmitLoading(false)

      if (data.status === 201) {
        setRefetch(prev => !prev)
        onClose()
      } else {
        setSubmitErrMsg('Something went wrong, please try again later')
      }
    })
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <HandleErrorLoad errorMsg={submitErrMsg} setErrorMsg={setSubmitErrMsg}>
        <TitleField title={title} setTitle={setTitle} />

        <FormFooter onClose={onClose} submitLoading={submitLoading} />
      </HandleErrorLoad>
    </form>
  )
}

export default AddSessionForm

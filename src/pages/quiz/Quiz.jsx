import { Outlet, useParams } from 'react-router-dom'
import CustomCard from '../../components/customCard/CustomCard'
import GoBackBtn from '../../components/goBackBtn/GoBackBtn'
import MiniSide from '../../components/miniSide/MiniSide'
import AddQuiz from './addQuiz/AddQuiz'
import QuizSittings from './quizSittings/QuizSittings'
import QuizResults from './quizResults/QuizResults'
import { useMemo, useRef, useState } from 'react'
import QuizHeader from '../../components/quiz/quizHeader/QuizHeader'

function Quiz() {
  const [isDraft, setIsDraft] = useState(true)
  const [submitLoading, setSubmitLoading] = useState(false)
  const [successSubmitMsg, setSuccessSubmitMsg] = useState('')
  const [submitErrorMsg, setSubmitErrorMsg] = useState(false)
  const { quizID } = useParams()
  const formRef = useRef(null)

  const tabs = useMemo(
    () => [
      {
        title: 'Questions',
        path: `${quizID ? `${quizID}/edit` : 'add'}`,
        content: <AddQuiz />,
      },
      {
        title: 'Settings',
        path: `${quizID ? `${quizID}/settings` : 'settings'}`,
        content: <QuizSittings />,
      },
      {
        title: 'Results',
        path: `${quizID ? `${quizID}/results` : 'results'}`,
        content: <QuizResults />,
      },
    ],
    [quizID],
  )

  return (
    <CustomCard>
      <div className="flex lg:flex-row flex-col lg:gap-5 gap-10 mt-5">
        <div className="flex lg:flex-col flex-row lg:justify-normal items-center justify-between gap-[60px]">
          <div className="flex items-center self-start gap-[9px]">
            <GoBackBtn />
            <p className="text-sky-950 text-[31px]">Course</p>
          </div>
          <div className="flex-1">
            <MiniSide tabs={tabs} />
          </div>
        </div>
        <div className="w-full">
          <QuizHeader
            isDraft={isDraft}
            setIsDraft={setIsDraft}
            formRef={formRef}
            quizData={null}
            submitLoading={submitLoading}
            submitErrorMsg={submitErrorMsg}
            successSubmitMsg={successSubmitMsg}
          />

          <Outlet
            context={[
              isDraft,
              setSubmitLoading,
              setSubmitErrorMsg,
              setSuccessSubmitMsg,
              formRef,
            ]}
          />
        </div>
      </div>
    </CustomCard>
  )
}

export default Quiz

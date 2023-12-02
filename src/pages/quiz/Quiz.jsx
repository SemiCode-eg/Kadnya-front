import { Outlet, useParams } from 'react-router-dom'
import CustomCard from '../../components/customCard/CustomCard'
import GoBackBtn from '../../components/goBackBtn/GoBackBtn'
import MiniSide from '../../components/miniSide/MiniSide'
import { useMemo, useRef, useState } from 'react'
import QuizHeader from '../../components/quiz/quizHeader/QuizHeader'
import useQuiz from '../../hooks/use-quiz'

function Quiz() {
  const [isDraft, setIsDraft] = useState(true)
  const [submitLoading, setSubmitLoading] = useState(false)
  const { id, quizID } = useParams()
  const { quizData, loading, errorMsg, refreshData } = useQuiz(id)
  const formRef = useRef(null)

  const tabs = useMemo(
    () => [
      {
        title: 'Questions',
        path: `${quizID ? `${quizID}/edit` : 'add'}`,
      },
      {
        title: 'Settings',
        path: `${quizID ? `${quizID}/settings` : 'settings'}`,
      },
      {
        title: 'Results',
        path: `${quizID ? `${quizID}/results` : 'results'}`,
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
            title={quizData?.title}
            image={quizData?.image}
            submitLoading={submitLoading}
          />
          <Outlet
            context={[
              isDraft,
              submitLoading,
              setSubmitLoading,
              formRef,
              quizData,
              loading,
              errorMsg,
              refreshData,
            ]}
          />
        </div>
      </div>
    </CustomCard>
  )
}

export default Quiz

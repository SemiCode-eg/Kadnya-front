import { NotePencil, PencilSimple } from '@phosphor-icons/react'
import { Link, useParams } from 'react-router-dom'

function ModuleQuiz({ text, quizId }) {
  const { id } = useParams()

  return (
    <div className="flex justify-between flex-1 py-3 px-[15px] rounded-xl shadow bg-white mb-0.5">
      <div className="flex items-end gap-2">
        <NotePencil size={24} />
        <p className="text-sm font-[500]">{text}</p>
      </div>
      <div className="flex items-center gap-2">
        <Link to={`/products/courses/${id}/quiz/${quizId}/edit`}>
          <PencilSimple size={15} weight="bold" />
        </Link>
      </div>
    </div>
  )
}

export default ModuleQuiz

import DraftBtn from '../../draftBtn/DraftBtn'
import { Eye, EyeSlash } from '@phosphor-icons/react'

function CommentSection({ isCommentHidden, setIsCommentHidden }) {
  return (
    <div className="flex gap-5 items-end">
      <p className="capitalize font-[500] text-lg text-sky-950">Comment</p>
      <DraftBtn
        draftMenuItems={visibleMenuItems}
        draftState={isCommentHidden}
        setDraftState={setIsCommentHidden}
      />
    </div>
  )
}

export default CommentSection

const visibleMenuItems = [
  {
    Icon: EyeSlash,
    text: 'Hide',
  },
  {
    Icon: Eye,
    text: 'Visible',
  },
]

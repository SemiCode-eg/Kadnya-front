import AddVideoSection from './AddVideoSection'
import CommentSection from './CommentSection'
import DownloadsSection from './DownloadsSection'

function LessonMedia({ lessonID, isCommentHidden, setIsCommentHidden }) {
  return (
    <div className="flex flex-col gap-6 xl:w-[40%] w-full justify-between">
      <AddVideoSection />

      <CommentSection
        isCommentHidden={isCommentHidden}
        setIsCommentHidden={setIsCommentHidden}
      />

      <DownloadsSection lessonID={lessonID} />
    </div>
  )
}

export default LessonMedia

import AddVideoSection from './AddVideoSection'
import CommentSection from './CommentSection'
import DownloadsSection from './DownloadsSection'

function LessonMedia({
  lessonID,
  isCommentHidden,
  setIsCommentHidden,
  file = '',
  setFile = () => {},
  setRefetch= () => {}
}) {
  return (
    <div className="flex flex-col gap-6 xl:w-[40%] w-full justify-between">
      <AddVideoSection />

      <CommentSection
        isCommentHidden={isCommentHidden}
        setIsCommentHidden={setIsCommentHidden}
      />

      <DownloadsSection
        lessonID={lessonID}
        file={file}
        setFile={setFile}
        setRefetch={setRefetch}
      />
    </div>
  )
}

export default LessonMedia

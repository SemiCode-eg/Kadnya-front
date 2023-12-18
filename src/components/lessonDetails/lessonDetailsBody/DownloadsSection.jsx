import { CheckFat, LinkSimple } from '@phosphor-icons/react'
import AddFile from '../../addFile/AddFile'
import LessonDetailsLinkCard from '../lessonDetailsLinkCard/LessonDetailsLinkCard'
import { useState } from 'react'

function DownloadsSection({ lessonID }) {
  const [openAddFile, setOpenAddFile] = useState(false)
  const [isFileUpload, setIsFileUploaded] = useState(false)
  const [fileName, setFileName] = useState('')

  return (
    <div className="flex items-start flex-col gap-[10px]">
      <p className="capitalize font-[500] text-lg text-sky-950 flex items-end gap-1">
        Downloads
        <span className="text-zinc-400 font-normal text-xs">(.pdf)</span>
      </p>
      {!isFileUpload ? (
        <>
          <LessonDetailsLinkCard
            text="Add Files"
            icon={<LinkSimple size={30} className="text-neutral-400" />}
            handleClick={() => setOpenAddFile(true)}
          />
          <AddFile
            open={openAddFile}
            onClose={() => setOpenAddFile(false)}
            setFileName={setFileName}
            endPointUrl={`lessons/${lessonID}/`}
            setIsFileUploaded={setIsFileUploaded}
          />
        </>
      ) : (
        <LessonDetailsLinkCard
          text={
            <>
              {fileName}
              <p className="mt-1 text-teal-500">
                Saved on the server Successfully
              </p>
            </>
          }
          icon={<CheckFat size={56} weight="fill" className="text-teal-500" />}
          handleClick={() => setOpenAddFile(true)}
        />
      )}
    </div>
  )
}

export default DownloadsSection

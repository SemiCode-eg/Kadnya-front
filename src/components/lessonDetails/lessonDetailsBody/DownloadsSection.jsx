import { File, LinkSimple } from '@phosphor-icons/react'
import AddFile from '../../addFile/AddFile'
import LessonDetailsLinkCard from '../lessonDetailsLinkCard/LessonDetailsLinkCard'
import { useState } from 'react'

function DownloadsSection({ lessonID, file, setRefetch }) {
  const [openAddFile, setOpenAddFile] = useState(false)

  return (
    <div className="flex items-start flex-col gap-[10px]">
      <p className="capitalize font-[500] text-lg text-sky-950 flex items-end gap-1">
        Downloads
        <span className="text-zinc-400 font-normal text-xs">(.pdf)</span>
      </p>

      <LessonDetailsLinkCard
        text={
          <>
            Add Files
            <span className="text-xs normal-case inline-block mt-2 text-neutral-400 font-normal">
              Note, if you already have a file it will be replace with the new
              one
            </span>
          </>
        }
        icon={<LinkSimple size={30} className="text-neutral-400" />}
        handleClick={() => setOpenAddFile(true)}
      />
      <AddFile
        open={openAddFile}
        onClose={() => setOpenAddFile(false)}
        endPointUrl={`lessons/${lessonID}/update/`}
        setRefetch={setRefetch}
      />
      {file.link && (
        <a
          href={file.link}
          target="_blank"
          rel="noreferrer"
          className="border-2 p-2 rounded-md border-teal-500 flex items-end gap-2 text-sm">
          <File size={22} />
          {file.name}
        </a>
      )}
    </div>
  )
}

export default DownloadsSection

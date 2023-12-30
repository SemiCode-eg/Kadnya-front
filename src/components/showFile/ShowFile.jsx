import { File } from '@phosphor-icons/react'

function ShowFile({ file }) {
  return (
    file?.link && (
      <a
        href={file.link}
        target="_blank"
        rel="noreferrer"
        className="border-2 p-2 rounded-md border-teal-500 flex items-end gap-2 text-sm">
        <File size={22} />
        {file.name}
      </a>
    )
  )
}

export default ShowFile

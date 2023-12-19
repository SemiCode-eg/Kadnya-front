import { FolderOpen } from '@phosphor-icons/react'

function AddFileButton({ uploadFile, error }) {
  return (
    <>
      <p className="text-center font-[500] text-lg text-black">
        Drop files here, browse files or import from
      </p>
      <form className="flex flex-col items-center gap-2">
        <input
          type="file"
          name="upload-file"
          onChange={uploadFile}
          className="w-0 h-0"
        />
        <div className="border-[1.5px] border-sky-950 rounded-[8px] p-3 flex justify-center items-center flex-col gap-3 cursor-pointer">
          <div className="flex items-center justify-center self-center bg-sky-950 rounded-full w-[42px] h-[42px]">
            <FolderOpen size={32} className="text-white" />
          </div>
          <p className="font-[600] text-lg text-sky-950">My Device</p>
        </div>
        {error.length > 0 && (
          <p className="text-red-500 text-md">{error}</p>
        )}
      </form>
    </>
  )
}

export default AddFileButton

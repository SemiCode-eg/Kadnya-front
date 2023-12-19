import MainButton from '../mainButton/MainButton'

function Progress({ uploadedFile, requestCancelRef }) {
  const cancelUpload = () => {
    if (requestCancelRef.current) {
      requestCancelRef.current('Upload canceled.')
    }
  }

  return (
    <div className="flex flex-col gap-10 justify-center items-center w-full">
      <div className="flex flex-col items-center justify-center gap-3 w-full">
        <p className="text-center font-[600] text-xl text-black">
          Uploading: {uploadedFile?.name}
        </p>
        <p className="text-teal-500 text-lg">{uploadedFile?.loading}%</p>
        <div className="relative w-full h-2.5 bg-gray-400 rounded-xl">
          <span
            className="absolute top-0 left-0 h-full w-auto rounded-lg bg-teal-500"
            style={{ width: `${uploadedFile?.loading}%` }}></span>
        </div>
      </div>

      <MainButton
        text="Cancel Upload"
        className="text-teal-500 text-[17px] !px-5 !mr-0 font-[500] border-[1px] border-teal-500 duration-150 hover:text-white hover:bg-teal-500"
        isPrimary={false}
        handleClick={e => {
          e.preventDefault()
          cancelUpload()
        }}
      />
    </div>
  )
}

export default Progress

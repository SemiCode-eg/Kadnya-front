export default function Loader({ fullHeight = false }) {
  return (
    <div
      className={`h-full w-full flex justify-center items-center ${
        fullHeight && '!h-[100dvh]'
      }`}>
      <div className="w-16 h-16 border-t-4 border-b-4 border-teal-500 border-solid rounded-full animate-spin"></div>
    </div>
  )
}

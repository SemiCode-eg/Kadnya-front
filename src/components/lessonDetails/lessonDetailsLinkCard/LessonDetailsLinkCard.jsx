/* eslint-disable react/prop-types */

function LessonDetailsLinkCard({ text = '', icon, handleClick = () => {} }) {
  return (
    <button
      type="button"
      className="w-full h-64 cursor-pointer p-2 border-[1.5px] rounded-[5px] border-neutral-400/75 flex flex-col justify-center items-center"
      onClick={handleClick}>
      {icon}
      <p className="capitalize font-[500] text-lg text-sky-950">{text}</p>
    </button>
  )
}

export default LessonDetailsLinkCard

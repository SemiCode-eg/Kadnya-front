/* eslint-disable react/prop-types */

function LessonDetailsLinkCard({ text = '', icon, handleClick = () => {} }) {
  return (
    <div
      role="button"
      className="w-full cursor-pointer py-[100px] border-[1.5px] rounded-[5px] border-neutral-400/75 flex flex-col justify-center items-center"
      onClick={handleClick}
    >
      {icon}
      <p className="capitalize font-[500] text-xl text-sky-950">{text}</p>
    </div>
  )
}

export default LessonDetailsLinkCard

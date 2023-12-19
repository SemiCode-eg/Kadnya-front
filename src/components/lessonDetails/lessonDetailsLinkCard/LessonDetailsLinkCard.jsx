/* eslint-disable react/prop-types */

function LessonDetailsLinkCard({
  text = '',
  icon,
  handleClick = () => {},
  noteMsg = '',
}) {
  return (
    <div>
      <p className="text-xs normal-case text-neutral-400 font-normal mb-1">
        {noteMsg}
      </p>
      <button
        type="button"
        className="w-full h-64 cursor-pointer p-2 border-[1.5px] rounded-[5px] border-neutral-400/75 flex flex-col justify-center items-center gap-2"
        onClick={handleClick}>
        {icon}
        <p className="capitalize font-[500] text-lg text-sky-950">{text}</p>
      </button>
    </div>
  )
}

export default LessonDetailsLinkCard

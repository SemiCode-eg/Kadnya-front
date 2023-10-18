/* eslint-disable react/prop-types */

function MainButton({ text = 'Button', handleClick, icon, width = 'auto' }) {
  return (
    <button
      className={`flex gap-2 items-center text-white
    outline-none transition-all duration-150 ease-in
    rounded-lg text-md font-semibold px-8 py-3 mr-2
    bg-sky-950 hover:bg-teal-200 hover:text-sky-950`}
      onClick={handleClick}
      style={{ width: width }}
    >
      {icon}
      {text}
    </button>
  );
}

export default MainButton;

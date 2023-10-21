/* eslint-disable react/prop-types */

const btnClasses =
  'flex gap-2 items-center outline-none transition-all duration-150 ease-in rounded-lg text-md font-semibold px-8 py-3 mr-2';

function MainButton({
  text = 'Button',
  handleClick,
  icon,
  className = 'text-white bg-sky-950 hover:bg-teal-200 hover:text-sky-950',
  reverse = false,
}) {
  const customclass = btnClasses + ' ' + className;

  return (
    <button className={customclass} onClick={handleClick}>
      {reverse ? (
        <>
          {text}
          {icon}
        </>
      ) : (
        <>
          {icon}
          {text}
        </>
      )}
    </button>
  );
}

export default MainButton;

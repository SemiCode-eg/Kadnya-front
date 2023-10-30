/* eslint-disable react/prop-types */
const defautClasses =
  'flex gap-2 items-center outline-none transition-all duration-150 rounded-lg text-md font-semibold px-8 py-3 mr-2';

const btnClasses = `${defautClasses} ease-in`;

const btnFormClasses = `${defautClasses} ease-out border-[1px] border-teal-500 text-white bg-teal-500 hover:bg-white hover:text-teal-500`;

const primaryClasses =
  'text-white bg-sky-950 hover:bg-teal-200 hover:text-sky-950';

function MainButton({
  text = 'Button',
  handleClick,
  type = 'button',
  icon,
  className = '',
  reverse = false,
  isPrimary = true,
  isForm = false,
}) {
  const customclass = `${isForm ? btnFormClasses : btnClasses} ${
    isPrimary ? primaryClasses : ''
  } ${className}`;

  return (
    <button type={type} className={customclass} onClick={handleClick}>
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

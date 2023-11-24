/* eslint-disable react/prop-types */
const defaultClasses =
  'border-[2px] outline-none self-stretch border-zinc-200 text-black text-[17px] px-3 py-2 rounded-xl placeholder:text-neutral-400 placeholder:focus:opacity-0 placeholder:focus:duration-200 placeholder:focus:ease-in focus:duration-200 focus:ease-in focus:border-zinc-400/80';

function TextField({
  placeholder,
  value,
  handleChange,
  className = '',
  type = 'text',
  min = 0,
  max = 100,
}) {
  const fieldClasses = `${defaultClasses} ${className}`;

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={fieldClasses}
      value={value}
      onChange={handleChange}
      min={min}
      max={max}
    />
  );
}

export default TextField;

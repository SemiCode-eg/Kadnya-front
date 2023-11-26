/* eslint-disable react/prop-types */
const defaultClasses =
  'border-[2px] min-h-[165px] outline-none self-stretch border-zinc-200 text-black text-[17px] px-3 py-2 rounded-xl placeholder:text-neutral-400 placeholder:focus:opacity-0 placeholder:focus:duration-200 placeholder:focus:ease-in focus:duration-200 focus:ease-in focus:border-zinc-400/80'

function TextAriaField({ placeholder, value, handleChange, className = '' }) {
  const fieldClasses = `${defaultClasses} ${className}`

  return (
    <textarea
      placeholder={placeholder}
      className={fieldClasses}
      value={value}
      onChange={handleChange}
    />
  )
}

export default TextAriaField

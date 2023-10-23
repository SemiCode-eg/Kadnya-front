/* eslint-disable react/prop-types */
function TextField({ placeholder, value, handleChange }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="border-[2px] outline-none self-stretch border-neutral-400 text-black text-[17px] px-3 py-2 rounded-[5px] placeholder:text-neutral-400 placeholder:focus:opacity-0 placeholder:focus:duration-200 placeholder:focus:ease-in"
      value={value}
      onChange={handleChange}
    />
  );
}

export default TextField;

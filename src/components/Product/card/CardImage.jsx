/* eslint-disable react/prop-types */
export default function CardImage({ image, height = '24', width = '5/6' }) {
  return (
    <>
      {image ? (
        <img
          src={image}
          className={`sm:w-${width} w-full h-${height} rounded-lg`}
        />
      ) : (
        <div
          className={`sm:w-${width} w-full h-${height} rounded-lg 
            bg-gradient-to-r from-violet-200 to-teal-300`}
        ></div>
      )}
    </>
  )
}

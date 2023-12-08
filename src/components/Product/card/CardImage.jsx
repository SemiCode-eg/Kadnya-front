/* eslint-disable react/prop-types */
export default function CardImage({ image }) {
  return (
    <>
      {image ? (
        <img src={image} className="rounded-lg object-cover w-full h-32" />
      ) : (
        <div
          className=" rounded-lg 
            bg-gradient-to-r from-violet-200 to-teal-300 w-full h-32"></div>
      )}
    </>
  )
}

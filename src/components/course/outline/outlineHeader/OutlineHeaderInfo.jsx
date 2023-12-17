function OutlineHeaderInfo({ title, image, releaseDate }) {
  return (
    <div className="flex items-center flex-col sm:flex-row gap-[20px] flex-1">
      <div className="w-[140px] h-[114px] bg-white rounded-[10px] shadow-1">
        <img
          src={image}
          alt="course image"
          className="w-full h-full object-cover rounded-[10px]"
        />
      </div>

      <div className="text-gray-950 capitalize text-[20px] flex flex-col items-start">
        <p>{title}</p>
        <p className="text-gray-400 font-normal text-sm">{releaseDate}</p>
      </div>
    </div>
  )
}

export default OutlineHeaderInfo

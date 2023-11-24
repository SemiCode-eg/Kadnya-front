/* eslint-disable react/prop-types */
import imageSquare from '../../assets/images/courses/ImageSquare.png';

function ProgramHeader({ image, title, ReleaseDate }) {
  return (
    <div className="flex items-center flex-col sm:flex-row gap-[20px] mb-5">
      <div className="w-[140px] h-[114px] bg-white rounded-[10px] shadow-1">
        <img
          src={image ? image : imageSquare}
          alt="course image"
          className={`w-full h-full italic text-sm ${
            image ? 'object-cover' : 'object-contain'
          } rounded-[10px]`}
        />
      </div>

      <div className="text-gray-950 capitalize text-[20px] flex flex-col items-start">
        <p>{title}</p>
        <p className="text-gray-400 font-normal text-sm">{ReleaseDate}</p>
      </div>
    </div>
  );
}

export default ProgramHeader;

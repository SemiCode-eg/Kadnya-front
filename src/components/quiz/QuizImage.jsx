/* eslint-disable react/prop-types */

import MainButton from "../mainButton/MainButton";

function QuizImage({ imageURL, imageName, handleDelete = () => {} }) {
  return (
    <div className="flex gap-[19px] w-full flex-wrap md:flex-nowrap">
      <div className="rounded-[5px] border-[3px] border-teal-500 flex justify-center items-center h-[100px] w-[250px]">
        <img
          src={imageURL}
          alt="uploaded-image"
          className="w-full h-full object-cover rounded-[3px]"
        />
      </div>
      <div className="text-sm font-[400] text-zinc-400 mt-[5px] text-left self-end">
        <p className="mb-[10px]">{imageName}</p>

        <MainButton
          text="Delete Image"
          className="text-red-500 text-sm !px-2 !py-2 font-[500] border-[1px] border-red-500 duration-150 hover:text-white hover:bg-red-500"
          handleClick={handleDelete}
          isPrimary={false}
        />
      </div>
    </div>
  );
}

export default QuizImage;

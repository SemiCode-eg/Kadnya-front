/* eslint-disable react/prop-types */

import ImageSquare from '../../assets/icons/ImageSquare.svg';
import MainButton from '../MainButton/MainButton';

function ImageField({ isVertical = true }) {
  return isVertical ? (
    <div className="flex flex-col gap-[33px] w-full">
      <div>
        <div className="rounded-[5px] border-[1px] border-zinc-100 flex justify-center items-center h-auto max-h-[332px] w-full">
          <button className="bg-white flex justify-center items-center">
            <ImageSquare size={250} className="text-zinc-300" weight="fill" />
          </button>
        </div>
        <p className="text-[18px] font-[400] text-zinc-400 mt-[5px] text-left">
          Please use .jpg or .png with non-transparent background
        </p>
      </div>
      <div className="self-start mt-[5px]">
        <p className="text-[18px] font-[400] text-zinc-400 mb-[5px]">
          Recommended dimensions of 1280x720
        </p>
        <MainButton
          text="Select Image"
          className="text-teal-500 text-[17px] font-[500] border-[1px] border-teal-500 duration-150 hover:text-white hover:bg-teal-500"
        />
      </div>
    </div>
  ) : (
    <div className="flex gap-[19px] w-full">
      <button className="bg-white rounded-[5px] border-[1px] border-zinc-100 flex justify-center items-center">
        <img src={ImageSquare} className="w-[98px] opacity-80" />
      </button>
      <div className="text-[15px] font-[400] text-zinc-400 mt-[5px] text-left">
        <p className="mb-[10px]">
          Please use .jpg or .png with non-transparent background
        </p>
        <p className="mb-[10px]">Recommended dimensions of 1280x720</p>
        <MainButton
          text="Select Image"
          isForm={true}
          className="!px-[14px] text-[15px]"
        />
      </div>
    </div>
  );
}

export default ImageField;

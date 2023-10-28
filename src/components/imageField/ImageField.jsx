/* eslint-disable react/prop-types */

import { useState } from 'react';
import ImageSquareColored from '../../assets/icons/ImageSquare.svg';
import { ImageSquare } from '@phosphor-icons/react';
import ImageSelectBtn from './ImageSelectBtn';

function ImageField({ isVertical = true, setImageAsset = () => {}, height, imageURL }) {
  const [wrongImageType, setWrongImageType] = useState(false);
  const [previewedImage, setPreviewedImage] = useState(imageURL || '');

  const handleImageChange = (e) => {
    const { type } = e.target.files[0];

    if (type === 'image/png' || type === 'image/jpeg') {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        setPreviewedImage(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);

      setWrongImageType(false);
      setImageAsset(e.target.files[0]);
    } else {
      setWrongImageType(true);
    }
  };

  return isVertical ? (
    <div className="flex flex-col gap-[33px] w-full">
      <div>
        {previewedImage ? (
          <div
            className="rounded-[5px] border-[1px] flex justify-center items-center h-auto max-h-[332px] w-full overflow-auto"
            style={{ height: height }}
          >
            <img
              src={previewedImage}
              alt="uploaded-image"
              className="max-w-full"
            />
          </div>
        ) : (
          <div className="rounded-[5px] border-[1px] border-zinc-100 flex justify-center items-center h-auto max-h-[332px] w-full">
            <div className="bg-white flex justify-center items-center">
              <ImageSquare size={250} className="text-zinc-300" weight="fill" />
            </div>
          </div>
        )}
        <p className="text-[18px] font-[400] text-zinc-400 mt-[5px] text-left">
          Please use .jpg or .png with non-transparent background
        </p>
      </div>
      <div className="self-start mt-[5px]">
        <p className="text-[18px] font-[400] text-zinc-400 mb-[5px]">
          Recommended dimensions of 1280x720
        </p>
        <div>
          <ImageSelectBtn handleChange={handleImageChange} />
          {wrongImageType && (
            <p className="text-red-500 text-left mt-[-10px]">
              Wrong image type
            </p>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className="flex gap-[19px] w-full">
      {previewedImage ? (
        <div className="rounded-[5px] border-[1px] flex justify-center items-center h-auto max-h-[332px] w-full overflow-auto">
          <img
            src={previewedImage}
            alt="uploaded-image"
            className="max-w-full"
          />
        </div>
      ) : (
        <div className="rounded-[5px] border-[1px] border-zinc-100 flex justify-center items-center h-auto max-h-[332px] w-full">
          <div className="bg-white flex justify-center items-center">
            <img src={ImageSquareColored} className="w-[98px] opacity-80" />
          </div>
        </div>
      )}
      <div className="text-[15px] font-[400] text-zinc-400 mt-[5px] text-left">
        <p className="mb-[10px]">
          Please use .jpg or .png with non-transparent background
        </p>
        <p className="mb-[10px]">Recommended dimensions of 1280x720</p>
        <ImageSelectBtn handleChange={handleImageChange} />
        {wrongImageType && (
          <p className="text-red-500 mt-[10px] text-left">Wrong image type</p>
        )}
      </div>
    </div>
  );
}

export default ImageField;

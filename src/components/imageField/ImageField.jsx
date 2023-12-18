/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react'
import ImageSquareColored from '../../assets/icons/ImageSquare.svg'
import { ImageSquare } from '@phosphor-icons/react'
import ImageSelectBtn from './ImageSelectBtn'

function ImageField({
  isVertical = true,
  setImageAsset = () => {},
  height,
  size = 250,
  imageURL,
}) {
  const [imageError, setImageError] = useState('')
  const [previewedImage, setPreviewedImage] = useState('')

  const handleImageChange = e => {
    if (e.target.files[0]) {
      const { type, size } = e.target.files[0]

      if (type === 'image/png' || type === 'image/jpeg') {
        // Check file size (in bytes) -> 5 MB
        if (size > 5 * 1024 * 1024) {
          setImageError('Image size must not exceeds 5 MB!')
          return
        }

        const reader = new FileReader()

        reader.addEventListener('load', () => {
          setPreviewedImage(reader.result)
        })
        reader.readAsDataURL(e.target.files[0])

        setImageError(false)
        setImageAsset(e.target.files[0])
      } else {
        setImageError('Wrong image type')
      }
    }
  }

  useEffect(() => setPreviewedImage(imageURL), [imageURL])

  return isVertical ? (
    <div className="flex flex-col gap-[33px] w-full">
      <div>
        {previewedImage || imageURL ? (
          <div
            className="rounded-[5px] border-[3px] border-teal-500 flex justify-center items-center h-[250px] w-full"
            style={{ height: height }}>
            <img
              src={previewedImage || imageURL}
              alt="uploaded-image"
              className="w-full h-full object-cover rounded-[3px]"
            />
          </div>
        ) : (
          <div className="rounded-[5px] border-[1px] border-zinc-300 flex justify-center items-center h-[250px] w-full">
            <div className="bg-white flex justify-center items-center w-full h-full object-cover rounded-[3px]">
              <ImageSquare
                size={size}
                className="text-zinc-300"
                weight="fill"
              />
            </div>
          </div>
        )}
        <p className="text-sm font-[400] text-zinc-400 mt-[5px] text-left">
          Please use .jpg or .png with non-transparent background
        </p>
      </div>
      <div className="self-start mt-[5px]">
        <p className="text-sm font-[400] text-zinc-400 mb-[5px]">
          Recommended dimensions of 1280x720
        </p>
        <div>
          <ImageSelectBtn handleChange={handleImageChange} />
          {imageError && (
            <p className="text-red-500 text-left -mt-5">{imageError}</p>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className="flex gap-[19px] w-full flex-wrap md:flex-nowrap">
      {previewedImage || imageURL ? (
        <div className="rounded-[5px] border-[3px] border-teal-500 flex justify-center items-center h-[250px] w-full">
          <img
            src={previewedImage || imageURL}
            alt="uploaded-image"
            className="w-full h-full object-cover rounded-[3px]"
          />
        </div>
      ) : (
        <div className="rounded-[5px] border-[1px] border-zinc-300 flex justify-center items-center h-[250px] w-full">
          <div className="bg-white flex justify-center items-center">
            <img
              src={ImageSquareColored}
              className="w-full h-full object-cover rounded-[3px] opacity-80"
            />
          </div>
        </div>
      )}
      <div className="text-[15px] font-[400] text-zinc-400 mt-[5px] text-left">
        <p className="mb-[10px] text-sm">
          Please use .jpg or .png with non-transparent background
        </p>
        <p className="mb-[10px] text-sm">Recommended dimensions of 1280x720</p>
        <ImageSelectBtn handleChange={handleImageChange} />
        {imageError && (
          <p className="text-red-500 -mt-5 text-left">{imageError}</p>
        )}
      </div>
    </div>
  )
}

export default ImageField

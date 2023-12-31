/* eslint-disable react/prop-types */
import { Button, FormControlLabel, Switch } from '@mui/material'
import { Link } from '@phosphor-icons/react'
import { useRef, useState } from 'react'
import HandleErrorLoad from '../../handleErrorLoad'
import QuizImage from '../QuizImage'

export default function GradSwitch({
  isGraded,
  onGradedChange,
  imageURL,
  onImageURLChange,
  onImageURLDelete,
}) {
  const [imageError, setImageError] = useState('')
  const [previewedImage, setPreviewedImage] = useState(imageURL || null)
  const imageFieldRef = useRef()

  const handleImageChange = e => {
    if (e.target.files[0]) {
      const { type, size, name } = e.target.files[0]

      const imageName =
        name.length > 12
          ? `${name.substring(0, 13)}... .${name.split('.')[1]}`
          : name

      if (type === 'image/png' || type === 'image/jpeg') {
        // Check file size (in bytes) -> 5 MB
        if (size > 5 * 1024 * 1024) {
          setImageError('Image size must not exceeds 5 MB!')
          return
        }

        const reader = new FileReader()

        reader.addEventListener('load', () => {
          setPreviewedImage({ image: reader.result, name: imageName })
        })
        reader.readAsDataURL(e.target.files[0])

        setImageError(false)
        onImageURLChange(e.target.files[0])
      } else {
        setImageError('Wrong image type')
      }
    }
  }

  const handleAddImageBtnClick = () => {
    imageFieldRef.current.click()
  }

  const handleImageDelete = () => {
    setPreviewedImage(null)
    onImageURLDelete()
  }

  return (
    <HandleErrorLoad errorMsg={imageError} setErrorMsg={setImageError}>
      <div className="flex flex-col gap-8 w-full">
        <div className="flex gap-3 w-full flex-wrap">
          <FormControlLabel
            control={<Switch value={isGraded} onChange={onGradedChange} />}
            label="Graded question"
          />
          <p
            className={`flex justify-center items-center px-4 gap-3 rounded-full text-white duration-150 ease-in ${
              isGraded ? 'bg-teal-500' : 'bg-gray-400'
            }`}>
            <span
              className={`block ${
                isGraded ? 'bg-black' : 'bg-white'
              } rounded-full w-3 h-3 duration-200 ease-out`}></span>
            Auto-Graded
          </p>

          <div className="flex-1 text-right">
            <Button
              className="!capitalize !gap-0 !flex-1"
              variant="text"
              startIcon={<Link weight="bold" />}
              onClick={handleAddImageBtnClick}>
              Attach image
              <input
                id="image"
                type="file"
                name="upload-image"
                onChange={handleImageChange}
                className="w-0 h-0 "
                ref={imageFieldRef}
              />
            </Button>
          </div>
        </div>

        {previewedImage && (
          <QuizImage
            imageURL={previewedImage.image}
            imageName={previewedImage.name}
            handleDelete={handleImageDelete}
          />
        )}
      </div>
    </HandleErrorLoad>
  )
}

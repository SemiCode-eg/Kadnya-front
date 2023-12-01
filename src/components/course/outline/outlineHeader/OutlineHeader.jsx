/* eslint-disable react/prop-types */
import { DotsThree } from '@phosphor-icons/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SettingMenu from '../../../menu'
import imageSquare from '../../../../assets/images/courses/ImageSquare.png'
import { deleteCourse } from '../../../../api/course'
import AddContentButton from './AddContentButton'

function OutlineHeader({
  courseData,
  showContentBtn = true,
  setSuccessSubmit = () => {},
  setRefetch = () => {},
}) {
  const [deleteLoading, setDeleteLoading] = useState(false)
  const [deleteErrorMsg, setDeleteErrorMsg] = useState('')
  const navigate = useNavigate()

  const handleDeleteCourse = id => {
    setSuccessSubmit('')
    setDeleteErrorMsg('')
    setDeleteLoading(true)

    deleteCourse(id).then(data => {
      setDeleteLoading(false)
      if (data.request.status === 200 || data.status === 204) {
        setSuccessSubmit('Deleted Successfully')
        setTimeout(() => navigate(`/products/courses`), 400)
      } else {
        setDeleteErrorMsg('Server error, try again later!')
      }
    })
  }

  return (
    <div className="mb-2 flex gap-5 flex-col lg:flex-row">
      <div className="flex justify-between gap-[35px] flex-1 flex-col lg:flex-row flex-wrap">
        <div className="flex items-center flex-col sm:flex-row gap-[20px] flex-1">
          <div className="w-[140px] h-[114px] bg-white rounded-[10px] shadow-1">
            <img
              src={courseData?.image ? courseData?.image : imageSquare}
              alt="course image"
              className={`w-full h-full ${
                courseData?.image ? 'object-cover' : 'object-contain'
              } rounded-[10px]`}
            />
          </div>

          <div className="text-gray-950 capitalize text-[20px] flex flex-col items-start">
            <p>{courseData?.title}</p>
            <p className="text-gray-400 font-normal text-sm">
              {courseData?.ReleaseDate}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[20px] flex-1 justify-end">
          <SettingMenu
            id={courseData?.id}
            buttonIcon={<DotsThree size={35} weight="bold" />}
            isPreview={false}
            handleDelete={handleDeleteCourse}
            deleteErrorMsg={deleteErrorMsg}
            deleteLoading={deleteLoading}
          />
          {showContentBtn && (
            <AddContentButton
              courseData={courseData}
              setRefetch={setRefetch}
              setSuccessSubmit={setSuccessSubmit}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default OutlineHeader

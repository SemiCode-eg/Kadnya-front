/* eslint-disable react/prop-types */
import { DotsThree } from '@phosphor-icons/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SettingMenu from '../../../menu'
import imageSquare from '../../../../assets/images/courses/ImageSquare.png'
import { deleteCourse } from '../../../../api/course'
import AddContentButton from './AddContentButton'
import OutlineHeaderInfo from './OutlineHeaderInfo'

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
        <OutlineHeaderInfo
          title={courseData?.title}
          image={courseData?.image ? courseData?.image : imageSquare}
          releaseDate={courseData?.ReleaseDate}
        />
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

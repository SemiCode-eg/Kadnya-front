import { useParams } from 'react-router-dom'
import SearchInput from '../../../components/SearchInput'
import useCourse from '../../../hooks/use-course'
import OutlineHeader from '../../../components/course/outline/outlineHeader/OutlineHeader'
import Container from '../Container'
import HandleErrorLoad from '../../../components/handleErrorLoad'
import { useState } from 'react'
import { Typography } from '@mui/material'
import OutlineBody from '../../../components/course/outline/outlineBody/OutlineBody'

function Outline() {
  const [refetch, setRefetch] = useState(false)
  const [searchData, setSearchData] = useState(null)
  const [searchLoading, setSearchLoading] = useState(false)
  const [successSubmit, setSuccessSubmit] = useState('')
  const { id } = useParams()
  const { courseData, errorMsg, loading } = useCourse(id, refetch)

  return (
    <>
      <OutlineHeader
        courseData={courseData}
        setSuccessSubmit={setSuccessSubmit}
        setRefetch={setRefetch}
      />
      <HandleErrorLoad
        loading={loading}
        errorMsg={errorMsg}
        successMsg={successSubmit}
        setSuccessMsg={setSuccessSubmit}>
        <Container>
          <SearchInput
            placeholder="Find module or lesson"
            setData={setSearchData}
            URL={`courses/${id}/?q=`}
            handleLoading={setSearchLoading}
          />
          <HandleErrorLoad loading={searchLoading} errorMsg={errorMsg}>
            <div className="my-8">
              <p className="text-sky-950 text-[20px] font-semibold text-start">
                {(searchData || courseData)?.modules?.length || 0} Modules
              </p>
            </div>
            {(searchData || courseData)?.modules?.length === 0 ? (
              <Typography>Can&apos;t find these modules</Typography>
            ) : (
              <OutlineBody
                data={searchData || courseData}
                setRefetch={setRefetch}
              />
            )}
          </HandleErrorLoad>
        </Container>
      </HandleErrorLoad>
    </>
  )
}

export default Outline

import SearchInput from '../../../components/SearchInput'
import { useState } from 'react'
import ProgramsHead from '../../../components/coaching/programs/ProgramsHead'
import ProgramsCards from '../../../components/coaching/programs/ProgramsCards'
import HandleErrorLoad from '../../../components/handleErrorLoad'
import useCoachPrograms from '../../../hooks/use-coach-programs'

function CoachingPrograms() {
  const [searchData, setSearchData] = useState(null)
  const [searchLoading, setSearchLoading] = useState(false)
  const [refetch, setRefetch] = useState(false)
  const { programsData, errorMsg, loading } = useCoachPrograms(refetch)

  const handleSearchLoading = newValue => {
    setSearchLoading(newValue)
  }

  return (
    <div>
      <SearchInput
        setData={setSearchData}
        // URL="courses/?q="
        handleLoading={handleSearchLoading}
        placeholder="Search for programs"
      />
      <section className="px-3 pb-6">
        <ProgramsHead count={programsData.length} setRefetch={setRefetch} />
        <HandleErrorLoad loading={loading || searchLoading} errorMsg={errorMsg}>
          <ProgramsCards data={programsData} setRefetch={setRefetch} />
        </HandleErrorLoad>
      </section>
    </div>
  )
}

export default CoachingPrograms
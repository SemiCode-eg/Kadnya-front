import SearchInput from '../../../components/SearchInput';
import { useState } from 'react';
import ProgramsHead from '../../../components/coaching/programs/ProgramsHead';
import ProgramsCards from '../../../components/coaching/programs/ProgramsCards';

function CoachingPrograms() {
  const [searchData, setSearchData] = useState(null);
  const [searchLoading, setSearchLoading] = useState(false);
  const [refetch, setRefetch] = useState(false);

  const handleSearchLoading = (newValue) => {
    setSearchLoading(newValue);
  };

  return (
    <div>
      <SearchInput
        setData={setSearchData}
        // URL="courses/?q="
        handleLoading={handleSearchLoading}
        placeholder="Search for program"
      />
      <section className="px-3 pb-6">
        <ProgramsHead count={programs.length} />
        <ProgramsCards data={programs} setRefetch={setRefetch} />
      </section>
    </div>
  );
}

export default CoachingPrograms;

const programs = [
  {
    id: 1,
    image:
      'https://t3.ftcdn.net/jpg/00/92/53/56/240_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg',
    title: 'Dummy Program 1',
    programType: '1:1 Coaching',
    sessions: 5,
    subscribersCount: 10,
  },
  {
    id: 2,
    image:
      'https://t3.ftcdn.net/jpg/00/92/53/56/240_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg',
    title: 'Dummy Program 2',
    programType: '1:1 Coaching',
    sessions: 5,
    subscribersCount: 20,
  },
  {
    id: 3,
    image:
      'https://t3.ftcdn.net/jpg/00/92/53/56/240_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg',
    title: 'Dummy Program 3',
    programType: '1:1 Coaching',
    sessions: 5,
    subscribersCount: 15,
  },
];

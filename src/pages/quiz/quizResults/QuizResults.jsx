import { useState } from 'react';
import SearchInput from '../../../components/SearchInput';

function QuizResults() {
  const [searchData, setSearchData] = useState(null);
  const [searchLoading, setSearchLoading] = useState(false);

  return (
    <div>
      <SearchInput
        placeholder="Find results"
        setData={setSearchData}
        // URL={`courses/${id}/?q=`}
        handleLoading={setSearchLoading}
      />
      <div className="text-teal-500 font-bold text-3xl flex justify-center mt-5">
        Comming Soon
      </div>
    </div>
  );
}

export default QuizResults;

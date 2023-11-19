import ResultsTable from '../../../components/quiz/resultsTable/ResultsTable';

function createData(id, name, email, date, result) {
  const [day, month, year] = date.split('/');
  const formattedDate = new Date(`${year}-${month}-${day}`);

  return {
    id,
    name,
    email,
    date: formattedDate,
    result,
  };
}

const rows = [
  createData(1, 'name1', 'email@email.com', '19/1/2020', 67),
  createData(2, 'name2', 'email@email.com', '19/1/2021', 51),
  createData(3, 'name3', 'email@email.com', '19/1/2020', 24),
  createData(4, 'name4', 'email@email.com', '19/2/2020', 24),
  createData(5, 'name5', 'email@email.com', '19/1/2020', 60),
  createData(6, 'name6', 'email@email.com', '19/1/2020', 100),
  createData(7, 'name7', 'email@email.com', '19/1/2020', 50),
];

function QuizResults() {
  return rows.length > 0 ? (
    <ResultsTable rows={rows} />
  ) : (
    <div>
      <p className="text-teal-500 font-bold text-xl mt-10">No results to show</p>
      <p className="text-sm">
        Once your quiz is published, return here to view the results.
      </p>
    </div>
  );
}

export default QuizResults;

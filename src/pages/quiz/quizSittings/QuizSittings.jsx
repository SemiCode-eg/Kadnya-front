import { useState } from 'react';
import Details from './Details';
import Grading from './Grading';

function QuizSittings() {
  const [title, setTitle] = useState('');
  const [titleErrorMsg, setTitleErrorMsg] = useState('');
  const [description, setDescription] = useState('');
  const [descriptionErrorMsg, setDescriptionErrorMsg] = useState('');
  const [passingGrade, setPassingGrade] = useState(0);
  const [hideAnswers, setHideAnswers] = useState(false);

  return (
    <form className="flex flex-col gap-5">
      <Details
        title={title}
        setTitle={setTitle}
        titleErrorMsg={titleErrorMsg}
        setTitleErrorMsg={setTitleErrorMsg}
        description={description}
        setDescription={setDescription}
        descriptionErrorMsg={descriptionErrorMsg}
        setDescriptionErrorMsg={setDescriptionErrorMsg}
      />
      <Grading
        passingGrade={passingGrade}
        setPassingGrade={setPassingGrade}
        hideAnswers={hideAnswers}
        setHideAnswers={setHideAnswers}
      />
    </form>
  );
}

export default QuizSittings;

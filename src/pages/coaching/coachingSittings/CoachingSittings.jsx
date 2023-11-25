import { useRef } from 'react';
import SchedulingOptions from '../../../components/coaching/settings/SchedulingOptions';
import Availability from '../../../components/coaching/settings/Availability';

function CoachingSittings() {
  const coachingFormRef = useRef();
  
  return (
    <form className="flex flex-col gap-5">
      <Availability />
      <SchedulingOptions />
      <button hidden ref={coachingFormRef} />
    </form>
  );
}

export default CoachingSittings;

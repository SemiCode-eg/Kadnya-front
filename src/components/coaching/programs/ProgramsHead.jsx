/* eslint-disable react/prop-types */
import { Typography } from '@mui/material';
import MainButton from '../../mainButton/MainButton';
import { Plus } from '@phosphor-icons/react';

function ProgramsHead({ count }) {
  return (
    <div className="flex sm:flex-row flex-col justify-between items-center w-full gap-5 my-8">
      <Typography
        variant="h5"
        component="h3"
        classes={{ root: 'w-full sm:text-start' }}
      >
        <span className="font-bold">{count}</span> Programs
      </Typography>
      <MainButton
        text="New Coaching Program"
        icon={<Plus size={25} />}
        className="whitespace-nowrap"
      />
    </div>
  );
}

export default ProgramsHead;

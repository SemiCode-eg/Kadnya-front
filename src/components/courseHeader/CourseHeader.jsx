import { Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from '@phosphor-icons/react';

function CourseHeader() {
  return (
    <Typography variant="h5" color="blue-gray" className="mb-2">
      <div className="flex items-center gap-[9px]">
        <Link
          to={-1}
          className="w-[50px] h-[50px] text-white rounded-full flex items-center justify-center duration-100 ease-out bg-gradient-to-r from-violet-300 to-teal-300 hover:from-transparent hover:to-transparent hover:text-sky-950 hover:border-[2px] hover:border-teal-300"
        >
          <ArrowLeft size={35} />
        </Link>
        <p className="text-sky-950 text-[31px]">Course</p>
      </div>
    </Typography>
  );
}

export default CourseHeader;

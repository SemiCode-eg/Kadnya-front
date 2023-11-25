import { Typography } from '@mui/material';
import Preview from '../../../../components/preview/Preview';

/* eslint-disable react/prop-types */
export default function AddCoursePreview({
  title,
  description,
  backgroundColor = '#14b8a6',
}) {
  return (
    <Preview color="sky-950">
      <div className="flex flex-col items-start">
        <div
          className="w-16 bg-teal-500 h-3 rounded-3xl my-3 mx-5"
          style={{ backgroundColor: backgroundColor }}
        ></div>
        <div className="flex flex-col items-center justify-center bg-white py-3 w-full">
          <Typography variant="h5" component="span" gutterBottom>
            {title === '' ? 'title' : title}
          </Typography>
          <Typography component="span" gutterBottom>
            {description === '' ? 'description' : description}
          </Typography>

          <div
            className="w-20 bg-teal-500 h-5 rounded-sm"
            style={{ backgroundColor: backgroundColor }}
          ></div>
        </div>
      </div>
    </Preview>
  );
}

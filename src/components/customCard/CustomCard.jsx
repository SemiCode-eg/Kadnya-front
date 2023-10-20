/* eslint-disable react/prop-types */
import { Card, CardBody } from '@material-tailwind/react';

function CustomCard({ children, titleComponent }) {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      {titleComponent && titleComponent}
      <Card
        className="mt-6 ml-5 p-8 w-5/6 h-full text-center
            flex justify-center border rounded-md shadow"
      >
        <CardBody>{children}</CardBody>
      </Card>
    </div>
  );
}

export default CustomCard;

/* eslint-disable react/prop-types */
import { Card, CardBody } from '@material-tailwind/react';

function CustomCard({ children, titleComponent }) {
  return (
    <main className="flex flex-col justify-center items-center w-10/12 mx-auto gap-8">
      {titleComponent && titleComponent}
      <Card className="w-full text-center flex justify-center border rounded-md shadow p-5">
        <CardBody className="flex flex-col gap-3">{children}</CardBody>
      </Card>
    </main>
  );
}

export default CustomCard;

import { Receipt, ReceiptX } from '@phosphor-icons/react';
import MainButton from '../mainButton/MainButton';
import { Typography } from '@mui/material';

/* eslint-disable react/prop-types */
function PaidMethod({
  price,
  onChangePrice,
  onChangePricingType,
  pricingType,
}) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex gap-3 w-full">
        <MainButton
          text="Free"
          icon={<ReceiptX size={30} />}
          isForm
          isPrimary={false}
          handleClick={() => {
            onChangePricingType('FREE');
          }}
          className={`!rounded-sm text-lg sm:px-8 sm:py-3 !px-5 flex-1 ${
            pricingType !== 'FREE'
              ? 'bg-transparent !text-teal-500 hover:!bg-teal-500 hover:!text-white'
              : 'hover:!text-white hover:!bg-teal-500'
          }`}
        />
        <MainButton
          text="Paid"
          icon={<Receipt size={30} />}
          isForm
          isPrimary={false}
          handleClick={() => {
            onChangePricingType('PAID');
          }}
          className={`!rounded-sm text-lg sm:px-8 sm:py-3 !px-5 flex-1 ${
            pricingType !== 'PAID'
              ? 'bg-transparent !text-teal-500 hover:!bg-teal-500 hover:!text-white'
              : 'hover:!text-white hover:!bg-teal-500'
          }`}
        />
      </div>
      {pricingType === 'PAID' && (
        <div className="flex flex-col gap-2">
          <Typography
            id="add-course-form-pricing-type"
            component="label"
            variant="subtitle1"
          >
            Price
          </Typography>
          <input
            type="number"
            className="border py-4 px-4 outline-none"
            value={price}
            onChange={onChangePrice}
            min={0}
          />
        </div>
      )}
    </div>
  );
}

export default PaidMethod;

import PaidMethod from '../../../paidMethod/PaidMethod';
import { formReducerKeys } from './CreateProgramReducer';

/* eslint-disable react/prop-types */
function ProgramPaidMethod({ dispatchFormData, priceValue, pricingTypeValue }) {
  const handlePricingType = (value) => {
    dispatchFormData({ type: formReducerKeys.setPricingType, payload: value });
  };

  const handlePrice = (event) => {
    dispatchFormData({
      type: formReducerKeys.setPrice,
      payload: event.target.value,
    });
  };

  return (
    <div className="w-full flex flex-col gap-5">
      <p className="text-xl font-semibold">Price your Coaching Program</p>
      <PaidMethod
        onChangePrice={handlePrice}
        onChangePricingType={handlePricingType}
        price={priceValue}
        pricingType={pricingTypeValue}
      />
    </div>
  );
}

export default ProgramPaidMethod;

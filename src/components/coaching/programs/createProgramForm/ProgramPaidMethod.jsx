import useProgramReducer from '../../../../hooks/use-program-reducer'
import PaidMethod from '../../../paidMethod/PaidMethod'

/* eslint-disable react/prop-types */
function ProgramPaidMethod({ dispatchFormData, priceValue, pricingTypeValue }) {
  const { formReducerKeys } = useProgramReducer()

  const handlePricingType = value => {
    dispatchFormData({ type: formReducerKeys.SET_PRICING_TYPE, payload: value })
  }

  const handlePrice = event => {
    dispatchFormData({
      type: formReducerKeys.SET_PRICE,
      payload: event.target.value,
    })
  }

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
  )
}

export default ProgramPaidMethod

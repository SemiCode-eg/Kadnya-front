import { Plus } from '@phosphor-icons/react'
import MainButton from '../../../../mainButton/MainButton'

function TimingFooter({ handleAddAvailability = () => {} }) {
  return (
    <div className="flex justify-between items-end gap-5">
      <div>
        <MainButton
          text="Add availability"
          icon={<Plus size={20} />}
          className="text-teal-500 !px-3.5 text-sm font-[500] border-[1px] border-teal-500 duration-150 hover:text-white hover:bg-teal-500"
          handleClick={handleAddAvailability}
          isPrimary={false}
        />
      </div>
      <p className="text-sm text-neutral-400">
        All times are being displayed in Riyadh.
      </p>
    </div>
  )
}

export default TimingFooter

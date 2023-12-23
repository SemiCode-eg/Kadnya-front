import MainButton from "../../../mainButton/MainButton"

function FormFooter({onClose, submitLoading}) {
  return (
    <div className="self-end flex">
    <MainButton
      text="Cancel"
      className="text-teal-500 text-[17px] font-[500] border-[1px] border-teal-500 duration-150 hover:text-white hover:bg-teal-500"
      handleClick={onClose}
      isPrimary={false}
    />
    <MainButton
      text={submitLoading ? 'Adding...' : 'Add'}
      isForm={true}
      type="submit"
    />
  </div>
  )
}

export default FormFooter

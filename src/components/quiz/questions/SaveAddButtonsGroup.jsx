import { Button } from '@mui/material'
import { PlusCircle } from '@phosphor-icons/react'
import MainButton from '../../mainButton/MainButton'

export default function SaveAddButtonsGroup({
  onAddQuestion = () => {},
  onSave = () => {},
}) {
  return (
    <div className="w-full flex justify-center items-center gap-5 mt-9">
      <Button
        variant="outlined"
        className="!px-8 !py-3 !rounded-lg !normal-case !text-lg"
        startIcon={<PlusCircle />}
        onClick={onAddQuestion}>
        Add Question
      </Button>
      <MainButton text="Save" isForm className="text-lg" handleClick={onSave} />
    </div>
  )
}

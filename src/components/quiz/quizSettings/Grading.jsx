/* eslint-disable react/prop-types */
import { FormControlLabel, Switch, styled } from '@mui/material'

function Grading({
  passingGrade = 0,
  setPassingGrade,
  hideAnswers = true,
  setHideAnswers,
  showPassingGrade = false,
  setShowPassingGrade,
}) {
  return (
    <div className="border-[1.5px] border-[#ddd] rounded-[10px] p-6">
      <p className="w-full mx-auto text-sky-950 font-[600] text-xl tracking-[-0.25px] mb-8">
        Grading
      </p>
      <div className="flex flex-col gap-6">
        <div className="flex items-start justify-between gap-5 flex-wrap">
          <FormControlLabel
            control={
              <GradingSwitch
                checked={showPassingGrade}
                onChange={e => setShowPassingGrade(e.target.checked)}
              />
            }
            label={
              <div className="flex flex-col items-start w-full">
                <p className="font-[500] text-md">Set a passing grade</p>
                <p className="text-zinc-400 text-sm text-left">
                  Tip: For a non-graded quiz, toggle off passing grade and
                  grading on all questions.
                </p>
              </div>
            }
            className="!text-sky-950 !items-start !self-end"
          />
          {showPassingGrade && (
            <div className="flex flex-col gap-2 items-start w-[140px]">
              <label htmlFor="" className="font-[500] text-md text-sky-950">
                Passing grade
              </label>
              <div className="relative w-full">
                <input
                  type="number"
                  value={passingGrade}
                  onChange={e =>
                    setPassingGrade(e.target.value > 100 ? 100 : e.target.value)
                  }
                  min={0}
                  max={100}
                  className="w-full border-[2px] rounded-[10px] border-zinc-200 outline-none pl-1.5 pr-5 py-1 focus:duration-200 focus:ease-in focus:border-teal-500"
                />
                <span className="text-zinc-400 absolute right-[6px] top-[50%] -translate-y-[50%]">
                  &#37;
                </span>
              </div>
            </div>
          )}
        </div>
        <FormControlLabel
          control={
            <GradingSwitch
              checked={hideAnswers}
              onChange={e => setHideAnswers(e.target.checked)}
            />
          }
          label={
            <div className="flex flex-col items-start w-full">
              <p className="font-[500] text-md">Hide answers on results page</p>
              <p className="text-zinc-400 text-sm text-left">
                Members will not be able to view correct answers when they
                choose an incorrect response.
              </p>
            </div>
          }
          className="!text-sky-950 !items-start"
        />
      </div>
    </div>
  )
}

export default Grading

const GradingSwitch = styled(Switch)(() => ({
  '& .MuiSwitch-switchBase': {
    '&.Mui-checked': {
      '& + .MuiSwitch-track': {
        backgroundColor: 'rgb(20, 184, 166)',
      },
      '& .MuiSwitch-thumb': {
        backgroundColor: 'rgb(20, 184, 166)',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: 'white',
  },
  '& .MuiSwitch-track': {
    backgroundColor: '#777',
  },
}))

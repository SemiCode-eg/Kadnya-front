import RadioInput from '../../../customRadioInput/RadioInput';

/* eslint-disable react/prop-types */
function SessionType({ dispatchFormData, selectedValue, reducerType }) {
  return (
    <>
      <p className="w-full text-black">
        Choose how you want to make your podcast
      </p>
      
      <RadioInput
        selectedValue={selectedValue}
        handleSelect={(value) =>
          dispatchFormData({
            type: reducerType,
            payload: value,
          })
        }
        radioValue="SINGLE"
        radioLabel="Single session"
        radioSublabel="Create a standalone coaching session."
        radioLabelClasses="text-lg text-slate-700"
        radioSublabelClasses={`text-sm ${
          selectedValue === 'SINGLE' ? 'text-zinc-100' : 'text-slate-400'
        }`}
        backgroundColor="#F66A82"
      />

      <RadioInput
        selectedValue={selectedValue}
        handleSelect={(value) =>
          dispatchFormData({
            type: reducerType,
            payload: value,
          })
        }
        radioValue="PACKAGE"
        radioLabel="Package"
        radioSublabel="Build a program with multiple coaching sessions."
        radioLabelClasses="text-lg text-slate-700"
        radioSublabelClasses={`text-sm ${
          selectedValue === 'PACKAGE' ? 'text-zinc-100' : 'text-slate-400'
        }`}
        backgroundColor="#F66A82"
      />
    </>
  );
}

export default SessionType;

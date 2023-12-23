import TextField from '../../../customFields/TextField'

function TitleField({ title, setTitle }) {
  return (
    <div className="flex flex-col gap-1 items-start w-full">
      <p className="font-semibold text-md">Title</p>
      <TextField
        placeholder="Add session title here."
        value={title}
        handleChange={e => setTitle(e.target.value)}
        id="session title"
      />
    </div>
  )
}

export default TitleField

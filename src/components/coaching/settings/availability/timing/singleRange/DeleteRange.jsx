import { Trash } from "@phosphor-icons/react"

function DeleteRange({id, dispatchSettingsData, settingsReducerKey}) {
  const handleDelete = id => {
    dispatchSettingsData({
      type: settingsReducerKey.DELETE_AVAILABILITY,
      payload: id,
    })
  }

  return (
    <button
      type="button"
      className="absolute right-1 bottom-1 duration-150 ease-out hover:bg-red-500/5 p-1 rounded-md"
      title="Delete"
      onClick={() => handleDelete(id)}>
      <Trash weight="fill" className="text-red-500" />
    </button>
  )
}

export default DeleteRange

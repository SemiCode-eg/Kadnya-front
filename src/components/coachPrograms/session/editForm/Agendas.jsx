import { Button, Typography } from '@mui/material'
import Agenda from './Agenda'
import { Plus } from '@phosphor-icons/react'

export default function Agendas({
  agendas,
  addAgenda,
  deleteAgenda,
  editAgenda,
}) {
  return (
    <div className="flex flex-col gap-4 items-start">
      <Typography variant="h6">Agenda</Typography>

      {agendas?.length ? (
        <ul className="w-full flex flex-col gap-3 ml-3">
          {agendas?.map((agenda, index) => (
            <Agenda
              key={`agenda-${index}`}
              index={index}
              agenda={agenda}
              deleteAgenda={deleteAgenda}
              editAgenda={editAgenda}
            />
          ))}
        </ul>
      ) : (
        <p className="ml-3">No agendas added yet!</p>
      )}

      <Button
        className="!capitalize !text-gray-800"
        startIcon={<Plus />}
        onClick={addAgenda}>
        Add Agenda
      </Button>
    </div>
  )
}

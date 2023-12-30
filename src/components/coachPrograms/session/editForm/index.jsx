import { Card } from '@mui/material'
import TextField from '../../../customFields/TextField'
import RichTextEditor from '../../../richTextEditor/RichTextEditor'
import Agendas from './Agendas'
import Resources from './Resources'
import { sessionKeys } from '../../../../hooks/use-coach-session-reducer'
import ButtonGroup from './ButtonGroup'
import HandleErrorLoad from '../../../handleErrorLoad'

export default function EditForm({
  session,
  dispatchSession,
  onSave,
  onDelete,
  setError,
}) {
  return (
    <HandleErrorLoad>
      <Card className="w-full flex flex-col gap-4 mt-5 p-7 !border !rounded-2xl !shadow">
        <div className="flex flex-col gap-1 items-start">
          <label>Title</label>
          <TextField
            placeholder="Title"
            className="w-full"
            value={session.title}
            handleChange={event =>
              dispatchSession({
                type: sessionKeys.SET_TITLE,
                payload: event.target.value,
              })
            }
          />
        </div>

        <div className="flex flex-col gap-1 items-start">
          <label>Session Description</label>
          <RichTextEditor
            description={session.description}
            setDescription={value =>
              dispatchSession({
                type: sessionKeys.SET_DESCRIPTION,
                payload: value,
              })
            }
            containerClass="w-full"
          />
        </div>

        <Agendas
          agendas={session.agendas}
          addAgenda={() => {
            if (
              session.agendas?.at(-1)?.trim() === '' &&
              session.agendas?.length !== 0
            )
              return setError('Please, fill the agenda you added!')
            dispatchSession({ type: sessionKeys.ADD_AGENDA })
          }}
          deleteAgenda={index =>
            dispatchSession({
              type: sessionKeys.REMOVE_AGENDA,
              payload: index,
            })
          }
          editAgenda={(index, agenda) =>
            dispatchSession({
              type: sessionKeys.EDIT_AGENDA,
              payload: { index, agenda },
            })
          }
        />

        <Resources
          fileResources={session.fileResources}
          addFileResource={fileResource => {
            dispatchSession({
              type: sessionKeys.ADD_FILE_RESOURCE,
              payload: fileResource,
            })
          }}
          deleteFileResource={index =>
            dispatchSession({
              type: sessionKeys.REMOVE_FILE_RESOURCE,
              payload: index,
            })
          }
          linkResources={session.linkResources}
          addLinkResources={() => {
            if (
              session.linkResources?.at(-1)?.trim() === '' &&
              session.linkResources?.length !== 0
            )
              return setError('Please, fill the resource link you added!')
            dispatchSession({
              type: sessionKeys.ADD_LINK_RESOURCE,
            })
          }}
          deleteLinkResource={index =>
            dispatchSession({
              type: sessionKeys.REMOVE_LINK_RESOURCE,
              payload: index,
            })
          }
          editLinkResource={(index, linkResource) =>
            dispatchSession({
              type: sessionKeys.EDIT_LINK_RESOURCE,
              payload: { index, linkResource },
            })
          }
          setError={setError}
        />

        <ButtonGroup onSave={onSave} onDelete={onDelete} />
      </Card>
    </HandleErrorLoad>
  )
}

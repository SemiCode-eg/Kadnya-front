import { useReducer } from 'react'

export default function useCoachSessionReducer() {
  const [session, dispatchSession] = useReducer(reducer, initialSession)

  return { session, dispatchSession, sessionKeys }
}

export const sessionKeys = {
  INIT: 'INIT',
  SET_TITLE: 'SET_TITLE',
  SET_DESCRIPTION: 'SET_DESCRIPTION',
  ADD_AGENDA: 'ADD_AGENDAS',
  REMOVE_AGENDA: 'REMOVE_AGENDA',
  EDIT_AGENDA: 'EDIT_AGENDA',
  ADD_FILE_RESOURCE: 'ADD_FILE_RESOURCE',
  REMOVE_FILE_RESOURCE: 'REMOVE_FILE_RESOURCE',
  EDIT_FILE_RESOURCE: 'EDIT_FILE_RESOURCE',
  ADD_LINK_RESOURCE: 'ADD_LINK_RESOURCE',
  REMOVE_LINK_RESOURCE: 'REMOVE_LINK_RESOURCE',
  EDIT_LINK_RESOURCE: 'EDIT_LINK_RESOURCE',
}

const initialSession = {
  title: '',
  description: '',
  agendas: [],
  fileResource: [],
  linkResources: [],
}

const reducer = (state, action) => {
  const payload = action?.payload
  switch (action.type) {
    case sessionKeys.INIT:
      return payload

    case sessionKeys.SET_TITLE:
      return { ...state, title: payload }

    case sessionKeys.SET_DESCRIPTION:
      return { ...state, description: payload }

    case sessionKeys.ADD_AGENDA:
      return { ...state, agendas: [...state.agendas, ''] }

    case sessionKeys.REMOVE_AGENDA:
      return {
        ...state,
        agendas: state.agendas.filter((_, index) => index != payload),
      }

    case sessionKeys.EDIT_AGENDA:
      return {
        ...state,
        agendas: state.agendas.map((agenda, index) =>
          index === payload.index ? payload.agenda : agenda,
        ),
      }

    case sessionKeys.ADD_FILE_RESOURCE:
      return { ...state, fileResources: [...state.fileResources, payload] }

    case sessionKeys.REMOVE_FILE_RESOURCE:
      return {
        ...state,
        fileResources: state.fileResources.filter(
          (_, index) => index != payload,
        ),
      }

    case sessionKeys.ADD_LINK_RESOURCE:
      return { ...state, linkResources: [...state.linkResources, ''] }

    case sessionKeys.REMOVE_LINK_RESOURCE:
      return {
        ...state,
        linkResources: state.linkResources.filter(
          (_, index) => index != payload,
        ),
      }

    case sessionKeys.EDIT_LINK_RESOURCE:
      return {
        ...state,
        linkResources: state.linkResources.map((linkResource, index) =>
          index === payload.index ? payload.linkResource : linkResource,
        ),
      }
  }
}

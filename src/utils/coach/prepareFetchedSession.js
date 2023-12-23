export const prepareFetchedSession = sessionData => {
  return {
    id: sessionData.id,
    title: sessionData.title,
    description: sessionData.description,
    agendas: sessionData.agendas,
    fileResources: sessionData.file_resourses,
    linkResources: sessionData.link_resourses,
  }
}

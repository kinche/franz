export interface RepositoryPreviewProps {
  repository: {
    id: string
    lastJob: {
      branch: string
      date: string
      id: string
    }
    name: string
    organization: string
  }
}

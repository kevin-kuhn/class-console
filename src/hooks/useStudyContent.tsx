import useSWR from 'swr'
import { IContentChildren, IResponse } from '../models'

interface Props {
  slug: string | null
}

export const useStudyContent = ({ slug }: Props) => {
  const { data, error } = useSWR(
    slug ? () => '/desafio-mesalva-web/' + slug : null
  )

  const children = (data?.result.children as IContentChildren[]) ?? []

  return {
    title: data?.result.title,
    studyType: data?.result.type,
    studyDescription: data?.result.description,
    data: children,
    error: error,
    isLoading: !data && !error
  }
}

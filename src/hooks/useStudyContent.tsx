import useSWR from 'swr'
import { IContentChildren, IResponse } from '../models'

interface Props {
  slug: string | null
}

export const useStudyContent = ({ slug }: Props) => {
  const { data, error } = useSWR(
     () => '/desafio-mesalva-web/' + slug
  )

	const children = (data?.result.children as IContentChildren[]) ?? []

  return {
		title: data?.result.title,
		studyType: data?.result.type,
    data: children,
    error: error,
    isLoading: !data && !error
  }
}

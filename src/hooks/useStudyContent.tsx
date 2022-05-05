import useSWR from 'swr'
import { IResponse } from '../models'

interface Props {
  slug: string
}

export const useStudyContent = ({ slug }: Props) => {
  const { data, error } = useSWR(() => '/desafio-mesalva-web/' + slug)

  return {
    data: data as IResponse,
    error: error,
    isLoading: !data && !error
  }
}

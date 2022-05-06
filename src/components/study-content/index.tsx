import { useEffect } from 'react'
import { useClass } from '../../contexts/ClassContext'
import { useStudyContent } from '../../hooks/useStudyContent'

const StudyContent: React.FC = () => {
  const { currentStudy } = useClass()
  const { data, isLoading } = useStudyContent({
    slug: currentStudy?.slug ?? null
  })
	useEffect(() => {
		console.log(data)
	}, [data])
  return <div></div>
}

export default StudyContent

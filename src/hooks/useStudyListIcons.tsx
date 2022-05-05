import { StudyListType } from '../enums/study-list-type'

import { VideoIcon, ExerciseIcon, TextIcon } from '../components/icons'

export const useStudyListIcons = () => {
  const RESOLVE_ICONS = {
    [StudyListType.TEXT]: <TextIcon />,
    [StudyListType.EXERCISE]: <ExerciseIcon />,
    [StudyListType.VIDEO]: <VideoIcon />
  }

	return {
		RESOLVE_ICONS: RESOLVE_ICONS as any
	}
}

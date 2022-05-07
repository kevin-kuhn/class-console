import { render } from '../../../../test/test-utils'
import ExerciseContent from '../index'

import { IAnswer, IExercice } from '../../../../models'

import '@testing-library/jest-dom'

describe('ExerciseContent', () => {
  it('should be in document', () => {
    const { container } = render(
      <ExerciseContent
        result={{ answers: [] as IAnswer[] } as IExercice}
        title="Teste"
        handleOnDoneStudy={() => {}}
      />
    )

    expect(container).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = render(
      <ExerciseContent
        result={{ answers: [] as IAnswer[] } as IExercice}
        title="Teste"
        handleOnDoneStudy={() => {}}
      />
    )

    expect(container).toMatchSnapshot()
  })
})

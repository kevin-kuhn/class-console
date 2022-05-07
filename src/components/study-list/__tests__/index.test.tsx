import { render } from '../../../test/test-utils'
import StudyList from '../index'

import '@testing-library/jest-dom'

describe('StudyList', () => {
  it('should be in document', () => {
    const { container } = render(
      <StudyList items={[]} onChangeStudy={() => {}} />
    )

    expect(container).toBeInTheDocument()
  })

  it('should match snapshot when empty', () => {
    const { container } = render(
      <StudyList items={[]} onChangeStudy={() => {}} />
    )

    expect(container).toMatchSnapshot()
  })

  it('should match snapshot when full', () => {
    const { container } = render(
      <StudyList
        items={[
          {
            type: 'video',
            title: 'Introdução à Geografia',
            slug: 'introducao-a-geografia'
          },
          {
            type: 'video',
            title: 'Coordenadas geográficas e fuso-horário',
            slug: 'coordenadas-geograficas-e-fusohorario'
          },
          {
            type: 'text',
            title: 'Material de apoio',
            slug: 'material-de-apoio'
          },
          {
            type: 'text',
            title:
              'Embate entre igualdade e globalização na sociedade contemporânea',
            slug: 'proposta-de-redacao'
          },
          {
            type: 'exercise',
            title: 'Exercício 1',
            slug: 'exercicio-1'
          },
          {
            type: 'exercise',
            title: 'Exercício 2',
            slug: 'exercicio-2'
          }
        ]}
        onChangeStudy={() => {}}
      />
    )

    expect(container).toMatchSnapshot()
  })
})

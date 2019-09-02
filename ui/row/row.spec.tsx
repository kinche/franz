/* eslint-env jest */

// Packages
import renderer from 'react-test-renderer'

// Components
import { Row } from './row'

// Interface
import { RowProps } from './row.interface'

const Component = (props: RowProps) => <Row {...props}>{props.children}</Row>

describe('Row', () => {
  it('should render row', () => {
    const component = renderer.create(<Component style={{ margin: 'auto' }}>children</Component>)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})

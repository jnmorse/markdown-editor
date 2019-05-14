import React from 'react'
import { shallow } from 'enzyme'

import App from './App'
import Editor from './components/Editor'
import Preview from './components/Preview'
import EditorNav from './components/Editor-Nav';

let wrapper
const loadDataSpy = jest.spyOn(App.prototype, 'loadData')
// App.prototype.componentDidMount = componentDidMountSpy

describe('<App />', () => {
  beforeAll(async () => {
    wrapper = shallow(<App />)
  })

  afterAll(() => {
    wrapper.unmount()
  })

  test('it should contain an <Editor />', () => {
    expect(wrapper.find(Editor)).toHaveLength(1)
  })

  test('it should show a <Preview />', () => {
    expect(wrapper.find(Preview)).toHaveLength(1)
  })

  test('it should show a <EditorNav />', () => {
    expect(wrapper.find(EditorNav)).toHaveLength(1)
  })

  test('loadData should have been called once', () => {
    expect(loadDataSpy).toHaveBeenCalledTimes(1)
  })

  test('when text is entered in Editor, we update state', () => {
    const text = '# some text'

    wrapper.instance().handleChange({ target: { value: text }})
    expect(wrapper.state('text')).toEqual(text)
    expect(wrapper.state('html')).toMatchObject({ __html: "<h1 id=\"some-text\">some text</h1>\n" })
  })

  test('handleToggleShow will change the view', () => {
    const view = 'preview'

    expect(wrapper.state('view')).toBe('editor')

    wrapper.instance().handleToggleShow(view)

    expect(wrapper.state('view')).toBe(view)
  })
})
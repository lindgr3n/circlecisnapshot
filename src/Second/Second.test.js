import React from 'react'
import ReactDOM from 'react-dom'
import Second from './Second'
import {shallow} from 'enzyme'

describe('<Test>', () => {
    it('Should render', () => {
        const root = document.createElement('div')
        ReactDOM.render(<Second />, root)
    })

    it('Should render with snapshot', () => {
        const output = shallow(<Second />)
        expect(output).toMatchSnapshot()
    })
})
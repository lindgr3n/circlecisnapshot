import React from 'react'
import ReactDOM from 'react-dom'
import Second from './Second'
import {shallow} from 'enzyme'
//import toJson from 'enzyme-to-json';

describe('<Test>', () => {
    it('Should render', () => {
        const root = document.createElement('div')
        ReactDOM.render(<Second />, root)
    })

    // Fails CircleCI
    it('Should render with snapshot', () => {
        const output = shallow(<Second />)
        //expect(toJson(output)).toMatchSnapshot()
        expect(output).toMatchSnapshot()
    })
})
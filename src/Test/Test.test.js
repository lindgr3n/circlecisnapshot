import React from 'react'
import ReactDOM from 'react-dom'
import Test from './Test'
import {shallow} from 'enzyme'

//import serializer from 'enzyme-to-json/serializer';
//expect.addSnapshotSerializer(serializer);

describe('<Test>', () => {
    it('Should render', () => {
        const root = document.createElement('div')
        ReactDOM.render(<Test />, root)
    })

    // Fails CircleCI
    it('Should render with snapshot', () => {
        const output = shallow(<Test />)
        expect(output).toMatchSnapshot()
    })
})
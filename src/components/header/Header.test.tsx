import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('Header Component', () => {

    let wrapper = shallow(<Header/>);

    beforeEach(() => {
        wrapper = shallow(<Header/>);
    })

    it('should wrap in header tag', () => {
        expect(wrapper.find('header')).toHaveLength(1);
    });

    it('should have a header title', () => {
        expect(wrapper.find('h1').text()).toEqual('MOVIES 4U');
    });

    it('should have a link', () => {
        const link = wrapper.find('Link');
        expect(link).toHaveLength(1);
        expect(link.getElement().props).toEqual({"children": <h1>MOVIES 4U</h1>, "to": "/"});
    });
});


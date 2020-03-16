import React from 'react';
import { shallow } from 'enzyme';
import { MoviesMock } from '../../mocks/Movies';
import Movies from './Movies';

describe('Movies Component', () => {

    const data = MoviesMock.results;

    let wrapper = shallow(<Movies result={data} />);
  
    beforeEach(() => {
        wrapper = shallow(<Movies result={data} />);
    });

    it('should render Movies component', () => {
        expect(wrapper.find('.movies')).toHaveLength(1);
    });

    it('should have list of movies', () => {
        expect(wrapper.find('.movies ul').children()).toHaveLength(7);
    });
});

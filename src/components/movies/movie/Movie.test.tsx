import React from 'react';
import { shallow } from 'enzyme';
import { MoviesMock } from '../../../mocks/Movies';
import Movie from './Movie';

describe('Movie Component', () => {

    const data = MoviesMock.results![0];

    let wrapper = shallow(<Movie result={data} />);
  
    beforeEach(() => {
        wrapper = shallow(<Movie result={data} />);
    });

    it('should render Movie component', () => {
        expect(wrapper.find('li.movie')).toHaveLength(1);
        expect(wrapper.find('.vote-average').text()).toEqual("6.6");
        expect(wrapper.find('.title-container').text()).toEqual("Fast & Furious Presents: Hobbs & Shaw");
        expect(wrapper.find('img').props().alt).toEqual("Fast & Furious Presents: Hobbs & Shaw");
        expect(wrapper.find('img').props().src).toContain("https://image.tmdb.org/t/p/w500//qAhedRxRYWZAgZ8O8pHIl6QHdD7.jpg");
    });

    it('should have a link href', () => {
        expect(wrapper.find('Link').props().to).toEqual("/movie/384018");
    });
});


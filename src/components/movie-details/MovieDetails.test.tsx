import React from 'react';
import { shallow } from 'enzyme';
import MovieDetails from './MovieDetails';
import { MovieDetailsMock } from '../../mocks/MovieDetailsMock';

describe('Header Component', () => {

  let wrapper = shallow(<MovieDetails {...MovieDetailsMock}/>);

  beforeEach(() => {
      wrapper = shallow(<MovieDetails {...MovieDetailsMock}/>);
  })
  
  it('should populate movie details', () => {
    expect(wrapper.find('img')).toHaveLength(6);
    expect(wrapper.find('.production_companies').children()).toHaveLength(5);
    expect(wrapper.find('.vote-average').text()).toEqual("7.6");
    expect(wrapper.find('h1').text()).toEqual('Batman Begins');
    expect(wrapper.find('.overview').text()).toEqual('Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City.  Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman.');
    expect(wrapper.find('.genres h3').text()).toEqual('Genres:');
    expect(wrapper.find('.genres .tags').children()).toHaveLength(3);
    expect(wrapper.find('.genres .tags').children().first().text()).toEqual("Action");
    expect(wrapper.find('.genres .tags').children().last().text()).toEqual("Drama");
    expect(wrapper.find('.release_date h3').text()).toEqual("Release date:");
    expect(wrapper.find('.release_date .date').text()).toEqual("10/06/2005");
    expect(wrapper.find('.link').props()).toEqual({"children": "Homepage", "className": "link", "href": "https://www.warnerbros.com/movies/batman-begins/", "target": "blank"});
    expect(wrapper.find('.link').text()).toEqual("Homepage");
  });

});

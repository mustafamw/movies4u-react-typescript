import React from 'react';
import Search from './Search';
import { shallow, mount } from 'enzyme';
import expect from "expect";
import { SearchProps } from '../../interfaces/props/SearchProps';


describe('Search Component', () => {

  let wrapper = shallow(<Search/>);

  beforeEach(() => {
      wrapper = shallow(<Search/>);
  })

  it('should render Search Component', () => {
    expect(wrapper.find('.search-container')).toHaveLength(1);
  });

  it('should set query on props defaultSearch by default with value', () => {
    const searchProps: SearchProps = {
      onSearch: (jest.fn()),
      defaultSearch: 'test'
    }
    const componentDidMountSpy = spyOn(Search.prototype, "componentDidMount").and.callThrough();
    const wrapper = mount(<Search {...searchProps}/>);
    expect(wrapper.state('query')).toEqual("test");
    expect(componentDidMountSpy).toHaveBeenCalled();
    expect(componentDidMountSpy.calls.count()).toBe(1);
  });

  it('should set query on props defaultSearch by default without value', () => {
    const searchProps: SearchProps = {
      onSearch: (jest.fn()),
      defaultSearch: ''
    }
    const componentDidMountSpy = spyOn(Search.prototype, "componentDidMount").and.callThrough();
    const wrapper = mount(<Search {...searchProps}/>);
    expect(wrapper.state('query')).toEqual("");
    expect(componentDidMountSpy).toHaveBeenCalled();
    expect(componentDidMountSpy.calls.count()).toBe(1);
  });

  it('should set state query on input text', () => {
    const handleChangeSpy = spyOn(Search.prototype, "handleChange").and.callThrough();
    const wrapper = mount(<Search />);
    expect(wrapper.find('.search-container')).toHaveLength(1);
    expect(wrapper.state('query')).toEqual("");
    expect(handleChangeSpy).not.toHaveBeenCalled();
    const input = wrapper.find('.search-container input[type="text"]');
    input.simulate('change', { target: { value: 'Hello World' } });
    wrapper.update();
    expect(wrapper.state('query')).toEqual("Hello World");
    expect(handleChangeSpy).toHaveBeenCalled();
    expect(handleChangeSpy.calls.count()).toBe(1);
  });

  it('should trigger Enter key on input text', () => {
    const searchSpy = spyOn(Search.prototype, "search").and.callThrough();
    const wrapper = mount(<Search />);
    expect(searchSpy).not.toHaveBeenCalled();
    const input = wrapper.find('.search-container input[type="text"]');
    input.simulate('keypress', { key: "Enter" });
    wrapper.update();
    expect(searchSpy).toHaveBeenCalled();
    expect(searchSpy.calls.count()).toBe(1);
  });

  it('should call search method on clicking button', () => {
    const searchSpy = spyOn(Search.prototype, "search").and.callThrough();
    const wrapper = mount(<Search />);
    expect(searchSpy).not.toHaveBeenCalled();
    const input = wrapper.find('.search-container button');
    input.simulate('click');
    wrapper.update();
    expect(searchSpy).toHaveBeenCalled();
    expect(searchSpy.calls.count()).toBe(1);
  });

  it('should props onSearch method on search method with value', () => {

    const searchProps: SearchProps = {
      onSearch: (jest.fn()),
      defaultSearch: ''
    }
    const wrapper = mount(<Search {...searchProps}/>);
    expect(searchProps.onSearch).not.toHaveBeenCalled();
    const input = wrapper.find('.search-container input[type="text"]');
    input.simulate('change', { target: { value: 'Hello World' } });
    wrapper.update();
    const inputBtn = wrapper.find('.search-container button');
    inputBtn.simulate('click');
    wrapper.update();
    expect(searchProps.onSearch).toHaveBeenCalledWith({"pageNo": 1, "query": "Hello World"});
  });

  it('should props onSearch method on search method without value', () => {

    const searchProps: SearchProps = {
      onSearch: (jest.fn()),
      defaultSearch: ''
    }
    const wrapper = mount(<Search {...searchProps}/>);
    expect(searchProps.onSearch).not.toHaveBeenCalled();
    const input = wrapper.find('.search-container input[type="text"]');
    input.simulate('change', { target: { value: '' } });
    wrapper.update();
    const inputBtn = wrapper.find('.search-container button');
    inputBtn.simulate('click');
    wrapper.update();
    expect(searchProps.onSearch).not.toHaveBeenCalledWith();
  });

});
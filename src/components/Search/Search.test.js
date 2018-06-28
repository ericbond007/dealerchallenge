import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Search from './Search';

describe('Search', () => {
  it('should render the search bar', () => {
    const handleSubmit = jest.fn();
    const userData = jest.fn();
    const userProjects = jest.fn();
    const searchFailed = jest.fn();

    const wrapper = shallow(<Search handleSubmit={handleSubmit} searchFailed={searchFailed} userData={userData} userProjects={userProjects} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

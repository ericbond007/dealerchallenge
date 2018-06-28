import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Profile from './Profile';
import fs from 'fs';


describe('Profile', () => {
  it('should render the user profile', () => {
    const user = require('./mockProfile.json');
    const wrapper = shallow(<Profile user={user} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

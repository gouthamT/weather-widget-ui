import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';

jest.mock("../../weather-widget/getWeatherInfo.js");

import WeatherWidget from '../../weather-widget/weather-widget';


it('should render widget', done => {
  const originalError = console.error;
  console.error = jest.fn();
  let wrapper;
  act(() => {
    wrapper = mount(<WeatherWidget />);
  })
  setTimeout(() => {
    const html = wrapper.html();
    expect(wrapper.find('img')).toBeTruthy();
    expect(html).toContain('<p>Shuzenji</p>');
    expect(html).toContain('<h1 class=\"suffix-degree\">289.92</h1>');
    expect(html).toContain('<b>Wind</b>&nbsp;ESE&nbsp;0.47Km/h');
    console.error = originalError;
    done();
  }, 10);
});
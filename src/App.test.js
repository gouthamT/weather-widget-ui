import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import WeatherWidget from './components/weather-widget/weather-widget';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should render weather widget', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(WeatherWidget)).toHaveLength(1);
});
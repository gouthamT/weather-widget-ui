import React from 'react';
import { shallow } from 'enzyme';
import Preview from '../../weather-widget/preview';

it('should render preview', () => {
  const wrapper = shallow(<Preview title="test-title" city="Sydney" temp="17" windSpeed="66" icon="" showWind={true} />);
  const textContent = wrapper.text();
  expect(textContent).toContain('test-title');
  expect(textContent).toContain('Sydney');
  expect(textContent).toContain('17');
  expect(textContent).toContain('66');
});
import React from 'react';
import { shallow, mount } from 'enzyme';
import RadioGroup from '../../primitives/radio-group';

const fakeOptions = [{ id: 0, label: 'option-1' }, { id: 1, label: 'option-2' }]

it('should render radio group without issues', () => {
  const wrapper = shallow(<RadioGroup name="test" />);
  expect(wrapper.find('.option-group')).toHaveLength(1);
});

it('should render label for radio group', () => {
  const wrapper = shallow(<RadioGroup name="test" label="test-label" />);
  expect(wrapper.text()).toContain('test-label');
});

it('should render options for radio group', () => {
  const wrapper = mount(<RadioGroup name="test" options={fakeOptions} />);
  expect(wrapper.find('.radio-btn')).toHaveLength(2);
});

it('should set selectedId for radio group', () => {
  const wrapper = mount(<RadioGroup name="test" options={fakeOptions} selectedId={1} />);
  const element = wrapper.find('.radio-btn[aria-checked=true]');
  expect(element).toHaveLength(1);
  expect(element.html()).toContain('option-2');
});

it('should change selected index on change or click', () => {
  const wrapper = mount(<RadioGroup name="test" options={fakeOptions} selectedId={1} />);
  let radioFelid = wrapper.find('.radio-btn[aria-checked=false]')
  radioFelid.simulate('change', { target: { value: 'My new value' } });
  expect(wrapper.find('.radio-btn[aria-checked=true]').html()).toContain('option-1');
})
import React from 'react';
import { mount } from 'enzyme';
import { FormContext } from "../../../store/index";
import { initialState } from '../../../store/formStore';
import WidgetForm from '../../weather-widget/widget-form';

it('should render form', () => {
  const wrapper = mount(<FormContext.Provider value={[initialState]}>
    <WidgetForm />
  </FormContext.Provider>);
  expect(wrapper).toBeDefined();
});

it('should trigger dispatchers on action', () => {
  const myMock = jest.fn();
  const wrapper = mount(<FormContext.Provider value={[initialState, myMock]}>
    <WidgetForm />
  </FormContext.Provider>);

  const textBox = wrapper.find('.form-input');
  textBox.simulate('change', { target: { value: 'My new value' } });
  textBox.simulate('change', { target: { value: 'My new value 2' } });
  expect(myMock.mock.instances).toHaveLength(2);
});

it('should trigger dispatchers on selected index change or click', () => {
  const myMock = jest.fn();
  const wrapper = mount(<FormContext.Provider value={[initialState, myMock]}>
    <WidgetForm />
  </FormContext.Provider>);
  let radioFelid = wrapper.find('.radio-btn[aria-checked=false]').first();
  radioFelid.simulate('change', { target: { value: 'My new value' } });
  expect(myMock.mock.instances).toHaveLength(1);
})
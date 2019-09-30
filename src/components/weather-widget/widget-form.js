import React, { useRef, useContext } from 'react';
import RadioGroup from '../primitives/radio-group';

import { FormContext } from "../../store/index";
import { unitOptions, windOptions, DefaultTitle, Actions } from "../../common/constants";

function Form() {
  const inputEl = useRef(null);
  const [, dispatch] = useContext(FormContext);

  const onTitleChange = () => {
    dispatch({ type: Actions.SetTitle, data: inputEl.current.value });
  };
  const onUnitChange = ({ id }) => {
    dispatch({ type: Actions.SetUnit, data: id });
  };
  const onShowWindChange = ({ id }) => {
    dispatch({ type: Actions.SetShowWind, data: id });
  };

  return <form className='widget-form'>
    <fieldset className='widget-field-set'>
      <label htmlFor='input-title' className='input-title'>Title</label>
      <input className='form-input mg-bottom' id='input-title' type='text' ref={inputEl} placeholder={DefaultTitle} onChange={onTitleChange} autoComplete="off" />
      <RadioGroup {...unitOptions} onChange={onUnitChange} />
      <RadioGroup {...windOptions} onChange={onShowWindChange} />
    </fieldset>
  </form>;
}

export default Form;
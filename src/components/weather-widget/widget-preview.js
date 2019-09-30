import React, { useContext } from 'react';
import Preview from './preview';
import { FormContext, WeatherContext } from "../../store/index";

import Spinner from '../primitives/spinner';

function WidgetPreview() {
  const [{ title, showWind }] = useContext(FormContext);
  const [{ isLoading, isError, ...rest }] = useContext(WeatherContext);
  if (isLoading)
    return <Spinner />
  if (isError)
    return <h4>Something went wrong!</h4>
  return <Preview title={title} {...rest} showWind={showWind} />
}

export default WidgetPreview;
import React, { useReducer, useEffect } from 'react';
import WidgetForm from './widget-form';
import WidgetPreview from './widget-preview';

import getWeatherInfo from './getWeatherInfo';
import { FormContext, WeatherContext } from "../../store/index";
import formReducer, { initialState as formState } from "../../store/formStore";
import weatherReducer, { initialState as weatherState } from "../../store/weatherStore";

import { WeatherActions } from '../../common/constants';

import './weather-widget.css';

function Widget() {
  const formContext = useReducer(formReducer, formState);
  const [{ unit }] = formContext;
  const weatherContext = useReducer(weatherReducer, weatherState);
  const [, weatherDispatcher] = weatherContext;
  useEffect(() => {
    async function onLocationInit({ coords: { latitude, longitude } }) {
      weatherDispatcher({ type: WeatherActions.OnLoad });
      try {
        let { data } = await getWeatherInfo(latitude, longitude, unit);
        weatherDispatcher({ type: WeatherActions.InIt, data, unit });
      }
      catch {
        weatherDispatcher({ type: WeatherActions.OnError })
      }
    }
    navigator.geolocation && navigator.geolocation.getCurrentPosition((onLocationInit));
  }, [unit, weatherDispatcher])

  return <FormContext.Provider value={formContext}>
    <WeatherContext.Provider value={weatherContext}>
      <section className="weather-widget">
        <div className="widget-content">
          <div className="widget-header">
            <WidgetForm />
          </div>
          <hr className="seperator" />
          <div className="flex-center preview-container">
            <WidgetPreview />
          </div>
        </div>
      </section>
    </WeatherContext.Provider>
  </FormContext.Provider >;
}

export default Widget;

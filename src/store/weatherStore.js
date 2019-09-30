import { WeatherActions } from '../common/constants';
import { degToCompass } from '../common/utils';

export const initialState = {
  isLoading: true,
  city: null,
  unit: null,
  temp: null,
  icon: null,
  windSpeed: null,
  windDirection: '',
  isError: false
};

function weatherStore(state, action) {
  switch (action.type) {
    case WeatherActions.InIt: {
      let { data: { name, main: { temp }, weather, wind: { speed, deg } }, unit } = action;
      return {
        isLoading: false,
        city: name,
        unit,
        temp,
        icon: weather[0].icon,
        windSpeed: speed,
        windDirection: degToCompass(deg),
        isError: false
      }
    }
    case WeatherActions.OnLoad: {
      return { ...initialState }
    }
    case WeatherActions.OnError: {
      return { ...initialState, isLoading: false, isError: true }
    }
    default:
      return { ...state };
  }
}

export default weatherStore;
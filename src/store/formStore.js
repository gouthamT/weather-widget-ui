import { Actions, Centigrade, ON } from '../common/constants';

export const initialState = {
  title: '',
  unit: Centigrade,
  showWind: true
};

export default function reducer(state, action) {
  switch (action.type) {
    case Actions.SetTitle:
      return { ...state, title: action.data };
    case Actions.SetUnit:
      return { ...state, unit: action.data };
    case Actions.SetShowWind:
      return { ...state, showWind: action.data === ON };
    default:
      return state;
  }
}
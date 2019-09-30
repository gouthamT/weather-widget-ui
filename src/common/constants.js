export const Centigrade = "metric";

export const Fahrenheit = "imperial";

export const ON = "On";

export const OFF = "Off";

export const unitOptions = {
  name: "temperatures",
  label: "Temperature",
  ariaLabel: "temperature units",
  options: [{
    id: Centigrade,
    label: '°C',
    ariaLabel: Centigrade
  }, {
    id: Fahrenheit,
    label: '°F',
    ariaLabel: Centigrade
  }],
  selectedId: Centigrade
};

export const windOptions = {
  name: "wind",
  label: "Wind",
  ariaLabel: "show wind",
  options: [{
    id: ON,
    label: ON,
    ariaLabel: 'Wind On'
  }, {
    id: OFF,
    label: OFF,
    ariaLabel: 'Wind Off'
  }],
  selectedId: ON
};

export const DefaultTitle = 'Title of widget';

export const Actions = {
  SetTitle: 'SetTitle',
  SetUnit: 'SetUnit',
  SetShowWind: 'SetShowWind'
}

export const WeatherActions = {
  InIt: 'InIt',
  OnLoad: 'OnLoad',
  OnError: 'OnError'
}
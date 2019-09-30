export function degToCompass(num) {
  let val = Math.floor((num / 22.5) + .5),
    arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
  return arr[val];
}

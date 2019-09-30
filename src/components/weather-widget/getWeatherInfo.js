import axios from 'axios';

async function get(latitude, longitude, unit) {
  let route = `/weather?latitude=${latitude}&longitude=${longitude}&unit=${unit}`;
  if (process.env.NODE_ENV === 'development') {
    route = [`http://localhost:2079`, route].join('');
  }
  return await axios.get(route);
}

export default get;
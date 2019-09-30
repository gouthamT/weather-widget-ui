const express = require('express'),
  axios = require('axios');

const app = express(), port = 2079;

const router = express.Router();

const getUrl = (unit, lat, long) => `http://api.openweathermap.org/data/2.5/weather?appid=f215a06c68a032e58eaca437de60be88&units=${unit}&lat=${lat}&lon=${long}`;

router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/weather', getWeather);

async function getWeather(req, res, next) {
  const { latitude, longitude, unit } = req.query;
  const response = await axios.get(getUrl(unit, latitude, longitude))
  res.send(response.data);
};

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.json());
app.use(express.static('build'));
app.use('/', router);

app.listen(port, () => console.log(`app is listening to port number http://localhost:${port}/`));
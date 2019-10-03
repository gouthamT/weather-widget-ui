## Setup instructions

1. Install node_modules by running `npm install` command.

2. `npm start`

    - Runs the app in the development mode.<br>
Open [http://localhost:2079](http://localhost:2079) to view it in the browser.

## Description

- This weather widget application was built using node & reactJs.
- Widget component uses react's `context api` for state management.
- express framework was used in backend (api gateway) to fetch current weather report from openweather api.


## assumptions

- Fetching data from openweather api on load/user request (doesn't perform any live sync).

- Converting wind degree to direction through code but not through api.

## How to run tests ?

- Jest & Enzyme was used for unit testing.
- `npm test` command will run unit tests.

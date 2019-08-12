Implemented scenarios: 
1. See the weather in one of 5  prelisted locations
	London,
	Paris,
	New York,
	Singapore,
	Sydney.
  
  As a user
	When I visit the page,
	I want to see a list of locations,
	so that I know which locations are available.
  
2. As a user
	When I select a location,
	I want to see the current weather,
	So that I know what the weather is for the location I selected.  
  
  Display the following information:
	Location,
	Current weather summary,
	current weather temperature,
	current weather icon.

Used API: https://darksky.net/dev/docs for weather information

Technologies used: 
- Typescript
- Redux
- Redux Saga
- @testing-library/react
- styled-components

I wrote unit tests for the redux logic, api method, and the weather page container component.

The production deploy can be seen on https://bbc-weather-app.herokuapp.com/

Below are information relevant to running the code and test locally.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
### `npm install`
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

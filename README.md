<h3>AccuWeather Client - a simple way to view weather forecast.</h3>

![App screenshots](https://github.com/sergsavoniuk/accuweather-client/blob/master/app-screenshots.jpg)

<hr />

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Introduction

This is a minimalistic app that allows you to view a weather forecast. It uses [AccuWeather APIs](https://developer.accuweather.com/) that provide different API endpoints, including Locations, Current Conditions, Daily and Hourly Forecasts.

**Note:** Limited Trial access allows each developer up to 50 calls per day.

## Features

- **React** — 16.8 with Hooks
- **CSS** — Styled Components
- **Theming** - Dark and Light
- **Localization** - 🇬🇧/🇷🇺
- **Service Worker**
- **Offline mode**

## Getting started

1. Clone this repo using `git clone https://github.com/sergsavoniuk/accuweather-client.git <YOUR_PROJECT_NAME>`
2. Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.<br />
3. Run `yarn` or `npm install` to install dependencies.<br />
4. Run `yarn` or `npm start` to see the example app at `http://localhost:3000`.
   <br/> <br />
   **Note**: Before running app, you should add `<YOUR_API_KEY>` into `.env` file in the root of the project:
   <br />
   `REACT_APP_ACCUWEATHER_KEY=<YOUR_API_KEY>`
   <br />
   To get an `API_KEY` you should register at https://developer.accuweather.com and then add a new app.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode at `http://localhost:3000`.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `yarn build:run`

Builds the app for production to the `build` folder, starts a server at `http://localhost:8080` that serves files from the `build` folder.

### `yarn format`

Format code using Prettier - opnitionated code formatter.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

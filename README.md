# React Next

Project boilerplate for creating react applications with Emerald UI integrated.

## Installation

To install the project all you have to do is clone the repo and install the dependencies.

```
git clone https://github.com/cebroker/react-next.git 
cd react-next
npm install
```

## Scripts
You can run following npm scripts in order to execute the most common tasks:

### `npm start`

Runs the app in development mode at http://localhost:3000.

You also can change the environment that will run the project. Just add this to the command:

  `REACT_APP_ENV=[ENVIRONMENT] npm start`

The `[ENVIRONMENT]` could be equal to: `development`, `test`, `demo`, `production`.

### `npm test`

Runs the test watcher in an interactive mode. By default, runs tests related to files changes since the last commit. See the test output to learn more.

### `npm build`

Builds the app for production by setting the bundles in production mode and optimizing the build for the best performance.
Your app is ready to be deployed!

## Enviroment Variables
We've inclueded commonly used custom [enviroment variables](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-custom-environment-variables) for your convenience.

### `REACT_APP_URL_BASE`
If this app is served from a sub-directory on your server, you’ll want to set this to the sub-directory. A properly formatted basename should have a leading slash, but no trailing slash.



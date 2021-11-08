# Installation and Deployment

## Prerequisites

-   Computer with Internet Access
-   Web Browser (Google Chrome, Mozilla Firefox)
-   Git (Install Here: https://git-scm.com/downloads)
-   Node and NPM (Install Here: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

On Ubuntu:

```sh
sudo apt install git-all
```

```sh
sudo apt install nodejs npm
```

## Dependencies

-   react, react-dom, react-router-dom, react-scripts for running the app
-   bootstrap, react-bootstrap, reactstrap, styled-components for styling the app
-   express and mongoose for the backend with MongoDB database
-   dotenv for loading environment variables
-   prettier for code formatting
-   concurrently to run the frontend and the backend concurrently
-   nodemon to refresh the app

## Installation Steps

-   clone this repo:

```sh
git clone git@github.com:ucsb-cs148-f21/project-t03-fitnessguru.git
```

-   run npm install:

```sh
npm install
```

-   cd into the backend direction and run npm install:

```sh
cd backend
npm install
```

-   run the app concurrently with npm run dev:

```sh
npm run dev
```

## Functionality

-   You can view your profile on the Profile page. Click the Update Profile button to update your profile.
-   You can view your exercises on the My Exercises page. Click the Add Exercise button to add an exercise. Click Update to update the exercise and Delete to delete the exercise.

## Known Problems

-   You may not be able to run the app locally without a Google Client ID for OAuth. Don't worry, we will update our instructions soon!
-   The "Last Updated" time for the Profile page does not update correctly. To reproduce, update the profile. The "Last Updated" time will not update.

## Contributing

## Fork it!

1. Create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3. Push to the branch: git push origin my-new-feature
4. Submit a pull request :D

# Current Deployment

Check out our most recent deployment here: https://fitness-guru-deployment.herokuapp.com/

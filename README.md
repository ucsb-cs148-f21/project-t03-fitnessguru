# project-t03-fitnessguru
Project Name: Fitness Guru

Fitness Guru allows users to create custom workouts and track their progress at the gym.

Team Members:

Name (Github ID)

Martin Cabello (m-cabello)

Mikey Curtis (mikeycurtis)

Himanshu Kumar (hima-97)

John Judge (JohnnJudge)

Kevin Weng (kweng149)

# Tech Stack
MongoDB
Express
ReactJS
Node

# App Description
Fitness Guru will help people who go to the gym keep track of their progress (both strength wise and physical changes to their body), and it will allow users to create custom workout plans and share their workouts with other people in the fitness community. Users will be able to add exercises to their custom splits and workouts.

# User Roles
* People who go to the gym (new or experienced)

* Admins / Fitness Trainers

# User Permissions
* People who go to the gym (new or experienced) can create their own custom workouts, track their own progress, and share their workouts with other users.

* Admins / Fitness Trainers can post challenges to keep users engaged.

# Installation

## Prerequisites
* Computer with Internet Access
* Web Browser (Google Chrome, Mozilla Firefox)
* Git (install here: https://git-scm.com/downloads)
* Node and NPM (install here: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

On Ubuntu:

```sh
sudo apt install git-all
```

```sh
sudo apt install nodejs npm
```

## Dependencies
* react, react-dom, react-router-dom, react-scripts for running the app
* bootstrap, react-bootstrap, reactstrap, styled-components for styling the app
* express and mongoose for the backend with MongoDB database
* dotenv for loading environment variables
* prettier for code formatting
* concurrently to run the frontend and the backend concurrently
* nodemon to refresh the app

## Installation Steps
* clone this repo:
```sh
git clone git@github.com:ucsb-cs148-f21/project-t03-fitnessguru.git
```
* run npm install:
```sh
npm install
```
* cd into the backend direction and run npm install:
```sh
cd backend
npm install
```
* run the app concurrently with npm run dev:
```sh
npm run dev
```

## Functionality
* You can view your profile on the Profile page. Click the Update Profile button to update your profile.
* You can view your exercises on the My Exercises page. Click the Add Exercise button to add an exercise. Click Update to update the exercise and Delete to delete the exercise.

## Known Problems
* You may not be able to run the app locally without a Google Client ID for OAuth. Don't worry, we will update our instructions soon!
* The "Last Updated" time for the Profile page does not update correctly. To reproduce, update the profile. The "Last Updated" time will not update.

## Contributing

## Fork it!
1. Create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3. Push to the branch: git push origin my-new-feature
4. Submit a pull request :D

# Current Deployment

Check out our most recent deployment here: https://fitness-guru-deployment.herokuapp.com/

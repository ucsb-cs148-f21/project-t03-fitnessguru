# Installation and Deployment

## Deployment Video

Check out the deployment video here:

https://youtu.be/-PoU0Acx9YU

At 8:42, skip to 10:44 where the Heroku build completes.

## Prerequisites

-   Computer with Internet Access
-   Web Browser (Google Chrome, Mozilla Firefox)
-   Git (Install Here: https://git-scm.com/downloads)
-   Node and npm (Install Here: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Client ID

To obtain a client_id, please visit this link: https://console.cloud.google.com/apis/credentials and follow these steps after signing in or creating an account:

* create a project
* on the OAuth consent screen, set the User Type to "External" and complete the form
* on the Credentials page, select Create Credentials and choose OAuth client ID
* set the Application type to Web application
* add the URI for your app to Authorized JavaScript origins and Authorized redirect URIs
* for the local deployment, add "http://localhost:3000" to Authorized JavaScript origins and Authorized redirect URIs
* click Create
* copy Your Client ID

You need to add the client_id for your app in the client directory.

If you are in the root directory, you can cd into the client directory:

```sh
cd client
```

In the client directory, you will see a file named ".env.sample". Rename this file to ".env" and replace \<insert CLIENT_ID here> with your client_id.

## Mongo URI

To obtain a Mongo URI, please visit this link: https://www.mongodb.com/ and follow these steps after signing in or creating an account:

* create an organization, then create a project
* click Build a Database
* choose the Cluster option (we recommend the free Shared Cluster)
* after the cluster is created, click Connect
* Add a connection IP address
* Create a Database User
* on the Choose a connection method screen, select Connect your application
* Select your driver and version (Node.js, 4.0 or later)
* copy the connection string

You need to add the Mongo URI for your app in the config directory.

If you are in the root directory, you can cd into the config directory:

```sh
cd config
```

In the config directory, you will see a file named "config.env.sample". Rename this file to "config.env" and replace \<insert MONGO_URI here> with your Mongo URI. Remember to replace \<password> in the connection string with the actual password for the database user you created!

## On On MacOS and Linux:

To Install Git:

```sh
sudo apt install git-all
```

To Install npm:

```sh
sudo apt install nodejs npm
```

## Installation Steps

clone this repository:

```sh
git clone git@github.com:ucsb-cs148-f21/project-t03-fitnessguru.git
```

run npm install in the root directory:

```sh
npm install
```

run npm install in the client directory:

```sh
cd client
npm install
```

run the app concurrently with npm run dev in the root directory:

```sh
cd ..
npm run dev
```

The frontend should run on localhost:3000, and the backend should run on localhost:5000.

# Heroku Deployment

To deploy the app on Heroku, please visit this link: https://www.heroku.com/ and follow these steps after signing in or creating an account:

* Create new app
* Go to Settings
* Under Config Vars, click Reveal Config Vars
* Add 2 Config Vars:
1) KEY: MONGO_URI
VALUE: \<insert MONGO_URI here>
2) KEY: REACT_APP_AUTH_CLIENT_ID
VALUE: \<insert CLIENT_ID here>

* Click Open app and copy the URL of the app
* Go to this link: https://console.cloud.google.com/apis/credentials and find the Client ID for your app
* Add the URL to Authorized JavaScript origins and Authorized redirect URIs for your Client ID
* Click Save

* Go back to the app on Heroku
* Go to Deploy
* Under Deployment method, click GitHub
* Connect to GitHub
* Under Manual deploy, Choose a branch to deploy
* Click Deploy Branch
* When the deployment is finished, click Open app to view your deployed app

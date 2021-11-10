# Installation and Deployment

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

* create a free Shared Cluster
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

## On Ubuntu:

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
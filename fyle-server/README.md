# Fyle Backend
This is the backend for the Fyle assignment. It is a NodeJS server that uses ExpressJS as the web framework. It uses Mocha and Chai for testing.


## Setup

### Github API Authentication (Optional)
This api relies on app oauth to increase rate limits. 
To enable this, you need to create a Github OAuth app
(Follow the steps [here](https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/) to create an OAuth app).
Then copy the `client_id` and `client_secret` to the `.env` file.


### Install dependencies
```bash
yarn install
```
### Run the server
```bash
yarn start
```
### Run the tests
```bash
yarn test
```

const express = require('express');
const { Octokit } = require("@octokit/rest");
require('dotenv').config()
const cors  = require('cors');

const {
  createOAuthAppAuth,
  createOAuthUserAuth,
} = require("@octokit/auth-oauth-app");

const app = express();
app.use(cors());
const octakit = new Octokit(
  {
    authStrategy: createOAuthAppAuth,
    auth: {
    clientId: process.env.GITHUB_CLIENT,
    clientSecret: process.env.GITHUB_SECRET,
    }
  }
);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send({ message: 'Welcome to fyle server!' });
});

// get user info given username as query
app.get('/user', (req, res) => {
  const username = req.query.username;
  try{
      octakit.users.getByUsername({username}).then((user) => {
        res.send(user.data);
      }).catch((err) => {
        res.status(404).send({message: 'User not found '+  err}) ;
      });
  }
  catch(err){
      res.status(401).send({message: 'Something went wrong while fetching user ' + err});
  }
});

// get user repos given username as query
app.get('/user/repos', (req, res) => {
  const username = req.query?.username;
  const size = (req.query?.size) ?? '10';
  const page = (req.query?.page) ?? '1';
  const options = {
    sort: 'created',
    direction: 'asc',
    per_page: size,
    page: page
  }
  try{
      octakit.repos.listForUser({username, ...options}).then((repos) => {
        res.send(repos.data);
      }).catch((err) => {
        res.status(404).send({message: 'User not found '+  err}) ;
      });
  }
  catch(err){
      res.status(401).send({message: 'Something went wrong while fetching user repos ' + err});
  }
});

module.exports = app.listen(port, () => {
  console.log(`Fyle server listening at PORT ${port}`);
});



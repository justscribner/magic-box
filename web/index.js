require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const path = require('path');
const db = require('./db/index.js');
<<<<<<< HEAD
const passport = require('passport');
const flash = require('connect-flash');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');

require('./config/passport')(passport);

const app = express();

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

app.use(express.static(`${__dirname}/dist`));

app.get('/logged-in', (req, res) => {
  if (req.user) {
    res.send(true);
  } else {
    res.send(false);
  }
});

app.get('/home', (req, res) => {
  console.log('got to home');
  db.load(data => {
=======

const app = express();
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/dist`));

app.get('/home', (req, res) => {
  db.load((data) => {
>>>>>>> f0ddb5eb5b2fb8fd9c646128c18667c5e1c5e5b8
    res.send(data.rows);
  });
});

app.get('/users', (req, res) => {
  db.users((data) => {
    res.send(data.rows);
  });
});

app.post(
  '/login',
  passport.authenticate('local-login', {
    successRedirect: '/', // redirect to the secure profile section
    failureRedirect: '/', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
  })
);

app.post(
  '/signup',
  passport.authenticate('local-signup', {
    successRedirect: '/', // redirect to the secure profile section
    failureRedirect: '/', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
  })
);

app.get(['/', '/music', '/home', '/prompts', '/sprites', '/worlds'], (req, res) => {
  // res.send('what???', 404);
  console.log('called');
  db.load(data => {
    res.send(data.rows);
  });
});

// app.get('*', (req, res) => {
//   res.send('what???', 404);
// });

<<<<<<< HEAD
//= ====GOTTA FIX USER INFO BELOW WHEN USERS ARE IMPLEMENTED=======
app.get('/votes', (req, res) => {
  // console.log('I am the req in the get for /votes => ', req);
  db.didVote(10, 1000, data => {
=======
app.get('/music', (req, res) => {
  // res.send('what???', 404);
  db.load((data) => {
>>>>>>> f0ddb5eb5b2fb8fd9c646128c18667c5e1c5e5b8
    res.send(data.rows);
  });
});

<<<<<<< HEAD
app.post('/votes', (req, res) => {
  let body = '';
  req.on('data', data => {
    body += data;
  });
  // console.log('I am the req.body => ', req.body);

  req.on('end', () => {
    console.log('I am the body => ', body);
=======
//= ====GOTTA FIX USER INFO BELOW WHEN USERS ARE IMPLEMENTED=======
app.get('/votes', (req, res) => {
  const currentUserId = req.query.currentUserId;
  const clickedSongId = req.query.clickedSongId;

  db.didVote(currentUserId, clickedSongId, (data) => {
    res.send(data.rows);
  });
});
>>>>>>> f0ddb5eb5b2fb8fd9c646128c18667c5e1c5e5b8

app.post('/votes', (req, res) => {
  db.toggleVote(req.body, (response) => {
    console.log('Vote Toggled and heres the response data => ', response);
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});

const router = require('express').Router();
const AddUser = require('../models/user.model');
//const User = require('../models/user.model');


router.route('/').get((req, res) => {
    AddUser.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/add').post((req, res) => {
   const username = req.body.username;
   const password = req.body.password;
   const newUser = new AddUser({username,password });
   newUser.save()
   .then(()=> res.json('user added!'))
   .catch(err => res.status(400).json('Error:'+ err))
    });

    module.exports= router;
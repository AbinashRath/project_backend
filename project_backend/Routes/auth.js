const express = require('express');
const {validateSigninRequest} = require('../validators/auth');
const {validateSignupRequest} = require('../validators/auth');
const {isRequestValidated} = require('../validators/auth');
const router = express.Router();
const {animals} = require('../controller/animal');
const {fruits} = require('../controller/fruit');
const { signup, signin } = require('../controller/auth');
const { requireSignin } = require('../middleware/auth');
router.post('/signup',validateSignupRequest, isRequestValidated, signup);
router.post('/signin',validateSigninRequest, isRequestValidated, signin);
router.get('/fruits',requireSignin, fruits);
router.get('/animals',requireSignin, animals);

module.exports = router;
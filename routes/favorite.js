const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifytoken');
const userJWT = require('../middlewares/userJWT');

const favoriteController = require('../controllers/controller.favorite');

router.get('/', (userJWT || verifyToken ), favoriteController.favorite_get);

router.post('/post', (userJWT || verifyToken ), favoriteController.favorite_post);

router.patch('/:userId', (userJWT || verifyToken ), favoriteController.favorite_deleteItem);

module.exports = router;

const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifytoken');
const userJWT = require('../middlewares/userJWT');

const favoriteController = require('../controllers/controller.favorite');

router.get('/', verifyToken, favoriteController.favorite_get);
router.get('/user/', userJWT, favoriteController.favorite_get);


router.post('/post', verifyToken , favoriteController.favorite_post);
router.post('/user/post', userJWT, favoriteController.favorite_post);


router.patch('/:userId', verifyToken , favoriteController.favorite_deleteItem);
router.patch('/user/:userId', userJWT , favoriteController.favorite_deleteItem);


module.exports = router;

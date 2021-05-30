const express = require('express');
const router = express.Router();
const cartController = require('../controllers/controller.cart');
const verifyToken = require('../middlewares/verifytoken');
const userJWT = require('../middlewares/userJWT');

router.get('/', (userJWT || verifyToken ), cartController.cart_get);

router.post('/post', (userJWT || verifyToken ), cartController.cart_post);

router.put('/cartitem/:id', (userJWT || verifyToken ), cartController.cart_update);

router.delete('/cartitem/:id', (userJWT || verifyToken ), cartController.cart_deleteCartItem);

router.delete('/:id', (userJWT || verifyToken ), cartController.cart_delete);

module.exports = router;

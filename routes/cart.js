const express = require('express');
const router = express.Router();
const cartController = require('../controllers/controller.cart');
const verifyToken = require('../middlewares/verifytoken');
const userJWT = require('../middlewares/userJWT');

router.get('/',verifyToken, cartController.cart_get);
router.get('user/', userJWT, cartController.cart_get);


router.post('/post', verifyToken , cartController.cart_post);
router.post('/user/post',userJWT, cartController.cart_post);


router.put('/cartitem/:id', verifyToken , cartController.cart_update);
router.put('/user/cartitem/:id', userJWT , cartController.cart_update);


router.delete('/cartitem/:id', verifyToken , cartController.cart_deleteCartItem);
router.delete('/user/cartitem/:id', userJWT, cartController.cart_deleteCartItem);


router.delete('/:id', verifyToken, cartController.cart_delete);
router.delete('/user/:id', userJWT, cartController.cart_delete);


module.exports = router;

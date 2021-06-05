const express = require('express');
const router = express.Router();
const orderController = require('../controllers/controller.order');
const verifyToken = require('../middlewares/verifytoken');
const userJWT = require('../middlewares/userJWT');

router.get('/',verifyToken , orderController.order_get);
router.get('user/', userJWT, orderController.order_get);

router.post('/post', verifyToken, orderController.order_post);
router.post('user/post', userJWT, orderController.order_post);

router.patch('/:id', verifyToken , orderController.order_update);
router.patch('/user/:id', userJWT, orderController.order_update);






module.exports = router;

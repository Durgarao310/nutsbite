const express = require('express');
const router = express.Router();
const orderController = require('../controllers/controller.order');
const verifyToken = require('../middlewares/verifytoken');
const userJWT = require('../middlewares/userJWT');

router.get('/', (userJWT || verifyToken ), orderController.order_get);
router.post('/post', (userJWT || verifyToken ), orderController.order_post);
router.patch('/:id', (userJWT || verifyToken ), orderController.order_update);





module.exports = router;

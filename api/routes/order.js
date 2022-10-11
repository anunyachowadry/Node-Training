const express = require('express'); //requiring express
const router = express.Router();// //The express.Router() function is used to create a new router object.
// This function is used when you want to create a new router object in your program to handle requests. 


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'orders were fectched'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'orders were created'
    });
});

router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'order details',
        orderId: req.params.orderId
    });
});

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'order deleted',
        orderId: req.params.orderId
    });
});

module.exports =  router;
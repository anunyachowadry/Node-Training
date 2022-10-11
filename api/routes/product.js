const express = require('express');  //requiring erxpress
const router = express.Router();  //The express.Router() function is used to create a new router object.
// This function is used when you want to create a new router object in your program to handle requests. 

router.get('/',(req, res, next) => {

    res.status(200).json({
        message: 'handling GET requests to /products'
    });
});

router.post('/',(req, res, next) => {
    res.status(201).json({
        message: 'handling POST requests to /products'
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: 'you discovered the special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'you passed an ID'
        });
    }
});

router.patch('/:productId', (req, res, next) => {
   res.status(200).json({
    message: 'Updated product!'
   });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
     message: 'Deleted product!'
    });
 });

module.exports =  router;
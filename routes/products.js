var express = require("express");
var router = express.Router();
var productModel = require('../models/product');


//제품 등록하는 API를 생성해보자
router.post('/', (req, res) => {
    const product = new productModel({
        name: req.body.name,
        price: req.body.price
    });
    product
        .save()
        .then(result => {
            res.json({
                message: "Your product is successfully registered",
                productInfo: result
            });
        })
        .catch(error => {
            res.json({
                err: error
            });
        });
});


//등록된 제품을 받아오는 API를 생성해 보자.
router.get('/', (req, res) => {
    productModel
        .find()
        .exec()
        .then(docs => {
            res.json({
                message: "The data successfully got",
                products: docs
            });
        })
        .catch(error => {
            res.json ({
                err: error
            });
        });
});




//등록된 제품을 수정/업데이트 하는 API를 생성해 보자.
router.patch('/', (req, res) => {
    res.json({
        message:"The product is patched"
    });
});

//등록된 제품을 삭제하는 API를 생성해 보자.
router.delete('/', (req, res) => {
    res.json({
        message:"The product is deleted"
    });
});











module.exports = router;
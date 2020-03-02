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

//선택된 제품을 불러오는 API를 만들어 보자 
router.get('/:productID', (req, res) => {
    const productID = req.params.productID;
    productModel
        .findById(productID)
        .exec()
        .then(doc => {
            console.log(doc);
            if (doc) {
                res.json ({
                    msg: "Successful get production detail",
                    productInfo: doc
                })
            } else {
                res.json ({
                    msg: "No valid entry found for provided ID"
                });
            }
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
    productModel
        .deleteMany()
        .then(()=> {
            res.json({
                msg: "Deleted All"
            })
        })
        .catch(error => {
            res.json ({
                err: error
            });
        });
});



//등록된 특정 제품을 ID에 따라서 삭제하는 API를 생성해 보자.
router.delete('/:productID', (req, res) => {
    const productID = req.params.productID;
    productModel
        .findByIdAndDelete(productID)
        .then(() => {
            res.json ({
                msg: "Delete the product"
            })
        })
        .catch(error => {
            res.json ({
                err: error
            });
        });
});





module.exports = router;
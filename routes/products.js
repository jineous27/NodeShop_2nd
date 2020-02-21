var express = require("express");
var router = express.Router();


//제품 등록하는 API를 생성해보자
router.post('/', (req, res) => {
    res.json({
        message: "The producet is posted"
    });
});


//등록된 제품을 받아오는 API를 생성해 보자.
router.get('/', (req, res) => {
    res.json({
        message: "The products are got"
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
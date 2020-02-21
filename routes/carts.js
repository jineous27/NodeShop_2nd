var express =require("express");
var router = express.Router();


//카트안에 제품을 등록하는 API
router.post('/', (req, res) => {
    res.json({
        message:"The product is added in the cart"
    });
});

//카트안에 제품을 불러오는 API
router.get('/', (req, res) => {
    res.json({
        message:"The product is retrieved in the cart"
    });
});

//카트안에 제품을 업데이트 하는 API
router.patch('/', (req, res) => {
    res.json({
        message:"The product is patched in the cart"
    });
});

//카트안에 제품을 삭제하는 API
router.delete('/', (req, res) => {
    res.json({
        message:"The product is deleted in the cart"
    });
});




module.exports = router;

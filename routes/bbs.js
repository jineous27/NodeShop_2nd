var express = require('express');
var router = express.Router();

//게시판에 글 등록하는 API
router.post('/', (req, res) => {
    const content = {
        title: req.body.title,
        subtitle: req.body.subtitle 
    };
    res.json({
        message:"it's posted",
        createContent: content
    });
});

//게시판에 글 받아오는 API
router.get('/', (req, res) => {
    res.json({
        message:"it's retrieved"
    });
});

//게시판에 글 업데이트 API
router.patch('/', (req, res) => {
    res.json({
        message: "it's updated"
    });
});

//게시판에 글 삭제하는 API
router.delete('/', (req, res) => {
    res.json({
        message: "it's deleted"
    });
});


module.exports = router;

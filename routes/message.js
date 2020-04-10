const express = require('express');
const router = express.Router();

const messagesController = require('../controllers/messagesController');

//render message
router.get('/',(req,res)=>{
    res.redirect('/message');
});
//一覧　top
router.get('/message', messagesController.index);

//新規作成 　redirect 
//コントローラ経由でもいいかな
router.get('/messages/new',(req,res)=>{
    res.render('create');
});

//新規作成
router.post('/messages',messagesController.create);

// //個別ページ
//router.get('/messages/:id',messagesController.replie);

// //編集
router.get('/messages/:id/edit',messagesController.edit);

// //更新
router.put('/messages/:id',messagesController.update);

// //削除
router.delete('/messages/:id',messagesController.delete);

module.exports = router;
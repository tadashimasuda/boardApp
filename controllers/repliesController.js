const db = require('../models/index');

exports.create = (req, res) => {
    const params = {
        message_id: req.body.messageId,
        content: req.body.replyContent
    };
    console.log(params);
    db.reply.create(params).then((results) => {
        res.redirect('/messages/'+req.body.messageId);
    });
 
}
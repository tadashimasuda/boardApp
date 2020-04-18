const db = require('../models/index');

exports.create = (req, res) => {
    const params = {
        message_id: req.body.messageId,
        content: req.body.replieContent
    };
    console.log(params);
    db.replie.create(params).then((results) => {
        res.redirect('/messages/'+req.body.messageId);
    });
 
}
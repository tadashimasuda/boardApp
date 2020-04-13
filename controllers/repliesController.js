const db = require('../models/index');

exports.create = (res, req) => {
    const params = {
        message_id: req.params.id,
        content: req.body.replieContent
    };
    console.log(params);
    db.replie.create(params).then((results) => {
        res.redirect('/');
    });
}
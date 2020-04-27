const db = require('../models/index');
exports.index = (req, res) => {
    // db.message.findAll().then((results) => {
    //     res.render('index.ejs', { messages: results });
    // });

    const filter = {
        include: [{
            model: db.reply
        }]
    }
    db.message.findAll(filter).then((results) => {
        console.log('データ:'+results)
        res.render('index.ejs', { messages: results });
    });
}

exports.create = (req, res) => {
    const params = {
        content: req.body.messageContent
    };
    db.message.create(params).then((results) => {
        res.redirect('/');
    });
}

exports.edit = (req, res) => {
    db.message.findByPk(req.params.id).then((results) => {
        res.render('edit.ejs', { messages: results });
    })
}

exports.update = (req, res) => {
    db.message.update({ 
            content: req.body.messageContent 
    },
    { 
    where: { 
             id: req.params.id 
            } 
        }
    ).then((results) => {
        res.redirect('/');
    });
}

exports.delete = (req, res) => {
    db.message.destroy({ where: { id: req.params.id } }).then((results) => {
        res.redirect('/');
    });
}

exports.reply = (req, res) => {
    // db.message.findByPk(req.params.id).then((results) => {
    //     //messageのid,contentのため
    //     res.render('reply.ejs', { messages: results });
    // })
    const filter = {
        include: [{
            model: db.reply,
        }]
    }
    //where句入れる　req.params.idと一致するもの（messsage,replyで）
    //message.id = req.params.id,reply.message_id = req.params.id
    db.message.findByPk(req.params.id,filter).then((results) => {
        console.log(results);
        res.render('reply.ejs', { message: results});
    });
}


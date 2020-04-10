const db = require('../models/index');
exports.index = (req, res) => {
    db.message.findAll().then((results) => {
        res.render('index.ejs', { messages: results });
    });
}

exports.create = (req, res) => {
    const params = {
        content: req.body.messagesContent
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
    const params = {
        content: req.body.messagesContent
    };
    db.message.update({ content: req.body.messagesContent }, { where: { id: req.params.id } }).then((results) => {
        res.redirect('/');
    });
}

exports.delete = (req, res) => {
    db.message.destroy({ where: { id: req.params.id } }).then((results) => {
        res.redirect('/');
    });
}


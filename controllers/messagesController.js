const db = require('../models/index');
exports.index = (req, res) => {
    // db.message.findAll().then((results) => {
    //     res.render('index.ejs', { messages: results });
    // });

    const filter = {
        include:[{
          model:db.replie
        }]
      }
      db.message.findAll(filter).then((results) => {
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

exports.replie = (req,res) =>{
    // db.message.findByPk(req.params.id).then((results) => {
    //     //messageのid,contentのため
    //     res.render('replie.ejs', { messages: results });
    // })
    const filter = {
        include:[{
          model:db.replie,
        }]
      }
      //where句入れる　req.params.idと一致するもの（messsage,replieで）
      //message.id = req.params.id,replie.message_id = req.params.id
      db.message.findAll(filter).then((results) => {
        console.log(results);
        res.render('replie.ejs', { messages: results ,id:req.params.id});
      });
}


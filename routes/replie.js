const express = require('express');
const router = express.Router();

const repliesController = require('../controllers/repliesController');

router.post('/',repliesController.create);

// router.post('/replies/:id',(res,req)=>{
//     console.log(req.params.id);
// });

module.exports = router;
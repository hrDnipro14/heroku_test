const express = require('express');
const authRouter = express.Router();
const path = require('path')

authRouter.route('/').get((req, res)=>{
    res.sendFile('views/index.html', { root: '.' })
})

module.exports = authRouter;
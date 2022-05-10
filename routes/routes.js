const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/SignUpModels')

router.post("/signup" , (request, response) =>{
    const signUpUser = new signUpTemplateCopy({
        fullName:request.body.fullName,
        password:request.body.password,
        email:request.body.email,
        username:request.body.username,
    })
    signUpUser.save().then(data=>{
        response.json(data)
    }).catch(error =>{
        response.json(error)
    })
})

// router.get("/signin", )

module.exports = router


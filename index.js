import express from 'express'
import mongoose from "mongoose";
import {validationResult} from "express-validator";


import {registerValidation} from './validation/auth.js'

mongoose.connect(
    'mongodb+srv://admin:admin@cluster0.no1co.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('DB is OK')
})
    .catch((err)=>console.log('DB error', err))

const app =  express()

app.use(express.json( ))

app.get('/', (req, res) => {
    res.send('Hello')
})

app.post('/auth/register', registerValidation , (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json(errors.array()) //валидация непройдена
    }
    res.json(
        {'success': true}  //валидация пройдена
    )
})

app.listen(4444, (err) => {
    if (err) {
        return console.log(err)
    }
    {console.log('Server OK')}
} )
import express from 'express'
import mongoose from "mongoose";

import User from './models/user.js'
import checkAuth from "./utils/checkAuth.js";
import {registerValidation} from './validation/auth.js'
import {getMe, login, register} from "./controllers/UserController.js";

mongoose.connect(
    'mongodb+srv://admin:admin@cluster0.no1co.mongodb.net/blog?retryWrites=true&w=majority')
    .then(() => {
        console.log('DB is OK')
})
    .catch((err)=>console.log('DB error', err))

const app = express()

app.use(express.json( ))

app.get('/', (req, res) => {
    res.send('Hello')
})

// Login
app.post('/auth/login', login)

 // Registration
app.post('/auth/register', registerValidation , register)

app.get('/auth/me', checkAuth, getMe)

app.listen(4444, (err) => {
    if (err) {
        return console.log(err)
    }
    {console.log('Server OK')}
} )
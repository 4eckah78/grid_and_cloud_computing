const express = require('express')
const mongoose = require('mongoose')
const { createServer } = require('http')
const app = express()
const port = 3000

MONGO_URLS = {
    'local':'mongodb://localhost:27017/TestDatabase', 
    //'docker': 'mongo://mongo:27017',
    'cloud': 'SECRET'
}

MONGO_DBS = []
TABLES = []
for (const [type, mongo_url] of Object.entries(MONGO_URLS)) {
    MONGO_DBS.push(mongoose.createConnection(mongo_url, {useNewUrlParser: true})
    .then(() => console.log(`Connected to ${type} MongoDB!`))
    .catch(err => console.log(err)))
    // TABLES.push[mongoose.model('Users', UsersSchema)]
}


 
const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    patronymic: {
        type: String,
    },
    company: {
        type: String,
    },
    pregnant: {
        type: Boolean,
        default: false,
    },
    email: {
        type: String,
        required: true,
    },
})


app.get('/', (req, res) => {
    let start = Date.now()
    let end = 0
    Users.create({
        name: 'Gosha2',
        email: 'gosh@pupk.ru'
    })
    .then(user => {
        res.send(user)
        end = (Date.now() - start)
        console.log(`Time of creating: ${end} ms`)
    })
    .catch((err => res.send('error: ' + err)))
    // Users.find()
    // .then(users => res.send(users))
    // .catch(err => res.send(err));
})


const server = createServer(app)
server.listen(port, () => console.log(`server is up on port: ${port}`))

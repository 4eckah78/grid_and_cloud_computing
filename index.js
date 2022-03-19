const express = require('express')
const mongoose = require('mongoose')
const { createServer } = require('http')
const app = express()
const port = 3000

function random_user(){
    const rand1 = Math.floor(Math.random() * 10).toString()
    const rand2 = Math.floor(Math.random() * 10).toString()
    const rand3 = Math.floor(Math.random() * 100).toString()
    const rand4 = Math.floor(Math.random() * 2)
    const rand5 = Math.floor(Math.random() * 10)
    return {
        name: "Gosha" + rand1,
        patronymic: "Olegovich" + rand2,
        company: "OOO Mouse and Banana " + rand3,
        cat_guy: rand4,
        email: `gosha@gmail${rand5}.com`,
    }
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
    cat_guy: {
        type: Boolean,
        default: true,
    },
    email: {
        type: String,
        required: true,
    },
})

MONGO_URLS = {
    'local': 'mongodb://localhost:27017/TestDatabase',
    'docker': 'mongodb://localhost:27018/MyDockerDatabase',
    'cloud': 'mongodb+srv://SECRET:SECRET@gridandcloud.s5hqu.mongodb.net/MyFirstDatabase?retryWrites=true&w=majority'
}

TABLES = {}
for (const [type, mongo_url] of Object.entries(MONGO_URLS)) {
    const conn = mongoose.createConnection(mongo_url, {useNewUrlParser: true})
    console.log(`Connected to ${type} MongoDB!`)
    TABLES[type] = conn.model('Users', UsersSchema)
}

app.get('/create', (req, res) => {
    console.log('---------------------------------------')
    console.log('CREATING')
    const user = random_user()
    console.log("Creating an user object: ", user)
    for (const [type, Users] of Object.entries(TABLES)) {
        let start = Date.now()
        Users.create(user)
        .then(user => {
            time = (Date.now() - start)
            console.log(`Time of creating an object in ${type} database: ${time} ms`)
        })
        .catch((err => console.log('error: ' + err)))
    }
res.send("Please, check the console to see the info :)")
})

app.get('/find', (req, res) => {
    console.log('---------------------------------------')
    console.log('GETTING')
    for (const [type, Users] of Object.entries(TABLES)) {
    let start = Date.now()
    Users.find()
    .then(users => {
        time = (Date.now() - start)
        console.log(`Time of finding ${users.length} objects in ${type} database: ${time} ms`)
    })
    .catch((err => console.log('error: ' + err)))
    }
    res.send("Please, check the console to see the info :D")
})

app.get('/deleteAll', (req, res) => {
    console.log('---------------------------------------')
    console.log('DELETING')
    for (const [type, Users] of Object.entries(TABLES)) {
        let start = Date.now()
        Users.deleteMany()
        .then(obj => {
            time = (Date.now() - start)
            console.log(`Time of deleting ${obj.deletedCount} objects in ${type} database: ${time} ms`)
        })
        .catch((err => console.log('error: ' + err)))
    }
    res.send("Please, check the console to see the info :D")
})

const server = createServer(app)
server.listen(port, () => console.log(`server is up on port: ${port}`))
const express = require('express')
const cors = require('cors')
const users = require('./users.json')
const app = express()
const { orderBy } = require('lodash')
const path = require('path')

app.use(express.json())

app.use(cors())

app.use(express.static("public"))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.get('/users', (req, res) => {
    res.json(users)
})

app.get('/users/filter', (req, res) => {
    const search = req.query.search
    if (!search) {
        res.json(users)
    }
    const result = users.filter((user) => {
        const [id, name, username, email, address] = Object.values(user)
        const arr = [id, name, username, email, address.city].map((val) => {
            return val.toString().toLowerCase()
        })
        return arr.join('').includes(search.toLowerCase())
    })
    res.json(result)
})

app.get('/users/sort', (req, res) => {
    const { sortBy, order } = req.query
    if (!sortBy || !order) {
        res.json(users)
    }
    const result = orderBy(users, [sortBy], [order])
    // console.log(result)
    res.json(result)
})

app.listen(3033, () => {
    console.log('listening on port', 3033)
})
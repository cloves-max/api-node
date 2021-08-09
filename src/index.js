const { json } = require('body-parser')
const express = require('express')
const db = require('./database/conction')

const app = express()

app.use(express.json())



//buscar dados
app.get('/', async(req, res) => {
        const bd = await db.table('aluno').select('*');
        return res.json(bd);

        // return res.json()
    })
    //inserir dados
app.post('/app', async(req, res) => {
    try {
        const data = req.body
        const bd = await db.table('aluno').insert(data);
        return res.json(bd);
    } catch (error) {
        return res.json(error)
    }
})

app.listen(21262, () => {
    console.log(`express started at http://localhost:21262`)
})
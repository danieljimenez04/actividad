const express = require('express')

const port = 9000

const app = express()

app.get('/profile', (peticion, respuesta) => {
    respuesta.json({
        name:'Daniel',
        age:30,
        country:'Peru',
        skills:['js','python','sql']
    })
})

app.post('/ejemplo', (peticion, respuesta) => {
    respuesta.json(
        ['Amazon','Meta','Global']
    )
})


app.patch('/ejemplo', (peticion, respuesta) => {
    respuesta.json(
        ['escuchar musica','jugar futbol','ver futbol']
    )
})

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
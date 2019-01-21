import express from "express"

const app = express.Router()

const question = {
    id:1,
    title:'¿Comó levantar un server apache?',
    description:'Levantar un server de apache es muy facil, utilizando los instaladores que estan creados donde vienen todos los componentes necesarion y con un solo click',
    createdAt: new Date(),
    icon:'devicon-apache-plain',
    answer: [],
    user:{
        firstName: 'Carlos',
        lastName:'Ramírez',
        email:'hola@carlosramirezflores.com',
        password:'123'
    }
}

const questions = new Array(10).fill(question)

// api/questions
app.get('/', (req, res)=> res.status(200).json(questions))

// api/questions/id
app.get('/:id',(req,res) => res.status(200).json(question))
export default app
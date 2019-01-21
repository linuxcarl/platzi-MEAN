import express from "express"
import { ExitStatus } from "typescript";

const app = express.Router()

const currentUser = {
        firstName: 'Carlos',
        lastName:'Ramírez',
        email:'hola@carlosramirezflores.com',
        password:'123'
}
const question = {
    id:1,
    title:'¿Comó levantar un server apache?',
    description:'Levantar un server de apache es muy facil, utilizando los instaladores que estan creados donde vienen todos los componentes necesarion y con un solo click',
    createdAt: new Date(),
    icon:'devicon-apache-plain',
    user: currentUser,
    answer: [],
}

function questionMiddleware(req, res, next){
    const {id} = req.params
    req.question = questions.find(question => question.id === +id)
    next()
}
function userMiddleware(req, res, next){
    req.user =  currentUser;
    next()
}
const questions = new Array(10).fill(question)

// api/questions
app.get('/', (req, res)=> res.status(200).json(questions))

// api/questions/id
app.get('/:id', questionMiddleware, (req,res) => {
    res.status(200).json(req.question)
})

app.post('/',userMiddleware,(req,res) => {
    const quest =  req.body;
    quest.id = +new Date();
    quest.user = req.user
    quest.createdAt = new Date()
    quest.answer = []
    questions.unshift(quest)
    res.status(201).json(quest)
})

app.post('/:id/answers', questionMiddleware,(req, res)=>{
    const answer =  req.body
    const q = req.question
    answer.createdAt = new Date()
    answer.user =  currentUser
    q.answer.push(answer)
    res.status(201).json(answer);
})
export default app
const express= require('express')
const app=express()

const questions =[
    {
        question:"how to install python",
        slug:"how to install python",
        votes:3,
        views:20,
        tags:"python,pip,query"
    },

    {
        question:"how to intsall sql",
        slug: "how to install sql",
        votes:3,
        views:20,
        tags:"sql,pip,query"
    },
       
    {
        question:"how to install mongodb",
        slug:"how to install mongodb",
        votes:3,
        views:20,
        tags:"mongodb,pip,query"
    },
        
]
const users=[
    {
        name:"panda",
        followers:100,
        location:"hyd"
    },
    {
        name:"prasanna",
        followers:1000,
        location:"hyd"
    },
    {
        name:"prakash",
        followers:10,
        location:"hyd"
    }
]

app.get('/',(req,res)=>{
    res.send("home")

})

app.get('/questions',(req,res)=>{

    res.send(questions)

})

app.get('/questions/:slug',(req,res)=>{
    console.log(req.params.slug)
    const slug = req.params.slug
    questions.map(obj=>{
        if (obj.slug === slug){
            res.send(obj)
        }
    })

    
    res.send("question not found")
})

app.get('/users',(req,res)=>{
    res.send(users)

})
app.get('/tags',(req,res)=>{
    res.send("tags")

})
app.get('/jobs/comapnies',(req,res)=>{
    res.send("")

})



app.listen(3000,() =>{
    console.log("listening")

})
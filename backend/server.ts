import chalk from "chalk";
import express from "express"
import dotEvn from "dotenv"
import connectDb from "./src/config/database.ts";
import vocabularyRoute from "./src/router/vocabular.router.ts"

const app = express()
dotEvn.config()
// Port set up for env file 
const PORT = process.env.PORT || 3000
console.log(chalk.red(PORT,"port check"));


// middleware setup 
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/vocabulary',vocabularyRoute)

const startServer = async ()  =>{
    await connectDb()

    app.listen(PORT ,() =>{
        console.log(chalk.green(`server running on ${PORT}`));
        
    })
}

startServer()
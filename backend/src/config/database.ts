import mongoose, { model } from "mongoose";
import dotenv from "dotenv"
import chalk from "chalk";
dotenv.config()
const connectDb  = async () =>{
    const URL = process.env.MONGODB_URL as string
    try{
       await mongoose.connect(URL as string)
        console.log(chalk.green(`Database connected sucessfully`));
        
    }catch (err){
        console.log(chalk.red("Database connection failed", err));
        
    }
}

export default connectDb
import mongoose, { Schema  , Document} from "mongoose";


interface vocabulary extends Document  {
    englishWord:string,
    Date:string,
    englishMeaning:string,
    malayalamMeaning:string
}
const vocabularySchema:Schema = new Schema({
    englishWord:{
        type:String,
        required:true,
        unique:true
    },
    
    englishMeaning:{
        type:String,
        required:true
    },
    malayalamMeaning:{
        type:String
    }
    
},{timestamps:true})

const vocabularModel = mongoose.model<vocabulary>("vocabulary" , vocabularySchema)

export default vocabularModel
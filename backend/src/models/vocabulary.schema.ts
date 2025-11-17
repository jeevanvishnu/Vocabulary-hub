import mongoose, { Schema  , Document} from "mongoose";


interface vocabulary extends Document  {
    englishWord:string,
    image:string,
    englishMeaning:string,
    malayalamMeaning:string
}
const vocabularySchema:Schema = new Schema({
    englishWord:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    englishMeaning:{
        type:String,
        required:true
    },
    malayalamMeaning:{
        type:String,
        required:true
    },
},{timestamps:true})

const vocabularModel = mongoose.model<vocabulary>("vocabulary" , vocabularySchema)

export default vocabularModel
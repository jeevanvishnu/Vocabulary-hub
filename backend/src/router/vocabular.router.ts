import express from "express"
import { getAllData, postAllData } from "../controller/vocabulary.controller.ts"

const router = express.Router()

router.get('/',getAllData)

router.post('/',postAllData)

export default router
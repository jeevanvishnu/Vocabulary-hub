import { configureStore } from "@reduxjs/toolkit";
import vocabularyReduce from './VocabularySlice'

export const store = configureStore({
    reducer: {
        vocabulary: vocabularyReduce
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type vocabularyState = {
    list: string[]
}
const initialState: vocabularyState = {
    list: []
}
const vocabularySlice = createSlice({
    name: "vocabulary",
    initialState,
    reducers: {
        addword: (state, action: PayloadAction<string>) => {
            state.list.push(action.payload)
        }
    }

})

export const { addword } = vocabularySlice.actions
export default vocabularySlice.reducer
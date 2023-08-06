import { createSlice } from "@reduxjs/toolkit"
const initialState = ''
const filterSlice = createSlice({
    name:'filter',
    initialState,
    reducers: {
        createFilter(state,action) {
            return action.payload
        },
        clearFilter(state,action) {
            return ''
        }
    }
})

export const { createFilter, clearFilter } = filterSlice.actions
export default filterSlice.reducer
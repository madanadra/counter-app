import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    number: 1
  },
  reducers: {
    choice: (state, action) => {
        state.number = action.payload
    },
    increment: state => {
      state.value += state.number
    },
    decrement: state => {
      state.value -= state.number
    },
    refresh: state => {
      state.value = 0
    }
  }
})

export const { choice, increment, decrement, refresh } = counterSlice.actions

export default counterSlice.reducer
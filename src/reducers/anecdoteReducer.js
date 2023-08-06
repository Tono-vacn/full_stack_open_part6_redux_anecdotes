import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'
// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

// const getId = () => (100000 * Math.random()).toFixed(0)

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }



const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState:[],
  reducers: {
    createVote(state,action) {
      const id = action.payload.id
      // const anecdoteToChange = state.find(a => a.id === id)
      // const changedAnecdote = {...anecdoteToChange, votes: anecdoteToChange.votes + 1}
      return state.map(a => a.id !== id ? a : action.payload)
    },
    appendAnecdote(state,action) {
      //const newAnecdote = asObject(action.payload)
      return state.concat(action.payload)
    },
    // appendAnecdote(state,action) {
    //   const newAnecdote = asObject(action.payload)
    //   return state.concat(newAnecdote)
    // },
    setAnecdotes(state,action) {
      return action.payload
    }
  }
})

// export const createVote = (id) => {
//   return {
//     type: 'VOTE',
//     data: { id }
//   }
// }

// export const createAnecdote = (content) => {
//   return {
//     type: 'NEW_ANECDOTE',
//     data: {content},
//   }
// }

// const reducer = (state = initialState, action) => {
//   console.log('state now: ', state)
//   console.log('action', action)
//   switch(action.type) {
//     case 'VOTE':
//       const id = action.data.id
//       const anecdoteToChange = state.find(a => a.id === id)
//       const changedAnecdote = {...anecdoteToChange, votes: anecdoteToChange.votes + 1}
//       return state.map(a => a.id !== id ? a : changedAnecdote)
//     case 'NEW_ANECDOTE':
//       const newAnecdote = asObject(action.data.content)
//       return [...state, newAnecdote]
//     default:
//       return state
//   }

//   //return state
// }

export const { createVote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions
export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}
export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}
export const voteAnecdote = (id,newobject) => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.update(id, newobject)
    dispatch(createVote(updatedAnecdote))
  }
}
export default anecdoteSlice.reducer
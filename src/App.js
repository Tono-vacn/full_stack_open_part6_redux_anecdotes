// import { useSelector, useDispatch } from 'react-redux'
// import { createAnecdote, createVote } from './reducers/anecdoteReducer'
import { useEffect } from 'react'
import AnecdoteForm from './components/NewAnecdote'
import AnecdotesList from './components/Anecdotes'
import Notification from './components/Notification'
import Filter from './components/Filter'
//import  anecdoteService  from './services/anecdotes'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    // anecdoteService.getAll().then(anecdotes =>
    //   dispatch(setAnecdotes(anecdotes)))
    dispatch(initializeAnecdotes())
  },[dispatch])
  //selector connect to the store and get the whole state
  //filter can be used to select certain data
  // const anecdotes = useSelector(state => state)
  // //not store.dispatch anymore
  // const dispatch = useDispatch()


  // const createVote = (id) => {
  //   return {
  //     type: 'VOTE',
  //     data: { id }
  //   }
  // }

  // const vote = (id) => {
  //   console.log('vote', id)
  //   dispatch(createVote(id))
  // }

  // const createAnecdote = (content) => {
  //   return {
  //     type: 'NEW_ANECDOTE',
  //     data: {content},
  //   }
  // }

  // const addAnecdote = (event) => {
  //   event.preventDefault()
  //   //visit the input value with event.target.anecdote.value (name = anecdote)
  //   const content = event.target.anecdote.value
  //   console.log('add', content)
  //   event.target.anecdote.value = ''
  //   dispatch( createAnecdote(content)
  //   //   {
  //   //   type: 'NEW_ANECDOTE',
  //   //   data: { content }
  //   // }
  //   )
  // }

  return (
    <div>
    <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteForm />
      <AnecdotesList />
    </div>
  )
}

export default App
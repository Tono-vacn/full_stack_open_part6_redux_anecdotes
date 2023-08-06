import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"
//import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        //visit the input value with event.target.anecdote.value (name = anecdote)
        const content = event.target.anecdote.value
        console.log('add', content)
        event.target.anecdote.value = ''
        dispatch( createAnecdote(content))
        dispatch(setNotification(`you created '${content}'`, 2))
        // const newAnecdote = await anecdoteService.createNew(content)
        // console.log('newAnecdote',newAnecdote)
        // dispatch( createAnecdote(newAnecdote))
      }
    
    return (
        <div>
        <h2>create new</h2>
        <form onSubmit={addAnecdote}>
        <div><input name="anecdote"/></div>
        <button type='submit'>create</button>
      </form>
      </div>
      )
}

export default AnecdoteForm
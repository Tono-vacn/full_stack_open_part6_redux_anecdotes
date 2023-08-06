import { useDispatch,useSelector } from "react-redux"
import { voteAnecdote } from "../reducers/anecdoteReducer"
import { setNotification } from '../reducers/notificationReducer'

const Anecdote = ({anecdote,handleVote}) => {
    return (
        <div>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={handleVote}>vote</button>
            </div>
        </div>
    )
}

const AnecdotesList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state.filter)
    //const notification = useSelector(state => state.notification)

    const vote = (id) => {
        //console.log('vote', id)
        const anecdoteToChange = anecdotes.find(anecdote => anecdote.id === id)
        dispatch(voteAnecdote(id,{...anecdoteToChange,votes: anecdoteToChange.votes + 1}))
        dispatch(setNotification(`you voted '${anecdotes.find(anecdote => anecdote.id === id).content}'`,2))
    }

    return (
        <div>
            {//sort before show:
             //had to map first: otherwise state mutation error

            anecdotes.map(anecdote=>anecdote).sort((a,b) => b.votes - a.votes).filter(
                anecdote =>anecdote.content.toLowerCase().includes(filter.toLowerCase()))
            .map(anecdote =>
                //anecdotes.map(anecdote =>
                <Anecdote key={anecdote.id} anecdote={anecdote} handleVote={() => vote(anecdote.id)}/>
            )}
        </div>
    )
}

export default AnecdotesList
import { useSelector} from 'react-redux'
//import notificationReducer, { createNotification, removeNotification } from '../reducers/notificationReducer'

const Notification = () => {
  // const dispatch = useDispatch()
  const notification = useSelector(state => state.notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if (notification === '') {
    return null
  }
  // else{
  //   setTimeout(() => {
  //     dispatch(removeNotification())
  //   }, 5000)
  // }
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification
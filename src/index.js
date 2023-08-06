import React from 'react'
import ReactDOM from 'react-dom/client'
//import { createStore } from 'redux'
//import { configureStore } from '@reduxjs/toolkit'
//import {combineReducers} from 'redux'
import { Provider } from 'react-redux'
import App from './App'
//import anecdoteReducer from './reducers/anecdoteReducer'
//import notificationReducer from './reducers/notificationReducer'
//import filterReducer from './reducers/filterReducer'
// import anecdoteService from './services/anecdotes'
import store from './store'
// const store = configureStore({ 
//   reducer: {
//     anecdotes: anecdoteReducer,
//     notification: notificationReducer,
//     filter: filterReducer
//   }
//  })

// anecdoteService.getAll().then(anecdotes =>
//   store.dispatch(setAnecdotes(anecdotes))) 

ReactDOM.createRoot(document.getElementById('root')).render(
  //app is now a child of the Provider component,able to access the store
  <Provider store={store}>
    <App />
  </Provider>
)
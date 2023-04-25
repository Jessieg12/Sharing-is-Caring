import React, {useState } from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import './app.css'

function App(){

  let [greeting, setGreeting] = useState('Hello!')
  let passThis = "Hello there!"

  return (
    <div className="app">
      <p>{greeting}</p>
      <Home passThis={passThis} handleCallBack = {greeting => setGreeting(greeting)}/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
)

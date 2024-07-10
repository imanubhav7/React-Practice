import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'

function MyApp(){
    return(
        <div>
            <h1>Just a begining !</h1>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <MyApp />
)

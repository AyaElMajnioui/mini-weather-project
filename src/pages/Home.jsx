 import React from 'react'
 import { Link } from 'react-router-dom'

 function Home() {
   return (
     <div className='page-container'>
       <h1>Welcome to Mini-Weather</h1>
       <p>Check the weather in your city.</p>
       <Link to="/weather" className="btn">View Weather</Link>
      <div className="floating-icons">
        <span>☀️</span>
        <span>🌧️</span>
        <span>⛅</span>
        <span>🌪️</span>
      </div>
     </div>
 )
}

export default Home


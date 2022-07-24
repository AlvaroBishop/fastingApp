import React from 'react'
import fastingIMG from "../../shared/images/ayuno-intermitente-cab.jpg" 
import './Home.css'

export const Home = () => {
 
  
  

  return (
    <div className='Home'>
        <div className='container'>
            <h1>Fasting App</h1>
            <div className='home-main'>
              <div className="home-info">
                <h2>What is intermittent fasting?</h2>
                <p>Intermittent fasting is when you alternate between periods of eating and fasting. This type of eating is often described as “patterns” or “cycles” of fasting.</p>
                <p>Intermittent fasting isn’t about starving yourself — it’s about cutting way back on calories for short time periods. The belief is that your body becomes satisfied with smaller portions while also reducing cravings for unhealthy snack foods. That is, as long as you maintain a healthy diet while trying it all out.  </p>
              </div>
              <div className="img">
                <img src={fastingIMG} alt="intermittent fasting" />
              </div>
            </div>
        </div>
    </div>
  )
}

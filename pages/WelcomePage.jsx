import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../images/PawPatrolLogo.png'
import Logo2 from '../images/PawPatrolImage.png'
import Paw from '../images/paw.svg'
import PawTheme from '../Media/PawPatrolTheme.mp3'


function WelcomePage() {
    return (
        <>
        <div className='audio-paw'>
          <audio className="audio" autoPlay src={PawTheme} />
        </div>


        <div className="paw-logo">
        <img src={Logo} alt="pawlogo" />
         </div>
         <div className="paw-logo2">
           <img src={Logo2} alt="pawlogo2" />
         </div>

        <div className='navigation'>
                <Link to='/memory'>
                    <button className="memo"><img src={Paw} className="paw" alt='img' />Memory Game</button>
                </Link>
                <Link to='/vocabulator'>
                    <button className='voca'><img src={Paw} className="paw2" alt='img' />Vocabulator</button>
                </Link>
                <Link to='/index'>
                    <button className="index"><img src={Paw} className="paw3" alt='img'/>Paw Index</button>
                </Link>
                <Link to='/about'>
                    <button className="about"><img src={Paw} className="paw4" alt='img'/>About</button>
                </Link>
        </div>


    </>
    )
}

export default WelcomePage

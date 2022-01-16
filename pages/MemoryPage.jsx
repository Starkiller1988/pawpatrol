import React from 'react'
import { Link } from 'react-router-dom'
import MemoryGame from '../components/memorycomponents/memorygame'


function MemoryPage() {
    return (
        <>
    <div className="btn_index">
      <Link to='/'>
      <button className="homebutton">HOME</button>
      </Link>
    </div>


<MemoryGame />

        </>
    )
}

export default MemoryPage

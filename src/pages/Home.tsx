import React from 'react'
import Background from '../assets/images/Defender.jpg'

function Home() {
    return (
      <div
        style={{ backgroundImage: `url(${ Background })`}}
        className="flex justify-center mx-auto bg-cover bg-fixed"
        >
          <div className='flex place-items-center h-screen'>
            <h3 className='p-5 text-slate-100 rounded text-5xl border bg-black bg-opacity-70'>
              Car Inventory, where you can keep track of your car collection!</h3>
          </div>
  
      </div>
    )
  }

export default Home

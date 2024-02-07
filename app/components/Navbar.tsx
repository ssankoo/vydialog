import React from 'react'

function navbar() {
    return (
    <div className='navbar flex'>
        <h1 className="ml-5 text-xl">Vydialog</h1>
            
            
        <ul className='flex'> 
            <li className=''><a href="">games</a></li>
            <input type="text" placeholder='search...' className='text-stone-800 ml-4 border-solid border-2 rounded nav-searchbar'/>                
        </ul>
            
            
        <ul className='flex'>
            <li className='mr-5'><a href="">sign up</a></li>
        </ul>
    </div>
    )
}

export default navbar

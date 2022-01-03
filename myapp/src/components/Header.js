import React from 'react'
import Button from './Button'


const Header = () => {

const onClick = ()=>{
    console.log("klik")
}


    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            <Button onClick={onClick} color='green' text='Hello' />
        </header>
    )
}

export default Header

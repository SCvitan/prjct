import React from 'react'

const Button = () => {

    const button = () => console.log("hello")

    return (
        <div>
            <button className='btn' onClick={button}>
                Say Hello
            </button>
        </div>
    )
}

export default Button

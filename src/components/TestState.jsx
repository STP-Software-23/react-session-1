import React, {useState} from 'react'

export const TestState = () => {
    const [color, changeColor] = useState('red')
    return (
        <>
            <div>color is {color}</div>
            <button onClick={() => changeColor('blue')}>change Color</button>
        </>
    )
}
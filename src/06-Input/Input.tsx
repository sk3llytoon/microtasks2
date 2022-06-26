import React, {useState} from 'react';
import {FullInput} from "./components/FullInput";

export const Input = () => {

    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    const addMessage = () => {
        console.log('hi')
    }

    return (
        <>
            {/*<div>*/}
            {/*    <input type="text"/>*/}
            {/*    <button>+</button>*/}
            {/*</div>*/}
            <FullInput addMessage={addMessage}/>
            {message.map((el, index)=>{
                return(
                    <div key={index}>{el.message}</div>
                )
            })}
        </>
    );
};
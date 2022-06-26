import React, {useState} from 'react';
import {FullInput} from "./components/FullInput";
import {MicroInput} from "./components/MicroInput";
import {Button} from "./components/Button";

export const Input = () => {

    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

    const onClickButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    let [title, setTitle] = useState('')
    console.log(title)

    return (
        <>
            {/*<div>*/}
            {/*    <input type="text"/>*/}
            {/*    <button>+</button>*/}
            {/*</div>*/}
            {/*<FullInput addMessage={addMessage}/>*/}
            <MicroInput title={title} setTitle={setTitle}/>
            <Button name={'+'} callBack={onClickButtonHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </>
    );
};
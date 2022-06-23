import React, {useState} from 'react';

export const UseStatePractice = () => {

    // let a = 1;

    let[a, setA]=useState(1)

    const onClickHandler = () => {
        setA(++a)
        console.log(a)
    }

    const onClickHandler0 = () => {
        setA(0)
        console.log(a)
    }

    return (
        <div>
            <div>
                {a}
            </div>
            <div>
                <button onClick={onClickHandler}>add number</button>
                <button onClick={onClickHandler0}>new counter</button>
            </div>
        </div>
    )
        ;
};
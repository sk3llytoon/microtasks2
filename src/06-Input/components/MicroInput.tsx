import React, {ChangeEvent} from 'react';

type MicroInputPropsType = {
    setTitle: (title: string) => void
    title: string
}

export const MicroInput = (props: MicroInputPropsType) => {

    const OnChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }
    return (
        <input value={props.title} onChange={OnChangeInputHandler}/>
    );
};

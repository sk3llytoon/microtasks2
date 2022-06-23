import React from 'react';
import {FilterType} from "./Filter";

type NewComponentType = {
    currentMoney: Array<CurrentMoneyType>
    onClickFilterHandler:(nameButton: FilterType)=>void
}
type CurrentMoneyType = {
    banknots: string
    value: number
    number: string
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((el, index) => {
                    return (
                        <li key={index}>
                            <span>{el.value} </span>
                            <span>{el.banknots}</span>
                            <span>{el.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => props.onClickFilterHandler('All')}>All</button>
                <button onClick={() => props.onClickFilterHandler('Dollars')}>USD</button>
                <button onClick={() => props.onClickFilterHandler('RUBLES')}>RUB</button>
            </div>
        </>
    );
};

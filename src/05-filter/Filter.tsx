import React, {useState} from 'react';
import {NewComponent} from "./NewComponent";

export type FilterType = 'All' | 'RUBLES' | 'Dollars'

export const Filter = () => {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLES', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLES', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLES', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>('All')

    let currentMoney = money
    if (filter === 'Dollars') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
    }
    if (filter === 'RUBLES') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLES')
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
        console.log(nameButton)
    }
    return (
        <>
            <NewComponent onClickFilterHandler={onClickFilterHandler} currentMoney={currentMoney}/>
            {/*<ul>*/}
            {/*    {currentMoney.map((el, index) => {*/}
            {/*        return (*/}
            {/*            <li key={index}>*/}
            {/*                <span>{el.value} </span>*/}
            {/*                <span>{el.banknots}</span>*/}
            {/*                <span>{el.number}</span>*/}
            {/*            </li>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</ul>*/}
            {/*<div style={{marginLeft: '35px'}}>*/}
            {/*    <button onClick={() => onClickFilterHandler('All')}>All</button>*/}
            {/*    <button onClick={() => onClickFilterHandler('Dollars')}>USD</button>*/}
            {/*    <button onClick={() => onClickFilterHandler('RUBLES')}>RUB</button>*/}
            {/*</div>*/}
        </>
    );
};

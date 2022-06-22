import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./01/Header";
import {Body} from "./01/Body";
import {Footer} from "./01/Footer";
import {NewComponent} from "./02-map/NewComponent";

function App() {

    const topCars = [
        {manufacturer: "BMW", model: 'm5cs'},
        {manufacturer: "Mercedes", model: 'e63s'},
        {manufacturer: "Audi", model: 'rs6'}
    ]

    return (
        <>
            {/*<Header titleForHeader={"NEW HEADER"}/>*/}
            {/*<Body titleForBody={"NEW BODY"}/>*/}
            {/*<Footer titleForFooter={"NEW FOOTER"}/>*/}
            <NewComponent topCars={topCars}/>
        </>
    );
}

export default App;

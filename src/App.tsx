import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./01/Header";
import {Body} from "./01/Body";
import {Footer} from "./01/Footer";

function App() {
    return (
        <>
            <Header titleForHeader={"NEW HEADER"}/>
            <Body titleForBody={"NEW BODY"}/>
            <Footer titleForFooter={"NEW FOOTER"}/>
        </>
    );
}

export default App;

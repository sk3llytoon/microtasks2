import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./01/Header";
import {Body} from "./01/Body";
import {Footer} from "./01/Footer";
import {NewComponent} from "./02-map/NewComponent";
import {Button} from "./03-Button/Button";
import {UseStatePractice} from "./04-useState/useStatePractice";

function App() {

    const topCars = [
        {manufacturer: "BMW", model: 'm5cs'},
        {manufacturer: "Mercedes", model: 'e63s'},
        {manufacturer: "Audi", model: 'rs6'}
    ]

    const Button1Func = (subscriber: string) => {
        console.log(subscriber)
    }

    const Button2Func = (subscriber: string) => {
        console.log(subscriber)
    }

    const Button3Func = () => {
        console.log("im stupid button")
    }

    return (
        <div className={"App"}>
            {/*<Header titleForHeader={"NEW HEADER"}/>*/}
            {/*<Body titleForBody={"NEW BODY"}/>*/}
            {/*<Footer titleForFooter={"NEW FOOTER"}/>*/}
            {/*<NewComponent topCars={topCars}/>*/}
            {/*<Button name={"MyYoutubeChannel-1"} callBack={()=>Button1Func("Im Vasya")}/>*/}
            {/*<Button name={"MyYoutubeChannel-2"} callBack={()=>Button2Func("Im Misha")}/>*/}
            {/*<Button name={"Button 3"} callBack={Button3Func}/>*/}
            <UseStatePractice/>
        </div>
    );
}

export default App;

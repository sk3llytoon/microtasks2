import React from 'react';

type TopCarsType = {
    manufacturer: string
    model: string
}

type NewComponentType = {
    topCars: Array<TopCarsType>
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <div>
            <table>
                {props.topCars.map((el, index) => {
                    return (
                        <tbody key={index}>
                            <tr>
                                <td>{index+1}</td>
                                <td>{el.manufacturer}</td>
                                <td>{el.model}</td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
        </div>
    );
};
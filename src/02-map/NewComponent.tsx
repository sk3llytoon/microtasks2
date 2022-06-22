import React from 'react';

type StudentsType = {
    id: number
    name: string
    age: number
}

type NewComponentType = {
    students: Array<StudentsType>
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <div>
            <ul>
                {props.students.map((el, index) => {
                        return (
                            <li key={index}>{el.id} {el.name} {el.age}</li>
                        )
                    }
                )}
            </ul>
        </div>
    );
};
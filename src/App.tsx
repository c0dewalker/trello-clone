import React from 'react';
import {AppContainer} from "./styles";
import {Column} from "./Column";
import {Card} from "./Card";
import {AddNewItem} from "./AddNewItem";

type Task = {
    id: string;
    title: string;
}

type Group = {
    id: string,
    title: string,
    tasks: Task[]
}

type AppState = Group[]

const initialState: AppState = [
    {
        id: "01",
        title: 'Todo',
        tasks: [
            {
                id: 'a1',
                title: 'Learn TypeScript'
            },
            {
                id: 'a2',
                title: 'Learn Styled Components'
            }
        ]
    },
    {
        id: "02",
        title: 'In Progress',
        tasks: [
            {
                id: 'b1',
                title: 'Buy big monitor'
            },
            {
                id: 'b2',
                title: 'Learn English'
            }
        ]
    },
    {
        id: "03",
        title: 'Finished',
        tasks: [
            {
                id: 'c1',
                title: 'Learn JavaScript'
            },
            {
                id: 'c2',
                title: 'Buy books'
            }
        ]
    },
]


export function App() {
    return (
        <AppContainer>
            {initialState.map(group => (
                <Column text={group.title}>
                    {group.tasks.map(task => <Card text={task.title}/>)}
                    <AddNewItem text="+ Add another task" dark/>
                </Column>
            ))
            }
            <AddNewItem text="+ Add another list"/>
        </AppContainer>
    );
}


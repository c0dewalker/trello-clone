import React from 'react';
import {AppContainer} from "./styles";
import {Column} from "./Column";
import {Card} from "./Card";
import {AddNewItem} from "./AddNewItem";
import {useAppState} from "./state/appStateContext";
import {addList, addTask} from "./state/actions";

export function App() {
    const {state, dispatch} = useAppState()

    return (
        <AppContainer>
            {state.lists.map(list => (
                <Column text={list.text}>
                    {list.tasks.map(task => <Card key={task.id} text={task.text}/>)}
                    <AddNewItem text="+ Add another task" dark onAdd={(text) => {
                        dispatch(addTask({text, listId: list.id}))
                    }}/>
                </Column>
            ))
            }
            <AddNewItem text="+ Add another list" onAdd={(text) => {
                dispatch(addList(text))
            }}/>
        </AppContainer>
    );
}


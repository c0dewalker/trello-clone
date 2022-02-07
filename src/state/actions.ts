import {nanoid} from "nanoid";

export enum ActionTypes {
    'ADD_TASK',
    'ADD_LIST'
}

export type Action =
    | { type: ActionTypes.ADD_TASK, payload: { id: string, text: string, listId: string } }
    | { type: ActionTypes.ADD_LIST, payload: { id: string, text: string } }

export const addTask = (newTask: { text: string, listId: string }): Action => ({
    type: ActionTypes.ADD_TASK,
    payload: {id: nanoid(), ...newTask}
})

export const addList = (text: string): Action => ({
    type: ActionTypes.ADD_LIST,
    payload: {id: nanoid(), text}
})
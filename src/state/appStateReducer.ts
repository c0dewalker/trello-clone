import {Action, ActionTypes} from "./actions";

export type Task = {
    id: string;
    text: string;
}

export type Group = {
    id: string,
    text: string,
    tasks: Task[]
}

export type AppState = {
    lists: Group[]
}

export const appStateReducer = (state: AppState, action: Action): AppState => {
    switch (action.type) {

        case ActionTypes.ADD_TASK:
            const {id, text, listId} = action.payload
            return {
                lists: state.lists.map(list => list.id !== listId ? list
                    : {...list, tasks: list.tasks.concat({id, text})}
                )
            }

        case ActionTypes.ADD_LIST:
            return {
                lists: state.lists.concat({...action.payload, tasks: []})
            }

        default:
            return state
    }
}


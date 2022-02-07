import {AppState} from "./appStateReducer";

export const initialState: AppState = {
    lists:  [{
        id: "01",
        text: 'Todo',
        tasks: [
            {
                id: 'a1',
                text: 'Learn TypeScript'
            },
            {
                id: 'a2',
                text: 'Learn Styled Components'
            }
        ]
    },
    {
        id: "02",
        text: 'In Progress',
        tasks: [
            {
                id: 'b1',
                text: 'Buy big monitor'
            },
            {
                id: 'b2',
                text: 'Learn English'
            }
        ]
    },
    {
        id: "03",
        text: 'Finished',
        tasks: [
            {
                id: 'c1',
                text: 'Learn JavaScript'
            },
            {
                id: 'c2',
                text: 'Buy books'
            }
        ]
    }
]
}
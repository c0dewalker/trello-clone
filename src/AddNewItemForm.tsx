import {KeyboardEventHandler, useState} from "react";
import {
    NewItemButton,
    NewItemFormContainer,
    NewItemInput
} from "./styles";

type AddNewItemFormProps = {
    onAdd(inputValue: string): void;
    onClose(): void;
}

export const AddNewItemForm = ({onAdd, onClose}: AddNewItemFormProps) => {
    const [inputValue, setInputValue] = useState("")

    const keyboardHandler: KeyboardEventHandler = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            if (inputValue !== '') {
                onAdd(inputValue)
            }
        } else if (e.key === 'Escape') {
            onClose()
        }
    }

    return (
        <NewItemFormContainer>
            <NewItemInput
                autoFocus
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={keyboardHandler}
                onBlur={onClose}
            />

            <NewItemButton onClick={(e) => {
                e.preventDefault()
                onAdd(inputValue)
            }}>
                Create
            </NewItemButton>
        </NewItemFormContainer>
    )
}



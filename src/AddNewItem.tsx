import {useState} from "react";
import {AddItemButton} from "./styles";
import {AddNewItemForm} from "./AddNewItemForm";

export type AddNewItemProps = {
    dark?: boolean;
    text: string;
    onAdd(text: string): void;
}

export const AddNewItem = ({dark, text, onAdd}: AddNewItemProps) => {
    const [showInput, setShowInput] = useState(false)

    if (!showInput) {
        return <AddItemButton onClick={() => setShowInput(true)} dark={dark}>{text}</AddItemButton>
    }
    return <AddNewItemForm
        onAdd={(inputValue: string) => {
            setShowInput(false)
            onAdd(inputValue)

        }}
        onClose={() => {
            setShowInput(false)
        }}
    />
}

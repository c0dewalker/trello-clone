import {useState} from "react";
import {AddItemButton} from "./styles";
import {AddNewItemForm} from "./AddNewItemForm";

export type AddNewItemProps = {
    dark?: boolean;
    text: string;
}

export const AddNewItem = ({dark, text}: AddNewItemProps) => {
    const [showInput, setShowInput] = useState(false)

    if (!showInput) {
        return <AddItemButton onClick={() => setShowInput(true)} dark={dark}>{text}</AddItemButton>
    }
    return <AddNewItemForm
        onAdd={(inputValue: string) => {
            setShowInput(false)
        }}
        onClose={() => {
            setShowInput(false)
        }}
    />
}

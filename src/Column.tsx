import { ColumnContainer, ColumnTitle } from "./styles"
import React, {FC} from "react";

type ColumnProps = {
    text: string;
}

export const Column: FC<ColumnProps> = ({text, children}) => {

    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {children}
        </ColumnContainer>
    )
}
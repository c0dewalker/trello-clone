import {CardContainer, TextOverflowContainer} from "./styles"

type CardProps = {
    text: string
}

export const Card = ({text}: CardProps) => {
    return (
        <CardContainer>
            <TextOverflowContainer>
                {text}
            </TextOverflowContainer>
        </CardContainer>
    )
}
import styled from "styled-components"

export const AppContainer = styled.div`
  display: flex;
  align-items: flex-start;
  height: 100%;
  padding: 20px;
  background-color: #3179ba;
  column-gap: 1.5rem;
`

export const ColumnContainer = styled.div`
  flex-grow: 0;
  width: 300px;
  min-height: 40px;
  background-color: #ebecf0;
  border-radius: 3px;
  padding: 8px;
`

export const ColumnTitle = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  padding: 6px 16px 12px;
`

export const CardContainer = styled.div`
  background-color: #fff;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: #091e4240 0 1px 0 0;
  user-select: none;
`

export const TextOverflowContainer = styled.div`
  overflow: hidden;           
  text-overflow: ellipsis;
`

type AddItemButtonProps = {
    dark?: boolean
}

export const AddItemButton = styled.button<AddItemButtonProps>`
  background-color: #ffffff3d;
  border-radius: 3px;
  border: none;
  color: ${(props) => (props.dark ? "#000" : "#fff")};
  cursor: pointer;
  max-width: 300px;
  padding: 10px 12px;
  transition: background-color 585ms ease-in;
  width: 100%;
  text-align: left;
  &:hover {
    background-color: #ffffff52;
  }
`

export const NewItemFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%; 
  max-width: 300px;
`

export const NewItemInput = styled.input`
  border-radius: 3px;
  border: none;
  box-shadow: #091e4240 0px 1px 0px 0px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  width: 100%;
`

export const NewItemButton = styled.button`
  background-color: #5aac44;
  border-radius: 3px;
  border: none;
  color: #fff;
  padding: 6px 12px;
`
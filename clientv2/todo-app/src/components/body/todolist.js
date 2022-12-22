import styled, { css } from "styled-components"


export const ButtonContainer = styled.div`
    border-radius: 15px;
    margin: 2vh auto;
    display: flex;
    
    width: 70vw;
    align-self: center;
`

export const ToDoContainer = styled.table`
    border-radius: 15px;
    margin: 2vh auto;
    display: flex;
    background-color: red;
    width: 70vw;
    align-self: center;
    border: 5px solid black;
`


export const TableBody = styled.tbody`
    padding: 10px;
    width:100%;
`

export const Column = styled.tr`
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    
`


export const ColumnName = styled.th`
    color: blue;
    width: ${props => props.width};
    text-align: ${props => props.text};
`

export const Cell = styled.td`
    width: ${props => props.width};
    text-align: ${props => props.text};
`
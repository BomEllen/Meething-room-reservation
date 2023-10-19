import styled from "styled-components";

const RoomItem = (props) => {

    //props 간단하게 받기
    const {id,name,persons,price} = props.rooms; 
    
    return (
        <>
        <TableItem>
            <Td>{id}</Td>
            <Td>{name}</Td>
            <Td>{persons}</Td>
            <Td>{price}</Td>
        </TableItem>
        </>
    )
}

const TableItem = styled.tr`
    text-align: center;
`
const Td = styled.td`
    border: 1px solid #f5eec8;
    margin: 0;
    padding: 7px;
`


export default RoomItem;
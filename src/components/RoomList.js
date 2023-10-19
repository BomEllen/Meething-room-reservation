import styled from "styled-components";
import RoomItem from "./RoomItem";

//예약 가능한 미팅 룸 목록 테이블 
const RoomList = () => {

    const rooms = [
        {id: 101, name: 'Lemon', persons: 4, price: 55000},
        {id: 102, name: 'Cherry', persons: 6, price: 74000},
        {id: 202, name: 'Ocean', persons: 4, price: 60000},
        {id: 203, name: 'Sky', persons: 8, price: 88000},
        {id: 205, name: 'Forest', persons: 8, price: 94000},
        {id: 301, name: 'Smile', persons: 6, price: 60000},
        {id: 303, name: 'Cloud', persons: 12, price: 115000}
    ];

const rows = rooms.map((rooms)=> <RoomItem rooms={rooms}/>);

    return (
        <>
            <Table>
                <Thead>
                    <tr>
                        <Th>No.</Th>
                        <Th>Name</Th>
                        <Th>Persons</Th>
                        <Th>Price</Th>
                    </tr>
                </Thead>
                <tbody>
                    {rows}
                </tbody>
            </Table>
        </>
    );
}

const Table = styled.table`
    background-color: #a7d397;
    width: 90vw;
    height: 25vh;
    margin: auto;
    border-collapse: separate;
    border-spacing: 0;
`;

const Thead = styled.thead`
    background-color: #555843;
    color: #D0D4CA;
    height: 3.4vh;
`;

const Th = styled.th`
    border: 0.5px solid #f5eec8; /* 헤더 셀 외각선 */
    padding: 10px;
`;

export default RoomList;

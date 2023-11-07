import styled from "styled-components";
import RoomItem from "./RoomItem";

//예약 가능한 미팅 룸 목록 테이블 
const RoomList = (props) => {
    const rooms = props.rooms;
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
                    {rooms.map((rooms)=> <RoomItem rooms={rooms}/>)}
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

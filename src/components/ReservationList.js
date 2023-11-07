import React from "react";
import styled from "styled-components";

const ReservationList = ({ reservations }) => {
    return (
        <Container>
            <Title>미팅룸 예약 현황</Title>
            <Table>
                <thead>
                    <tr>
                        <Th>Room No</Th>
                        <Th>Customer</Th>
                        <Th>Persons</Th>
                        <Th>Hours</Th>
                        <Th>Price</Th>
                    </tr>
                </thead>
                <tbody>
                    {reservations.map((reservation, index) => (
                        <tr key={index}>
                            <Td>{reservation.roomNo}</Td>
                            <Td>{reservation.customer}</Td>
                            <Td>{reservation.persons}</Td>
                            <Td>{reservation.hours}</Td>
                            <Td>{reservation.price}</Td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

const Container = styled.div`
    background-color: #f5eec8;
    text-align: center;
    margin: 3% auto; 
    padding: 2% 7% 3.2% 7%;
    border-radius: 20px;
    width: 60%; 
`;

const Title = styled.h2`
    font-family: PuradakGentleGothicR;
    margin: 13px 0px 5px 0px;
    color: #63720b;
`;

const Table = styled.table`
    background-color: #a7d397;
    width: 100%; 
    margin: auto;
    border-collapse: separate;
    border-spacing: 0;
`;

const Th = styled.th`
    border: 0.5px solid #f5eec8;
    padding: 10px;
`;

const Td = styled.td`
    border: 1px solid #f5eec8;
    padding: 7px;
`;

export default ReservationList;

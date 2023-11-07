import React from "react";
import styled from "styled-components";
import { useState } from "react";

const ReservationForm = (props) => {
    const rooms = props.rooms;

    // 초기 입력값을 설정합니다.
    const initialValue = {
        idToDelete: '', // 삭제할 방 번호
        user: '', // 예약자명
        persons: '', // 사용 인원
        hour: '', // 이용 시간
    };  

    // 입력값을 관리하는 state 입니다.
    const [inputValue, setInputValue] = useState(initialValue);
    const { idToDelete, user, persons, hour } = inputValue;

    // 입력값이 변경될 때 실행되는 함수 입니다.
    const onChangeInput = event => {
        const { value, name } = event.target;
        setInputValue(prevInputValue => ({
            ...prevInputValue,
            [name]: value,
        }));
    }

    // 예약을 추가하는 함수 입니다. 
    const addReservation = () => {
        const idToDeleteInt = parseInt(idToDelete);
        if (!isNaN(idToDeleteInt)) {
            // 입력값을 기반으로 가격을 계산합니다.
            const calculatedPrice = parseInt(persons) * parseInt(hour);
    
            // 폼 입력값을 사용하여 예약 객체를 생성합니다.
            const reservation = {
                roomNo: idToDelete,
                customer: user,
                persons: parseInt(persons),
                hours: parseInt(hour),
                price: calculatedPrice,
            };
            
            // 부모 컴포넌트로 예약을 전달합니다.
            props.addReservation(reservation);
            console.log("예약되었습니다", reservation);
            setInputValue(initialValue); // 폼 입력값 초기화
        } else {
            console.log("잘못된 ID");
        }
    };

    return (
        <Container>
        <Title>Let's Reservation!</Title>
        <form>
            <Labels>
            <label>
                예약자명 :{" "}
                <input
                    name='user'
                    value={user}
                    type="text"
                    placeholder={"예약자 성함을 입력해주세요"}
                    size={25}
                    onChange={onChangeInput}
                />
            </label>{" "}
            <br />
            <br />
            <label>
                방 번호 :{" "}
                <input
                    type="text"
                    name='idToDelete'
                    value={idToDelete}
                    placeholder={"방 번호를 입력해주세요 "}
                    size={25}
                    onChange={onChangeInput}
                />
            </label>{" "}
            <br />
            <br />
            <label>
                사용인원 :{" "}
                <input 
                    name='persons'
                    value={persons}
                    type="text" 
                    placeholder={"인원을 입력해주세요"} 
                    size={25} 
                    onChange={onChangeInput}
                />
            </label>{" "}
            <br />
            <br />
            <label>
                이용시간 :{" "}
                <input
                    type="text"
                    value={hour}
                    name='hour'
                    placeholder={"이용시간을 입력해주세요"}
                    size={25}
                    onChange={onChangeInput}
                />
            </label>
            </Labels>
            <Button
            onClick={(e) => {
                e.preventDefault(); // 제출 시, 새로고침 막기
                addReservation();
            }}
            >
            예약하기
            </Button>
        </form>
        </Container>
    );
};

const Container = styled.div`
    background-color: #f5eec8;
    text-align: center;
    margin: 4% 25%;
    padding: 2% 7% 3.2% 7%;
    border-radius: 20px;
`;
const Title = styled.h2`
    font-family: PuradakGentleGothicR;
    margin: 13px 0px 5px 0px;
    color: #63720b;
`;
const Labels = styled.div`
    padding: 25px 0px;
    font-weight: bold;
`;
const Button = styled.button`
    text-align: center;
    background-color: #64740a;
    color: white;
    border-radius: 6px;
    border: 0;
    padding: 4px 10px;
    cursor: pointer;
`;

export default ReservationForm;

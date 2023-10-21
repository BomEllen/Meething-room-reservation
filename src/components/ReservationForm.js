import React from "react";
import styled from "styled-components";
import { useState } from "react";

const ReservationForm = (props) => {
    const rooms = props.rooms;

    const initialValue = {
        idToDelete: '',
        user:'',
        persons:'',
        hour:'',
    };  

    const [inputValue, setInputValue] = useState(initialValue); // 사용자가 입력한 값 저장
    const {idToDelete, user, persons, hour} = inputValue; // 비 구조화 할당..?

    const onChangeInput = event => {
        const { value, name } = event.target;
        setInputValue(prevInputValue => ({
            ...prevInputValue,
            [name]: value,
        }));
    }

    const deleteHandler = () => {
        const idToDeleteInt = parseInt(idToDelete);
        if (!isNaN(idToDeleteInt)) {
            props.deleteHandler(idToDeleteInt); // deleteHandler에 ID 전달
            console.log("ID가", idToDeleteInt, "인 방 삭제됨");
            setInputValue(initialValue); // 입력 필드 재설정
        } else {
            console.log("잘못된 ID");
        }
    };

    return (
        <Contaner>
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
                deleteHandler();
            }}
            >
            예약하기
            </Button>
        </form>
        </Contaner>
    );
};

const Contaner = styled.div`
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
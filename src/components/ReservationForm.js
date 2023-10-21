import React from "react";
import styled from "styled-components";
import { useState } from "react";
const ReservationForm = (props) => {
    const [inputValue, setInputValue] = useState(''); // 사용자가 입력한 값 저장
    const rooms = props.rooms;
    
    const deleteHandler = (id) => {
        const deleteHandler = () => {
        const idToDelete = parseInt(inputValue); // 입력값을 정수로 변환
        if (isNaN(idToDelete)) {
            console.log("올바른 방 번호를 입력해주세요.");
            return;
        }

        props.deleteHandler(idToDelete);
        console.log('삭제되었습니다', idToDelete);
        setInputValue(''); // 삭제 후 입력 필드 초기화
    }}


    return (
        <Contaner>
            <Title>Let's Reservation!</Title>
            <form>
                <Labels>
                    <label>
                        예약자명 : <input type='text' placeholder={"예약자 성함을 입력해주세요"} size={25} />
                    </label> <br/><br/>
                    <label>
                        방 번호 : <input type='text' placeholder={"방 번호를 입력해주세요 "} size={25} />
                    </label> <br/><br/>
                    <label>
                        사용인원 : <input type='text' placeholder={"인원을 입력해주세요"} size={25}/>
                    </label> <br/><br/>
                    <label>
                        이용시간 : <input type='text' placeholder={"이용시간을 입력해주세요"} size={25}/>
                    </label> 
                </Labels>
                <Button onClick={() => deleteHandler(101)}>예약하기</Button>
            </form>

        </Contaner>
    );
}

const Contaner = styled.div`
    background-color: #F5EEC8;
    text-align: center;
    margin: 4% 25%;
    padding: 2% 7% 3.2% 7%; 
    border-radius: 20px
`
const Title = styled.h2`
    font-family: PuradakGentleGothicR;
    margin: 13px 0px 5px 0px;
    color: #63720b;
`
const Labels = styled.div`
    padding: 25px 0px;
    font-weight: bold;
`
const Button = styled.button`
    text-align: center;
    background-color: #64740a;
    color: white;
    border-radius: 6px;
    border: 0;
    padding: 4px 10px;
    cursor: pointer;
`

export default ReservationForm;
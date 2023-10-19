import { useState } from "react";
import styled from "styled-components";

const ReservationForm = () => {
    const [mid, setMid] = useState('');  // state 변수

    // 이벤트 핸들러 정의
    const heandleInput = (e) => {
        // alert(e.target.value);
        setMid(e.target.value);  // state의 변수에 값을 넣을 땐 setter에 값을 변환해 줘야 함. 바로 mid값을 바꾸려고 하면 안됨!
    }

    return (
        <Contaner>
            <Title>Let's Reservation!</Title>
            <form>
                <Labels>
                    <label>
                        예약자명 : <input type='text' placeholder={"예약자 성함을 입력해주세요"} size={25} onChange={heandleInput}/>
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
                <Button>Click</Button>
            </form>

        {/* <h3>New menu : {mid}</h3>    얘 없애도 됨 위에 핸들러 반응해주는 거 */}
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
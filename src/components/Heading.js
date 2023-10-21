import styled from "styled-components";


const Heading = () => {
	return (
		<>
		<Title> Juyeon's Meeting Room </Title>
		<TableName>예약 가능 목록</TableName>
		</>


	);

}

const Title = styled.h1`
	font-family: 'MapoAgape';
	font-size: 300%;
	text-align: center;
	color: #64740a;
`
const TableName = styled.h2`
	font-family: 'Jeju Myeongjo';
	font-size: 200%;
	text-align: center;
	color: #613707;
	margin: 4% 0 2% 0;
`

export default Heading;
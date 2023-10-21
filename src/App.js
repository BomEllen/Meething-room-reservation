import './asset/font.css';
import Heading from './components/Heading';
import RoomList from './components/RoomList';
import ReservationForm from './components/ReservationForm';
import { useState } from 'react';

function App() {
    const [rooms, setRooms] = useState([
        {id: 101, name: 'Lemon', persons: 4, price: 55000},
        {id: 102, name: 'Cherry', persons: 6, price: 74000},
        {id: 202, name: 'Ocean', persons: 4, price: 60000},
        {id: 203, name: 'Sky', persons: 8, price: 88000},
        {id: 205, name: 'Forest', persons: 8, price: 94000},
        {id: 301, name: 'Smile', persons: 6, price: 60000},
        {id: 303, name: 'Cloud', persons: 12, price: 115000},
    ]);

    const deleteHandler = (id) =>{
      const updatedRooms = rooms.filter((room) => room.id !== id);

      // 변경된 방 목록을 state로 설정하여 화면을 다시 렌더링
      setRooms(updatedRooms);
      console.log('삭제되었습니다', id);
    }

    return (
    <div>
      <Heading/>
      <RoomList rooms={rooms}/>
      <ReservationForm rooms={rooms} deleteHandler={deleteHandler}/>
    </div>
  );
}

export default App;

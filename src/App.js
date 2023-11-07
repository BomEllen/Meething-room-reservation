import './asset/font.css';
import Heading from './components/Heading';
import RoomList from './components/RoomList';
import ReservationForm from './components/ReservationForm';
import ReservationList from './components/ReservationList';
import { useState } from 'react';

function App() {
  // 예약 가능한 방 목록을 초기화합니다.
  const [rooms, setRooms] = useState([
      {id: 101, name: 'Lemon', persons: 4, price: 55000},
      {id: 102, name: 'Cherry', persons: 6, price: 74000},
      {id: 202, name: 'Ocean', persons: 4, price: 60000},
      {id: 203, name: 'Sky', persons: 8, price: 88000},
      {id: 205, name: 'Forest', persons: 8, price: 94000},
      {id: 301, name: 'Smile', persons: 6, price: 60000},
  ]);

  // 예약 목록을 초기화합니다.
  const [reservations, setReservations] = useState([]);

  // 방을 삭제하는 함수입니다.
  const deleteHandler = (id) => {
      // 삭제 후 업데이트된 방 목록을 설정합니다.
      const updatedRooms = rooms.filter((room) => room.id !== id);
      setRooms(updatedRooms);
      console.log('삭제되었습니다', id);
  };

  // 예약을 추가하는 함수입니다.
  const addReservation = (reservation) => {
      // 예약된 방을 방 목록에서 삭제합니다.
      const updatedRooms = rooms.filter((room) => room.id !== reservation.roomNo);
      setRooms(updatedRooms);

      // 예약을 목록에 추가합니다.
      setReservations([...reservations, reservation]);
      console.log('예약되었습니다', reservation);
  };

  return (
      <div>
          <Heading />
          <RoomList rooms={rooms} />
          <ReservationForm rooms={rooms} addReservation={addReservation} />
          <ReservationList reservations={reservations} />
      </div>
  );
}

export default App;

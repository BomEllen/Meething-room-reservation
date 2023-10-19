import './asset/font.css';
import Heading from './components/Heading';
import RoomList from './components/RoomList';
import ReservationForm from './components/ReservationForm';

function App() {
  return (
    <div>
      <Heading/>
      <RoomList/>
      <ReservationForm/>
    </div>
  );
}

export default App;

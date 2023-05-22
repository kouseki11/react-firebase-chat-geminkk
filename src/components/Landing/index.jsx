import { Link } from 'react-router-dom';
import { chatRooms } from '../../data/chatRooms';
import { auth } from "../../services/firebase";
import './styles.css';

function Landing() {

    const signOut = () => {
        auth.signOut();
      };

    return (
        <>
            <h2>Pilih roomnya broo</h2>
            <ul className="chat-room-list">
                {chatRooms.map((room) => (
                    <li key={room.id}>
                        <Link to={`/room/${room.id}`}>{room.title}</Link>
                    </li>
                ))}
            </ul>
            <div>
                <button onClick={signOut} className="login">
                    Logout
                </button>
            </div>
        </>
    );
}

export { Landing };
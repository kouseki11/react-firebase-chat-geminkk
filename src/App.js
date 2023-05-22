import { AuthenticatedApp } from './components/AuthenticatedApp';
import { UnauthenticatedApp } from './components/UnauthenticatedApp';
import { useAuth } from './hooks/useAuth';
import { auth } from "./services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import './App.css';

function App() {
  const [user] = useAuthState(auth);
    return (
      <div className="container">
            <h1>Chat App Geminkk</h1>
            {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
        </div>
    )
}

export default App;

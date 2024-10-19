

  import { initializeApp } from "firebase/app";
  import { getAuth, GoogleAuthProvider } from "firebase/auth";
import "./App.css";

function App() {

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDRuUPDyzfWAWAuB5cKNd9aR1r9I5-SV6k",
    authDomain: "authentication-59009.firebaseapp.com",
    projectId: "authentication-59009",
    storageBucket: "authentication-59009.appspot.com",
    messagingSenderId: "1094708649603",
    appId: "1:1094708649603:web:5a51f4baf46e488a50c5b6",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
  const GoogleAuth = new GoogleAuthProvider();
  return <></>;
}

export default App;

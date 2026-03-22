import AuthPage from "./Component/Auth/AuthForm";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./utils/firebaseSDK";

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log("user in In");
    
    // ...
  } else {
    // User is signed out
    // ...
  }
});

function App() {
  return (
    <>
      <AuthPage />
    </>
  );
}

export default App;

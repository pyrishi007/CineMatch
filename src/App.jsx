import AuthPage from "./Component/Auth/AuthForm";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./utils/firebaseSDK";
import { addUser, removeUser } from "./Store/Feature/user";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Component/Home/Home";

function App() {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {

    },{

    }
  ])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email } = user;
        const userData = {
          userID: uid,
          userEmail: email,
        };
        dispatch(addUser(userData));
      } else {
        dispatch(removeUser());
      }
    });
  }, []);


  
  return (
    <>
      <Home />
    </>
  );
}

export default App;

import React, { useEffect } from "react";
import "./App.css";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { useStateContext } from "./contexts/ContextProvider";

function App() {
  const { isLoggedIn, setIsLoggedIn } = useStateContext();
  useEffect(() => {
    const userLoggedInStatus = localStorage.getItem("isLoggedIn");
    if (userLoggedInStatus === "1") {
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn]);
  return (
    <>
      {!isLoggedIn && <Login />}
      {isLoggedIn && <Home />}
    </>
  );
}

export default App;

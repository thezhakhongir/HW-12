import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/store/Auth-context";
// import Counter from "./components/counter/Counter";
import { MainContent } from "./components/styled-components/StyledComponents";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); /// for modal window
  const [toggled, setToggled] = useState(false);

  const changeNightAndDay = () => {
    setToggled((prevState) => !prevState);
  };

  // const [state, setState] = useState(0);

  // const add = () => {
  //   setState((prevState) => prevState + 1);
  // };

  useEffect(() => {
    const storedUserLoggedInfo = localStorage.getItem("islogin"); // save a localstorage

    if (storedUserLoggedInfo === "1") {
      isLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("islogin");
  };

  return (
    <React.Fragment>
      <AuthContext.Provider
        value={{ isLogin: isLoggedIn, onLogout: logoutHandler, isDay: toggled, toggleDay: changeNightAndDay }}
      >
        <MainHeader />
        <MainContent isDay={toggled}>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
          {/* <button onClick={add}>add</button> */}
        </MainContent>
        {/* <Counter /> */}
      </AuthContext.Provider>
    </React.Fragment>
  );
}

export default App;

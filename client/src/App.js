import "./App.css";
import AppRouter from "./Components/Features/AppRouter/AppRouterComponent";
import Header from "./Components/Features/Header/HeaderComponent";
import Footer from "./Components/Features/Footer/FooterComponent";
import { BrowserRouter as Router } from "react-router-dom";
import { useHistory } from "react-router";
import Login from "./Components/Pages/Login/LoginComponent";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState()

  const history = useHistory();

  useEffect(() => {
    setUser(localStorage.getItem("userProfile"))
  }, [history])

  return (
    <div className="App">
      <div className="body-app">
        <Router>
          <Header />
          {!user ? <Login /> : <AppRouter />}
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;

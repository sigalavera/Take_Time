import "./App.css";
import AppRouter from "./Components/Features/AppRouter/AppRouterComponent";
import Header from "./Components/Features/Header/HeaderComponent";
import Footer from "./Components/Features/Footer/FooterComponent";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";
import { getPosts } from "./Redux/Actions/PostAction";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <div className="App">
      <div className="body-app">
        <Router>
          <Header />
          <AppRouter />
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;

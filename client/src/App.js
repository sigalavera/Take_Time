import "./App.css";
import AppRouter from "./Components/Features/AppRouter/AppRouterComponent";
import Header from "./Components/Features/Header/HeaderComponent";
import Footer from "./Components/Features/Footer/FooterComponent";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (

    <div className="App">
      <Router>
        <Header />
        <AppRouter />
      </Router>
      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/HomeComponent";
import Header from "./Components/Features/Header/HeaderComponent";
import Footer from "./Components/Features/Footer/FooterComponent";
import ChatContainer from "./Components/Pages/Chat/ChatContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/chat">
            <ChatContainer />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

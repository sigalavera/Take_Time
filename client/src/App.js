import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppRouter from "./Components/Features/AppRouter/AppRouterComponent";


function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;

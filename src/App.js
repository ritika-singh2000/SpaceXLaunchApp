import "./App.css";
import LaunchesList from "./Components/LaunchesList";
import Signup from "./Components/SignUp";
import store from "./Redux Store/reducer";
import Login from "./Components/Login";
import { Provider } from "react-redux";
import DisplayPages from "./Components/DisplayPages";

function App() {
  return (
    <Provider store={store}>
      <DisplayPages />
    </Provider>
  );
}

export default App;

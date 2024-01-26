import UserList from "./components/UserList";
import "./App.css";
//import Register from "./components/Register";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/UserList" element={<UserList />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;

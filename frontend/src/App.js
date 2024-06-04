import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </>
  );
}

export default App;

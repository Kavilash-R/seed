import { Route, Routes } from "react-router-dom";
import Main from "./components/Main Page/Main";
import Navbar from "./components/HeaderAndFooter/Navbar";
import Community from "./components/Community Page/Community";
import Learning from "./components/Learning Page/Learning";
import Market from "./components/Market page/Market";
import News from "./components/News Page/News";
import Login from "./components/Login, Signup Page/Login";
import Signup from "./components/Login, Signup Page/Signup";
import Product from "./components/Product Page/Product";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/learning" element={<Learning />}></Route>
        <Route path="/products" element={<Product />}></Route>
        <Route path="/market" element={<Market />}></Route>
        <Route path="/community" element={<Community />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </>
  );
}

export default App;

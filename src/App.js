import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
      </Routes>
    </>
  );
}

export default App;

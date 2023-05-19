import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import DefauLayout from "./components/DefauLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<DefauLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

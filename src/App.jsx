import { BrowserRouter, Routes, Route } from "react-router";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

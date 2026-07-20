import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import { ThemeContext } from "./Hooks/ThemeContextProvider.jsx";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen w-full transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App


import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <>
      <div className="container mx-auto">
        <Header />
        <Routes>
          <Route path="/command" element={<div>Command</div>} />
        </Routes>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Teams from "./pages/Teams/Teams";

const App = () => {
  return (
    <>
      <div className="container mx-auto">
        <Header />
        <Routes>
          <Route path="/command" element={<Teams />} />
        </Routes>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
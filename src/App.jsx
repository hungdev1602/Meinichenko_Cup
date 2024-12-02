import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Teams from "./pages/Teams/Teams";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import { useState } from "react";

const App = () => {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false)

  return (
    <>
      <BurgerMenu 
        openBurgerMenu={openBurgerMenu}
        setOpenBurgerMenu={setOpenBurgerMenu}
      />
      <div className="container mx-auto">
        <Header 
          setOpenBurgerMenu={setOpenBurgerMenu}/>
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
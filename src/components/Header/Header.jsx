/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom"
import logo from "/images/logo.svg"
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

const Header = ({ setOpenBurgerMenu }) => {
  const navigate = useNavigate()
  const data = [
    {
      title: "Главная",
      href: "#ticket"
    },
    {
      title: "Организаторы",
      href: "/organizers"
    },
    {
      title: "Команды",
      href: "/command"
    },
    {
      title: "О фестивале",
      href: "#program"
    },
    {
      title: "Трансляция",
      href: "#broadcast"
    },
    {
      title: "Расписание",
      href: "#schedule"
    },
    {
      title: "Приглашенные гости",
      href: "#guests"
    },
  ]
  const handleScrollToSection = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      // Chuyển hướng về trang chính
      navigate("/");
      // Sử dụng setTimeout để đảm bảo rằng việc cuộn diễn ra sau khi chuyển hướng
      setTimeout(() => {
        window.scrollTo({ top: document.querySelector(href).offsetTop, behavior: 'smooth' });
      }, 100); // Thời gian chờ có thể điều chỉnh tùy theo nhu cầu
    }
  };

  return (
    <>
      <div className="mx-auto sm:mx-0 mt-[10px] sm:mt-[17px] pr-[10px] md:pr-[0px] border border-[#FF5200] rounded-[10px] py-[15px] pl-[15px] flex items-center justify-between sm:justify-normal">
        <NavLink to="/" className="w-[55px] md:w-[70px] lg:w-[100px] h-auto mr-[20px] md:mr-[80px] lg:mr-[132px]">
          <img 
            src={logo} 
            alt="" 
            className="w-full h-full object-cover"
          />
        </NavLink>

        <div className="hidden sm:flex items-center gap-[26px]">
          {data.map((item, index) => (
            <NavLink 
              key={index} 
              to={item.href}
              className="text-[9px] md:text-[11px] lg:text-[16px]"
              onClick={(e) => handleScrollToSection(e, item.href)}
            >
              {item.title}
            </NavLink>
          ))}
        </div>
        <div 
          className="h-[32px] w-[32px] bg-[#FF5200] rounded-full flex items-center justify-center cursor-pointer sm:hidden"
          onClick={() => setOpenBurgerMenu(true)}
        >
          <RxHamburgerMenu />
        </div>
      </div>
    </>
  )
}

export default Header


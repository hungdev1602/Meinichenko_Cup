/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom"
import logo from "/images/logo.svg"
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const data = [
    {
      title: "Организаторы",
      href: "#organizers"
    },
    {
      title: "Команды",
      href: "/command"
    },
    {
      title: "Программа",
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

  return (
    <>
      <div className="mx-auto sm:mx-0 mt-[17px] pr-[10px] md:pr-[0px] border border-[#FF5200] rounded-[10px] py-[15px] pl-[15px] flex items-center justify-between sm:justify-normal">
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
              onClick={(e) => {
                if (item.href.startsWith("#")) {
                  e.preventDefault();
                  window.scrollTo({ top: document.querySelector(item.href).offsetTop, behavior: 'smooth' });
                }
              }}
              className="text-[9px] md:text-[11px] lg:text-[16px]"
            >
              {item.title}
            </NavLink>
          ))}
        </div>
        <div className="h-[32px] w-[32px] bg-[#FF5200] rounded-full flex items-center justify-center cursor-pointer sm:hidden">
            <RxHamburgerMenu />
          </div>
      </div>
    </>
  )
}

export default Header

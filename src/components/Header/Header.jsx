/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom"
import logo from "/images/logo.svg"
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
      <div className="mt-[17px] border border-[#FF5200] rounded-[10px] py-[9px] pl-[15px] flex items-center">
        <Link to="/">
          <img 
            src={logo} 
            alt="" 
            className="w-[52px] h-[60px] mr-[132px]"
          />
        </Link>

        <div className="flex items-center gap-[26px]">
          {data.map((item, index) => (
            <Link 
              key={index} 
              to={item.href}
              onClick={() => window.scrollTo({ top: document.querySelector(item.href).offsetTop, behavior: 'smooth' })}
              className="text-[16px]"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Header
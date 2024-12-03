/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"
import logo from "/images/logo.svg"
import { IoClose } from "react-icons/io5";
import { LiaTelegramPlane } from "react-icons/lia";
import { SlSocialVkontakte } from "react-icons/sl";
import fox from "/images/fox.png"
import { useNavigate } from 'react-router-dom';
const BurgerMenu = ({ openBurgerMenu, setOpenBurgerMenu }) => {
  const navigate = useNavigate()
  const handleScrollToSection = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      // Chuyển hướng về trang chính
      navigate("/");
      setOpenBurgerMenu(false)
      // Sử dụng setTimeout để đảm bảo rằng việc cuộn diễn ra sau khi chuyển hướng
      setTimeout(() => {
        window.scrollTo({ top: document.querySelector(href).offsetTop, behavior: 'smooth' });
      }, 100); // Thời gian chờ có thể điều chỉnh tùy theo nhu cầu
    }
  };
  return (
    <>
      <div className={"fixed top-0 left-0 right-0 bg-[#00234A] h-full z-[9999] pt-[10px] transition duration-800 " + (openBurgerMenu ? "visible opacity-100" : "invisible opacity-0")}>
        <div className="container mx-auto">
          <div className="pr-[10px] border border-[#FF5200] rounded-[10px] py-[15px] pl-[15px] flex items-center justify-between">
            <div 
              className="w-[55px] md:w-[70px] lg:w-[100px] h-auto mr-[20px] md:mr-[80px] lg:mr-[132px]"
            >
              <img 
                src={logo} 
                alt="" 
                className="w-full h-full object-cover"
              />
            </div>

            <div 
              className="h-[32px] w-[32px] bg-[#FF5200] rounded-full flex items-center justify-center cursor-pointer"
              onClick={() => setOpenBurgerMenu(false)}
            >
              <IoClose  />
            </div>
          </div>

          <div className="text-center mt-[20px]">
            <ul className="flex flex-col gap-[15px] text-[14px]">
              <li className="">
                <NavLink
                  to={'/organizers'}
                  onClick={() => setOpenBurgerMenu(false)}
                >
                  Организаторы
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to={'/command'}
                  onClick={() => setOpenBurgerMenu(false)}
                >
                  Команды
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to={'#program'}
                  onClick={(e) => handleScrollToSection(e, '#program')}
                >
                  О фестивале
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to={'#broadcast'}
                  onClick={(e) => handleScrollToSection(e, '#broadcast')}
                >
                  Трансляция
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to={'#schedule'}
                  onClick={(e) => handleScrollToSection(e, '#schedule')}
                >
                  Расписание
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to={'#guests'}
                  onClick={(e) => handleScrollToSection(e, '#guests')}
                >
                  Приглашенные гости
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="mt-[40px] grid grid-cols-2 gap-[10px]">
            <a href="/" target="_blank" className="w-[160px] h-[69px] flex items-center justify-center bg-[#111821] rounded-[12px]">
              <LiaTelegramPlane size={35}/>
            </a>
            <a href="https://vk.com/melnichenkocup" target="_blank" className="w-[160px] h-[69px] flex items-center justify-center bg-[#111821] rounded-[12px]">
              <SlSocialVkontakte size={35}/>
            </a>
          </div>
          <img 
          src={fox} 
          alt="" 
          className="absolute top-[160px] right-0 w-[135px] h-auto z-[9998]" 
        />
        </div>
        
      </div>
    </>
  )
}

export default BurgerMenu


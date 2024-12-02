/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"
import logo from "/images/logo.svg"
import { IoClose } from "react-icons/io5";
import { LiaTelegramPlane } from "react-icons/lia";
import { SlSocialVkontakte } from "react-icons/sl";
import fox from "/images/fox.png"
const BurgerMenu = ({ openBurgerMenu, setOpenBurgerMenu }) => {
  return (
    <>
      <div className={"fixed top-0 left-0 right-0 bg-[#00234A] h-full z-[9999] pt-[10px] opacity-0 " + (openBurgerMenu ? "visible opacity-100" : "invisible opacity-0")}>
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
                  to={'#organizers'}
                  onClick={() => {
                    setOpenBurgerMenu(false)
                    window.scrollTo({ top: document.querySelector('#organizers').offsetTop, behavior: 'smooth' });
                  }}
                >
                  Организаторы
                </NavLink>
              </li>
              <li className="">
                <a
                  href={'/command'}
                >
                  Команды
                </a>
              </li>
              <li className="">
                <NavLink
                  to={'#program'}
                  onClick={() => {
                    setOpenBurgerMenu(false)
                    window.scrollTo({ top: document.querySelector('#program').offsetTop, behavior: 'smooth' });
                  }}
                >
                  О фестивале
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to={'#broadcast'}
                  onClick={() => {
                    setOpenBurgerMenu(false)
                    window.scrollTo({ top: document.querySelector('#broadcast').offsetTop, behavior: 'smooth' });
                  }}
                >
                  Трансляция
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to={'#schedule'}
                  onClick={() => {
                    setOpenBurgerMenu(false)
                    window.scrollTo({ top: document.querySelector('#schedule').offsetTop, behavior: 'smooth' });
                  }}
                >
                  Расписание
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to={'#guests'}
                  onClick={() => {
                    setOpenBurgerMenu(false)
                    window.scrollTo({ top: document.querySelector('#guests').offsetTop, behavior: 'smooth' });
                  }}
                >
                  Приглашенные гости
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="mt-[40px] grid grid-cols-2 gap-[10px]">
            <a href="/" target="_blank" className="block py-[19px] px-[73px] bg-[#111821] rounded-[12px]">
              <LiaTelegramPlane size={35}/>
            </a>
            <a href="/" target="_blank" className="block py-[19px] px-[73px] bg-[#111821] rounded-[12px]">
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
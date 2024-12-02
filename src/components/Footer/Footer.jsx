/* eslint-disable no-undef */
import { Link } from "react-router-dom"
import { LiaTelegramPlane } from "react-icons/lia";
import { SlSocialVkontakte } from "react-icons/sl";
import logo_footer from "/images/logo.svg"
import React from "react";
const Footer = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [size, setSize] = React.useState(70);

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  React.useEffect(() => {
    const calculateWidthAndHeight = () => {
      if (width < 576) {
        setSize(30)
      } else {
        setSize(70)
      }
    };

    calculateWidthAndHeight();
  }, [width]);

  return (
    <>
      <div className="h-[279px] sm:h-[285px] bg-footer bg-cover">
        <div className="container mx-auto pt-[35px] sm:pt-[40px]">
          <div className="w-[150px] md:w-[200px] lg:w-[230px] h-auto mx-auto">
            <img src={logo_footer} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="flex justify-between flex-wrap md:flex-nowrap mt-[25px] sm:mt-[40px] text-[12px] sm:text-[16px]">
            {/* Left */}
            <div className="flex gap-[120px] md:gap-[20px] lg:gap-[90px]">
              <ul>
                <li>
                  <Link to="#program" onClick={() => window.scrollTo({ top: document.querySelector('#program').offsetTop, behavior: 'smooth' })}>Программа</Link>
                </li>
                <li>
                  <Link to="#broadcast" onClick={() => window.scrollTo({ top: document.querySelector('#broadcast').offsetTop, behavior: 'smooth' })}>Трансляция</Link>
                </li>
                <li>
                  <Link to="#" onClick={() => window.scrollTo({ top: document.querySelector('#').offsetTop, behavior: 'smooth' })}>Дисциплины</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="#guests" onClick={() => window.scrollTo({ top: document.querySelector('#guests').offsetTop, behavior: 'smooth' })}>Приглашенные гости</Link>
                </li>
                <li>
                  <Link to="/command">Команды</Link>
                </li>
                <li>
                  <Link to="#organizers" onClick={() => window.scrollTo({ top: document.querySelector('#organizers').offsetTop, behavior: 'smooth' })}>Организаторы</Link>
                </li>
              </ul>
            </div>
            {/* Right */}
            <div className="flex gap-[20px] mt-[15px] sm:mt-0">
              <a href="/" target="_blank" className="w-[165px] lg:w-[275px] h-[69px] sm:h-[80px] lg:h-[100px] inline-flex justify-center items-center bg-[#00234A] rounded-[20px]">
                <LiaTelegramPlane size={size}/>
              </a>
              <a href="/" target="_blank" className="w-[165px] lg:w-[275px] h-[69px] sm:h-[80px] lg:h-[100px] inline-flex justify-center items-center bg-[#00234A] rounded-[20px]">
                <SlSocialVkontakte size={size}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer

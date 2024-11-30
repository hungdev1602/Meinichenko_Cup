import { Link } from "react-router-dom"
import { LiaTelegramPlane } from "react-icons/lia";
import { SlSocialVkontakte } from "react-icons/sl";
import logo_footer from "/images/logo_footer.png"
const Footer = () => {
  return (
    <>
      <div className="h-[285px] bg-footer bg-cover">
        <div className="container mx-auto">
          <div className="w-[200px] h-[200px] mx-auto">
            <img src={logo_footer} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="flex justify-between mt-[-30px]">
            {/* Left */}
            <div className="flex gap-[90px]">
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
            <div className="flex gap-[20px]">
              <a href="/" target="_blank" className="w-[275px] h-[100px] inline-flex justify-center items-center bg-[#00234A] rounded-[20px]">
                <LiaTelegramPlane size={70}/>
              </a>
              <a href="/" target="_blank" className="w-[275px] h-[100px] inline-flex justify-center items-center bg-[#00234A] rounded-[20px]">
                <SlSocialVkontakte size={70}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
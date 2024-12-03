/* eslint-disable no-unused-vars */
import cup from "/images/cup.png"
import arrow from "/images/arrow.svg"
import circle1 from "/images/circle_1.png"
import circle2 from "/images/circle_2.png"
import circle3 from "/images/circle_3.png"
import circle4 from "/images/circle_4.png"
import { FaPlus } from "react-icons/fa";

const Section1 = () => {
  const data = [
    {
      img: circle1,
      position: 1
    },
    {
      img: circle2,
      position: 2
    },
    {
      img: circle3,
      position: 3
    },  
    {
      img: circle4,
      position: 4
    }
  ]

  return (
    <>
      <div className="h-[470px] sm:h-[680px] md:h-[734px] bg-section1 bg-cover pt-[52px] sm:pt-[70px] pb-[30px]" id="organizers">
        <div className="container mx-auto">
          <div className="w-[323px] h-[199px] sm:w-[452px] sm:h-[280px] md:w-[500px] md:h-[310px] xl:w-[521px] xl:h-[321px] mb-[30px] sm:mb-0 truncate mx-auto">
            <img 
              src={cup} 
              alt="" 
              className="w-full h-full object-cover"
            />
          </div>

          <a href="https://events.nethouse.ru/kry/115907/" target="_blank" className="sm:inline-block mt-[50px] md:mt-[68px] ml-[65px] sm:ml-[155px] md:ml-[250px] lg:ml-[350px] xl:ml-[431px] py-[11px] px-[40px] text-[14px] md:text-[20px] lg:text-[24px] font-[700] border border-white rounded-[15px] font-actay bg-[#11182174]">
            получить билет
          </a>

          <div className="mt-[40px] lg:mt-[104px] flex justify-between items-center flex-wrap">
            {/* Left */}
            <div className="flex items-center gap-[20px]">
              <div className="py-[13px] pl-[15px] pr-[15px] sm:pr-[135px] bg-[#11182181] rounded-[15px]">
                <span className="text-[11px] md:text-[18px] font-[700] font-actay">14-15 <br /> декабря</span>
              </div>
              <a href="https://yandex.ru/maps/org/futbol_arena_yenisey/1250157435/?ll=92.983699%2C56.057639&z=16" target="_blank" className="w-[252px] sm:w-[430px] py-[13px] pl-[15px] pr-[15px] sm:pr-[135px] bg-[#11182181] rounded-[15px] relative">
                <span className="text-[11px] md:text-[18px] font-[700] font-actay">Кросноярск, <br /> Футбол - Арена “Енисей”</span>
                <img 
                  src={arrow} 
                  alt="" 
                  className="absolute top-[10px] right-[10px]"
                />
              </a>
            </div>

            {/* Right */}
            <div className="mt-[8px] md:mt-0 ml-auto md:ml-0 flex items-center gap-[8px] sm:block">
              <div className="text-[14px] md:text-[20px] font-[400] mb-0 sm:mb-[5px]">приглашенные гости</div>
              <div className="flex items-center">
                <div className="w-[34px] sm:w-[50px] md:w-[66px] h-[34px] sm:h-[50px] md:h-[66px] rounded-full bg-[#FF5200] inline-flex items-center justify-center text-[20px] sm:text-[50px] relative z-[5]">
                  <FaPlus size={18}/>
                </div>
                <div 
                  className="w-[34px] sm:w-[50px] md:w-[66px] h-[34px] sm:h-[50px] md:h-[66px] border-[2px] border-[#FF5200] rounded-full truncate ml-[-10px] md:ml-[-15px] relative z-[4]" 
                >
                  <img src={circle1} alt="" className="w-full h-full object-cover"/>
                </div>
                <div 
                  className="w-[34px] sm:w-[50px] md:w-[66px] h-[34px] sm:h-[50px] md:h-[66px] border-[2px] border-[#FF5200] rounded-full truncate ml-[-10px] md:ml-[-15px] relative z-[3]" 
                >
                  <img src={circle2} alt="" className="w-full h-full object-cover"/>
                </div>
                <div 
                  className="w-[34px] sm:w-[50px] md:w-[66px] h-[34px] sm:h-[50px] md:h-[66px] border-[2px] border-[#FF5200] rounded-full truncate ml-[-10px] md:ml-[-15px] relative z-[2]" 
                >
                  <img src={circle3} alt="" className="w-full h-full object-cover"/>
                </div>
                <div 
                  className="w-[34px] sm:w-[50px] md:w-[66px] h-[34px] sm:h-[50px] md:h-[66px] border-[2px] border-[#FF5200] rounded-full truncate ml-[-10px] md:ml-[-15px] relative z-[1]" 
                >
                  <img src={circle4} alt="" className="w-full h-full object-cover"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section1


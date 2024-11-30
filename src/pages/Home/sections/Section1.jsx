/* eslint-disable no-unused-vars */
import cup from "/images/cup.png"
import arrow from "/images/arrow.svg"
import circle1 from "/images/circle_1.png"
import circle2 from "/images/circle_2.png"
import circle3 from "/images/circle_3.png"
import circle4 from "/images/circle_4.png"
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
      <div className="h-[734px] bg-section1 bg-cover pt-[70px] pb-[30px]" id="organizers">
        <div className="container mx-auto">
          <div className="w-[521px] h-[321px] truncate mx-auto">
            <img 
              src={cup} 
              alt="" 
              className="w-full h-full object-cover"
            />
          </div>

          <a href="/" className="inline-block mt-[68px] ml-[431px] py-[11px] px-[40px] text-[24px] font-[700] border border-white rounded-[15px] font-actay bg-[#11182174]">получить билет</a>

          <div className="mt-[104px] flex justify-between items-center">
            {/* Left */}
            <div className="flex items-center gap-[20px]">
              <div className="py-[13px] pl-[15px] pr-[135px] bg-[#11182181] rounded-[15px]">
                <span className="text-[18px] font-[700] font-actay">14-15 <br /> декабря</span>
              </div>
              <a href="/" className="py-[13px] pl-[15px] pr-[135px] bg-[#11182181] rounded-[15px] relative">
                <span className="text-[18px] font-[700] font-actay">Кросноярск, <br /> Футбол - Арена “Енисей”</span>
                <img 
                  src={arrow} 
                  alt="" 
                  className="absolute top-[10px] right-[10px]"
                />
              </a>
            </div>

            {/* Right */}
            <div className="">
              <div className="text-[20px] font-[400] mb-[5px]">приглашенные гости</div>
              <div className="flex items-center">
                <div className="w-[66px] h-[66px] rounded-full bg-[#FF5200] inline-flex items-center justify-center text-[30px] relative z-[5]">+</div>
                <div 
                  className="w-[66px] h-[66px] border-[2px] border-[#FF5200] rounded-full truncate ml-[-15px] relative z-[4]" 
                >
                  <img src={circle1} alt="" className="w-full h-full object-cover"/>
                </div>
                <div 
                  className="w-[66px] h-[66px] border-[2px] border-[#FF5200] rounded-full truncate ml-[-15px] relative z-[3]" 
                >
                  <img src={circle2} alt="" className="w-full h-full object-cover"/>
                </div>
                <div 
                  className="w-[66px] h-[66px] border-[2px] border-[#FF5200] rounded-full truncate ml-[-15px] relative z-[2]" 
                >
                  <img src={circle3} alt="" className="w-full h-full object-cover"/>
                </div>
                <div 
                  className="w-[66px] h-[66px] border-[2px] border-[#FF5200] rounded-full truncate ml-[-15px] relative z-[1]" 
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


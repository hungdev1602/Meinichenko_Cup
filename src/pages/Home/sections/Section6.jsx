import temp from "/images/circle_1.png"
import bodyDecor1 from "/images/body_decor_1.png"
import bodyDecor2 from "/images/body_decor_2.png"
const Section6 = () => {
  const data = [
    1, 2, 3, 4
  ]
  const data2 = [1, 2, 3]
  const data3 = [1, 2]
  return (
    <>
      <div className="mt-[130px] relative" id="guests">
        <div className="text-[48px] font-[700] font-actay text-center uppercase">приглашенные футбольные звезды </div>

        <div className="text-[24px] font-[700] font-actay text-center mt-[40px]">
          <span className="py-[10px] px-[20px] border border-[#FF5200] rounded-[10px]">Медиа игроки</span>
        </div>

        <div className="flex items-center justify-between mt-[30px]">
          {
            data.map((item, index) => (
              <div className="" key={index}>
                <div className="w-[275px] h-[275px] truncate rounded-full">
                  <img src={temp} alt="" className="w-full h-full object-cover"/>
                </div>
                <div className="mt-[20px] text-[24px] font-[700] font-actay text-center w-[140px] mx-auto">Михаил Прокопьев</div>
              </div>
            ))
          }
        </div>

        <div className="text-[24px] font-[700] font-actay text-center mt-[60px]">
          <span className="py-[10px] px-[20px] border border-[#FF5200] rounded-[10px]">Профессионалы</span>
        </div>

        <div className="flex items-center justify-center gap-[20px] mt-[30px]">
          {
            data2.map((item, index) => (
              <div className="" key={index}>
                <div className="w-[275px] h-[275px] truncate rounded-full">
                  <img src={temp} alt="" className="w-full h-full object-cover"/>
                </div>
                <div className="mt-[20px] text-[24px] font-[700] font-actay text-center w-[140px] mx-auto">Михаил Прокопьев</div>
              </div>
            ))
          }
        </div>
        <div className="flex items-center justify-center gap-[20px] mt-[40px]">
          {
            data3.map((item, index) => (
              <div className="" key={index}>
                <div className="w-[275px] h-[275px] truncate rounded-full">
                  <img src={temp} alt="" className="w-full h-full object-cover"/>
                </div>
                <div className="mt-[20px] text-[24px] font-[700] font-actay text-center w-[140px] mx-auto">Михаил Прокопьев</div>
              </div>
            ))
          }
        </div>
        <img src={bodyDecor1} alt="" className="absolute bottom-[-200px] left-[-150px] z-[-1]"/>
        <img src={bodyDecor2} alt="" className="absolute bottom-[300px] right-[-350px] z-[-1]"/>
      </div>
    </>
  )
}

export default Section6
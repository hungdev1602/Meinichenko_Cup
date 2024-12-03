import melnichenko from "/images/melnichenko.png"
import founder from "/images/founder.png"
import Section2 from "./sections/Section2"
const Organizers = () => {
  return (
    <>
      <div className="mt-[60px] mb-[130px]">
        <div className="w-[427px] h-auto truncate mx-auto">
          <img src={melnichenko} alt="" className="w-full h-full object-cover"/>
        </div>

        <div className="mt-[90px] flex justify-between gap-[90px]">
          {/* Left */}
          <div className="w-[42%] text-[24px]">
            <div className=""><span className="font-actay"><b>Фонд Мельниченко</b></span> занимается развитием промышленных городов и территорий в разных регионах России.</div>
            <div className="mt-[25px] ">Основан предпринимателем Андреем Мельниченко.</div>
          </div>

          {/* Right */}
          <div className="flex-1">
            <div className="w-[565px] h-auto rounded-[20px] truncate">
              <img src={founder} alt="" className="w-full h-full object-cover"/>
            </div>
            <div className="text-[20px] font-[400] mt-[10px]">Андрей Мельниченко</div>
          </div>
        </div>

        <div className="mt-[-80px] w-fit">
          <a 
            href="https://aimfond.ru" 
            target="_blank" 
            className="inline-block w-[393px] h-[74px] bg-[#111821] py-[22px] px-[35px] rounded-[15px] text-center text-[24px] font-actay"
          >
            перейти на сайт фонда
          </a>
        </div>

        <Section2 />
      </div>
    </>
  )
}

export default Organizers
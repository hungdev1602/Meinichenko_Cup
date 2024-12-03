import melnichenko from "/images/melnichenko.png"
import founder from "/images/founder.png"
import Section2 from "./sections/Section2"
const Organizers = () => {
  const text = ` занимается развитием 
  промышленных городов 
и территорий в разных регионах России. 
Основан предпринимателем Андреем 
Мельниченко.
`
  return (
    <>
      <div className="mt-[40px] sm:mt-[60px] mb-[90px] sm:mb-[130px]">
        <div className="w-[214px] sm:w-[340px] md:w-[427px] h-auto truncate mx-auto">
          <img src={melnichenko} alt="" className="w-full h-full object-cover"/>
        </div>

        <div className="mt-[40px] sm:mt-[60px] md:mt-[90px] flex justify-between flex-wrap md:flex-nowrap gap-[15px] sm:gap-[30px] md:gap-[90px]">
          {/* Left */}
          <div className="w-[100%] md:w-[42%] text-[14px] sm:text-[18px] lg:text-[24px] text-center md:text-start">
            <div className="hidden sm:block "><span className="font-actay"><b>Фонд Мельниченко</b></span> занимается развитием промышленных городов и территорий в разных регионах России.</div>
            <div className="hidden sm:block mt-[25px] ">Основан предпринимателем Андреем Мельниченко.</div>
            <div className="block sm:hidden text-[14px] text-center whitespace-pre-line"><b className="font-actay">Фонд Мельниченко</b> {text}</div>
          </div>

          {/* Right */}
          <div className="w-[100%] md:flex-1">
            <div className="w-full md:w-[455px] lg:w-[565px] h-auto rounded-[20px] truncate">
              <img src={founder} alt="" className="w-full h-full object-cover"/>
            </div>
            <div className="hidden sm:block text-[16px] md:text-[20px] font-[400] text-center md:text-start mt-[10px]">Андрей Мельниченко</div>
          </div>
        </div>

        <div className="mt-[10px] md:mt-[-80px] mx-auto md:mx-0 w-fit">
          <a 
            href="https://aimfond.ru" 
            target="_blank" 
            className="inline-block w-[232px] sm:w-[270px] lg:w-[393px] h-[40px] sm:h-[62px] lg:h-[74px] bg-[#111821] py-[10px] sm:py-[22px] px-[21px] sm:px-[35px] rounded-[10px] sm:rounded-[15px] text-center text-[14px] lg:text-[24px] font-actay"
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
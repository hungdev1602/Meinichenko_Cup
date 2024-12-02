
const Section5 = () => {
  const schedule1 = [
    {
      time: "10:00 - 11:00",
      title: "Открытие «Кубка Мельниченко»"
    },
    {
      time: "10:00 - 18:00",
      title: "Работа развлекательных зон для гостей"
    },
    {
      time: "11:00 - 18:30",
      title: "Отборочные матчи "
    },
    {
      time: "12:30 - 13:00",
      title: "Автограф-сессии"
    },
    {
      time: "15:00 - 15:30",
      title: "Автограф-сессии"
    }
  ]
  const schedule2 = [
    {
      time: "10:00 - 14:00",
      title: "Отборочные матчи"
    },
    {
      time: "10:00 - 17:00",
      title: "Работа развлекательных зон для гостей"
    },
    {
      time: "14:00 - 15:00 ",
      title: "Автограф-сессии"
    },
    {
      time: "14:30 - 15:30",
      title: "Полуфинал и Финал «Кубка Мельниченко»"
    },
    {
      time: "15:45 - 16:15",
      title: "Выставочный матч звезд РПЛ и медиа Лиги"
    },
    {
      time: "16:30 - 17:00",
      title: "Награждение победителей «Кубка Мельниченко»"
    }
  ]
  return (
    <>
      <div className="mt-[80px] sm:mt-[130px]" id="schedule">
        <div className="uppercase text-center text-[32px] md:text-[48px] font-[700] font-actay">расписание фестиваля</div>

        <div className="mt-[63px] grid grid-cols-1 lg:grid-cols-2 gap-[45px] lg:gap-[20px]">
          <div className="border border-[#FF5200] pr-0 pl-[15px] sm:px-[32px] pt-[50px] lg:pt-[68px] pb-[10px] rounded-[20px] relative">
            {
              schedule1.map((item, index) => (
                <div className="flex items-center gap-[8px] sm:gap-[28px] mb-[20px] text-[10px] sm:text-[13px] lg:text-[16px]" key={index}>
                  <span className="">{item.time}</span>
                  <span className="">{item.title}</span>
                </div>
              ))
            }
            <div className="text-[14px] sm:text-[24px] font-[700] font-actay py-[10px] px-[34px] bg-[#FF5200] absolute rounded-[10px] top-[-30px] left-[103px] sm:left-[175px] md:left-[285px] lg:left-[140px] xl:left-[178px]">14 декабря</div>
          </div>
          <div className="border border-[#FF5200] pr-0 pl-[15px] sm:px-[32px] pt-[50px] lg:pt-[68px] pb-[10px] rounded-[20px] relative">
            {
              schedule2.map((item, index) => (
                <div className="flex items-center gap-[8px] sm:gap-[28px] mb-[20px] text-[10px] sm:text-[13px] lg:text-[16px]" key={index}>
                  <span className="">{item.time}</span>
                  <span className="">{item.title}</span>
                </div>
              ))
            }
            <div className="text-[14px] sm:text-[24px] font-[700] font-actay py-[10px] px-[34px] bg-[#FF5200] absolute rounded-[10px] top-[-30px] left-[103px] sm:left-[175px] md:left-[285px] lg:left-[140px] xl:left-[178px]">15 декабря</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section5
import InfoBox from "../components/InfoBox"
import invite1 from "/images/invite_1.png"
import invite2 from "/images/invite_2.png"
import invite3 from "/images/invite_3.png"
import invite4 from "/images/invite_4.png"
const Section7 = () => {
  const data = [
    {
      img: invite1,
      title: "Присоединятся к командам",
      desc: `Будут играть на поле вместе с сотрудниками компаний СУЭК/СГК`
    },
    {
      img: invite2,
      title: `Выставочный 
      матч`,
      desc: 
      `Устроят шоу-
      состязания 
      в футболе 5х5`
    },
    {
      img: invite3,
      title: `Автограф 
      сессия`,
      desc: `Раздадут автографы 
      и проведут мастер-
      классы`
    },
    {
      img: invite4,
      title: `проведут 
      награждение`,
      desc: `Наградят 
      победителей и 
      призёров фестиваля`
    },
  ]
  return (
    <>
      <div className="mt-[50px] sm:mt-[94px] mb-[90px] sm:mb-[150px]">
        <div className="w-[352px] sm:w-[560px] md:w-[799px] text-[14px] sm:text-[20px] md:text-[32px] font-[700] font-actay text-center mx-auto">Приглашенные футболисты примут активное участие в фестивале, а именно:</div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[10px] sm:gap-[20px] mt-[20px] sm:mt-[40px]">
          {
            data.map((item, index) => (
              <InfoBox 
                key={index}
                img={item.img}
                title={item.title}
                desc={item.desc}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Section7
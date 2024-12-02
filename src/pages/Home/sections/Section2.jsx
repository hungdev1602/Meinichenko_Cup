/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import ItemInfo from "../components/ItemInfo"
import Mask1 from "/images/Mask_1.png"
import Mask2 from "/images/Mask_2.png"
import Mask3 from "/images/Mask_3.png"
import Mask4 from "/images/Mask_4.png"
const Section2 = () => {
  const data = [
    {
      id: "01",
      img: Mask1,
      title: "Футбольные Соревнования",
      text: "Проводятся среди 10-ти команд, каждая команда включает от 15 до 20 участников."
    },
    {
      id: "02",
      img: Mask2,
      title: "Звездный матч ",
      text: `От бывших игроков РПЛ 
      и Футбольной Медиа Лиги`
    },
    {
      id: "03",
      img: Mask3,
      title: "Развлекательные зоны",
      text: "В рамках matchday для болельщиков будут организованы активные игры, зоны с видеоиграми и творческие мастер-классы."
    },
    {
      id: "04",
      img: Mask4,
      title: "Автограф сессии",
      text: "Автограф и фото-сессии от звезд профессионального и медиа-футбола"
    }
  ]
  return (
    <>
      <div className="mt-[80px] sm:mt-[90px] lg:mt-[130px]" id="program">
        <div className="text-center text-[24px] sm:text-[40px] md:text-[48px] font-[700] font-actay uppercase">Программа фестиваля</div>
        <div className="w-[310px] sm:w-full mx-auto sm:mx-0 sm:block text-center text-[14px] md:text-[24px] font-[400] mt-[10px] sm:mt-[8px]"><b>"Кубок Мельниченко"</b> — это командное спортивное соревнование для сотрудников предприятий СУЭК/СГК и их семей</div>

        <div className="mt-[20px] sm:mt-[33px] grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
          {data.map((item, index) => 
            <ItemInfo 
              key={index} 
              {...item} 
            />
          )}
        </div>
      </div>
    </>
  )
}

export default Section2
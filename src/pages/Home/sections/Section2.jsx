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
      text: "От бывших игроков РПЛ и Футбольной Медиа Лиги"
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
      <div className="mt-[40px]">
        <div className="text-center text-[48px] font-[700] font-actay">Программа фестиваля</div>
        <div className="text-center text-[24px] font-[700] font-actay mt-[20px]">Кубок Мельниченко</div>
        <div className="text-center text-[24px] font-[400] mt-[8px]">Командное спортивное соревнование для сотрудников предприятий СУЭК/СГК и их семей</div>

        <div className="mt-[33px] grid grid-cols-2 gap-[20px]">
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
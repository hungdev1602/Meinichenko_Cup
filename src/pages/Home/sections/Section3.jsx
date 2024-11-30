import DisiplineItem from "../components/DisiplineItem"
import disipline1 from "/images/disipline_1.png"
import disipline2 from "/images/disipline_2.png"
const Section3 = () => {
  const dataCol2 = [
    {
      id: "02/",
      text: "3х3 футбол",
    },
    {
      id: "03/",
      text: "футбольный челлендж",
    },
    {
      id: "04/",
      text: "футбольный булит",
    },
    {
      id: "05/",
      text: "битва вратарей",
    }
  ]
  const dataCol3 = [
    {
      id: "07/",
      text: "2х2 футбол",
    },
    {
      id: "08/",
      text: "Теннис-болл",
    },
    {
      id: "09/",
      text: "Полоса препятствий",
    },
    {
      id: "10/",
      text: "футбольный квиз",
    }
  ]
  return (
    <>
      <div className="mt-[130px] mb-[130px]">
        <div className="text-[48px] font-[700] font-actay text-center mb-[30px]">Дисциплины</div>

        <div className="grid grid-cols-4 gap-[20px]">
          {/* Col 1 */}
          <div className="flex flex-col gap-[20px]">
            <DisiplineItem
              id={"01/"}
              text={"5х5 футбол"}
            />
            <div className="w-[275px h-[253px] rounded-[10px] truncate">
              <img src={disipline1} alt="" className="w-full h-full object-cover"/>
            </div>
          </div>
          {/* Col 2 */}
          <div className="flex flex-col gap-[20px]">
            {
              dataCol2.map((item, index) => (
                <DisiplineItem
                  key={index}
                  id={item.id}
                  text={item.text}
                  style={(item.id === "03/" ? "mb-[-18px]" : item.id === "04/" ? "mb-[-18px]" : "mb-[-10px]")}
                />
              ))
            }
          </div>
          {/* Col 3 */}
          <div className="flex flex-col gap-[20px]">
            <div className="w-[275px h-[253px] rounded-[10px] truncate">
              <img src={disipline2} alt="" className="w-full h-full object-cover"/>
            </div>
            <DisiplineItem
              id={"06/"}
              text={"VR zone"}
            />
          </div>
          {/* Col 4 */}
          <div className="flex flex-col gap-[20px]">
            {
              dataCol3.map((item, index) => (
                <DisiplineItem
                  key={index}
                  id={item.id}
                  text={item.text}
                  style={(item.id === "09/" ? "mb-[-18px]" : item.id === "10/" ? "mb-[-18px]" : "mb-[-10px]")}
                />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Section3
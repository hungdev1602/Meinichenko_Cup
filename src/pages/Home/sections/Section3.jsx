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
      id: "04/",
      text: "футбольный челлендж",
    },
    {
      id: "06/",
      text: "футбольный булит",
    },
    {
      id: "08/",
      text: "битва вратарей",
    }
  ]
  const dataCol3 = [
    {
      id: "03/",
      text: "2х2 футбол",
    },
    {
      id: "05/",
      text: "Теннис-болл",
    },
    {
      id: "07/",
      text: "Полоса препятствий",
    },
    {
      id: "10/",
      text: "футбольный квиз",
    }
  ]
  const text1 = `Полоса 
  препятствий`
  const text2 = `футбольный 
  квиз`
  const text3 = `футбольный
  челлендж`
  const text4 = `футбольный
  булит`
  return (
    <>
      <div className="mt-[80px] sm:mt-[130px]" id="disciplines">
        <div className="text-[24px] sm:text-[48px] font-[700] font-actay text-center mb-[30px] uppercase">Дисциплины</div>

        {/* On PC */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[10px] lg:gap-[20px]">
          {/* Col 1 */}
          <div className="flex flex-col gap-[20px]">
            <DisiplineItem
              id={"01/"}
              text={"5х5 футбол"}
              style={"mb-[-18px] sm:mb-[-10px]"}
            />
            <div className="w-full h-[110px] sm:h-[253px] rounded-[10px] truncate">
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
                  style={(item.id === "04/" ? "mb-[-18px]" : item.id === "06/" ? "mb-[-18px]" : "mb-[-10px]")}
                />
              ))
            }
          </div>
          {/* Col 3 */}
          <div className="flex flex-col gap-[20px]">
            <div className="w-full h-[110px] sm:h-[253px] rounded-[10px] truncate">
              <img src={disipline2} alt="" className="w-full h-full object-cover"/>
            </div>
            <DisiplineItem
              id={"09/"}
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
                  style={(item.id === "07/" ? "mb-[-18px]" : item.id === "10/" ? "mb-0 lg:mb-[-18px]" : "mb-[-10px]")}
                />
              ))
            }
          </div>
        </div>
        
        {/* On Mobile */}
        <div className="grid grid-cols-2 gap-[10px] sm:hidden">
          {/* Col1 */}
          <div className="flex flex-col gap-[10px]">
            {/* 1 Item */}
            <div className="h-[50px] pl-[10px] pt-[10px] pb-[14px] border border-[#FF5200] rounded-[12px]">
              <div className="text-[10px] font-[400] text-[#ffffffb8] mb-[-10px]">01/</div>
              <div className="text-[12px] font-[500] pl-[33px] uppercase">5х5 футбол</div>
            </div>
            {/* 2 Item */}
            <div className="w-auto h-[110px] rounded-[10px] truncate">
              <img src={disipline1} alt="" className="w-full h-full object-cover"/>
            </div>
            {/* 3 Item */}
            <div className="h-[50px] pl-[10px] pt-[10px] pb-[14px] border border-[#FF5200] rounded-[12px]">
              <div className="text-[10px] font-[400] text-[#ffffffb8] mb-[-10px]">05/</div>
              <div className="text-[12px] font-[500] pl-[33px] uppercase">Теннис-болл</div>
            </div>
            {/* 4 Item */}
            <div className="h-[50px] pl-[10px] pt-[10px] pb-[14px] border border-[#FF5200] rounded-[12px]">
              <div className="text-[10px] font-[400] text-[#ffffffb8] mb-[-18px]">07/</div>
              <div className="text-[12px] font-[500] text-center uppercase whitespace-pre-line">{text1}</div>
            </div>
            {/* 5 Item */}
            <div className="h-[50px] pl-[10px] pt-[10px] pb-[14px] border border-[#FF5200] rounded-[12px]">
              <div className="text-[10px] font-[400] text-[#ffffffb8] mb-[-10px]">09/</div>
              <div className="text-[12px] font-[500] pl-[47px] uppercase">VR zone</div>
            </div>
            {/* 6 Item */}
            <div className="h-[50px] pl-[10px] pt-[10px] pb-[14px] border border-[#FF5200] rounded-[12px]">
              <div className="text-[10px] font-[400] text-[#ffffffb8] mb-[-18px]">10/</div>
              <div className="text-[12px] font-[500] text-center uppercase whitespace-pre-line">{text2}</div>
            </div>
          </div>

          {/* Col2 */}
          <div className="flex flex-col gap-[10px]">
            {/* 1 Item */}
            <div className="h-[50px] pl-[10px] pt-[10px] pb-[14px] border border-[#FF5200] rounded-[12px]">
              <div className="text-[10px] font-[400] text-[#ffffffb8] mb-[-10px]">02/</div>
              <div className="text-[12px] font-[500] pl-[38px] uppercase">3х3 футбол</div>
            </div>
            {/* 2 Item */}
            <div className="h-[50px] pl-[10px] pt-[10px] pb-[14px] border border-[#FF5200] rounded-[12px]">
              <div className="text-[10px] font-[400] text-[#ffffffb8] mb-[-10px]">03/</div>
              <div className="text-[12px] font-[500] pl-[38px] uppercase">2х2 футбол</div>
            </div>
            {/* 6 Item */}
            <div className="h-[50px] pl-[10px] pt-[10px] pb-[14px] border border-[#FF5200] rounded-[12px]">
              <div className="text-[10px] font-[400] text-[#ffffffb8] mb-[-18px]">04/</div>
              <div className="text-[12px] font-[500] text-center uppercase whitespace-pre-line">{text3}</div>
            </div>
            {/* 6 Item */}
            <div className="h-[50px] pl-[10px] pt-[10px] pb-[14px] border border-[#FF5200] rounded-[12px]">
              <div className="text-[10px] font-[400] text-[#ffffffb8] mb-[-18px]">06/</div>
              <div className="text-[12px] font-[500] text-center uppercase whitespace-pre-line">{text4}</div>
            </div>
            {/* 2 Item */}
            <div className="h-[50px] pl-[10px] pt-[10px] pb-[14px] border border-[#FF5200] rounded-[12px]">
              <div className="text-[10px] font-[400] text-[#ffffffb8] mb-[-10px]">08/</div>
              <div className="text-[12px] font-[500] pl-[23px] uppercase">битва вратарей</div>
            </div>
            
            {/* 2 Item */}
            <div className="w-auto h-[110px] rounded-[10px] truncate">
              <img src={disipline2} alt="" className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section3
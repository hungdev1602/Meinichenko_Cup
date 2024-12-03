
const Section2 = () => {
  const text1 = `Здоровый образ 
  жизни`
  const text2 = `Поддержка 
  культурных 
  инициатив`
  const text3 = `благоустройство 
  и сотрудничество 
  с городскими 
  сообществами `
  const text4 = `Поддержка 
  спортивных 
  инициатив`
  const text5 = `Поддержка 
  климатических 
  инициатив`
  const text6 = `Поддержка 
  экологических 
  инициатив`
  return (
    <>
      <div className="mt-[50px] md:mt-[120px]">
        <div className="text-[14px] sm:text-[20px] md:text-[32px] font-[700] font-actay text-center uppercase">Фонд реализует проекты в следующих сферах: </div>

        <div className="mt-[20px] sm:mt-[58px]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px] sm:gap-[20px]">
            {/* Item 1 */}
            <div className="w-[160px] sm:w-[230px] xl:w-[275px] h-[90px] sm:h-[110px] border border-[#FF5200] rounded-[10px] flex items-center justify-center">
              <div className="text-[12px] sm:text-[16px] md:text-[20px] font-[500] uppercase">Образование</div>
            </div>
            {/* Item 2 */}
            <div className="w-[160px] sm:w-[230px] xl:w-[275px] h-[90px] sm:h-[110px] border border-[#FF5200] rounded-[10px] flex items-center justify-center">
              <div className="text-[12px] sm:text-[16px] md:text-[20px] font-[500] uppercase">медицина</div>
            </div>
            {/* Item 3 */}
            <div className="w-[160px] sm:w-[230px] xl:w-[275px] h-[90px] sm:h-[110px] border border-[#FF5200] rounded-[10px] flex items-center justify-center">
              <div className="text-[12px] sm:text-[16px] md:text-[20px] font-[500] uppercase whitespace-pre-line text-center">{text1}</div>
            </div>
            {/* Item 4 */}
            <div className="w-[160px] sm:w-[230px] xl:w-[275px] h-[90px] sm:h-[110px] border border-[#FF5200] rounded-[10px] flex items-center justify-center">
              <div className="text-[12px] sm:text-[16px] md:text-[20px] font-[500] uppercase whitespace-pre-line text-center">{text2}</div>
            </div>
            {/* Item 5 */}
            <div className="w-[160px] sm:w-[230px] xl:w-[275px] h-[90px] sm:h-[128px] border border-[#FF5200] rounded-[10px] flex items-center justify-center">
              <div className="text-[12px] sm:text-[16px] md:text-[20px] font-[500] uppercase whitespace-pre-line text-center">{text3}</div>
            </div>
            {/* Item 6 */}
            <div className="w-[160px] sm:w-[230px] xl:w-[275px] h-[90px] sm:h-[128px] border border-[#FF5200] rounded-[10px] flex items-center justify-center">
              <div className="text-[12px] sm:text-[16px] md:text-[20px] font-[500] uppercase whitespace-pre-line text-center">{text4}</div>
            </div>
            {/* Item 7 */}
            <div className="w-[160px] sm:w-[230px] xl:w-[275px] h-[90px] sm:h-[128px] border border-[#FF5200] rounded-[10px] flex items-center justify-center">
              <div className="text-[12px] sm:text-[16px] md:text-[20px] font-[500] uppercase whitespace-pre-line text-center">{text5}</div>
            </div>
            {/* Item 8 */}
            <div className="w-[160px] sm:w-[230px] xl:w-[275px] h-[90px] sm:h-[128px] border border-[#FF5200] rounded-[10px] flex items-center justify-center">
              <div className="text-[12px] sm:text-[16px] md:text-[20px] font-[500] uppercase whitespace-pre-line text-center">{text6}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section2
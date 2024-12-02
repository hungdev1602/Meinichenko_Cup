import TeamInfoType1 from "../components/TeamInfoType1"
import TeamInfoType2 from "../components/TeamInfoType2"
import decor1 from "/images/team_decor_1.png"
import decor2 from "/images/team_decor_2.png"
import decor3 from "/images/team_decor_3.png"
import fox from "/images/fox.png"
const Section1 = () => {
  return (
    <>
      <div className="mt-[40px] sm:mt-[73px] mb-[90px] sm:mb-[130px] relative">
        <div className="text-[24px] sm:text-[48px] font-[700] font-actay uppercase text-center mb-[30px]">Команды участников</div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px]">
          <TeamInfoType1 
            title={"СУЭК-Кузбасс-1"}
            team={"ГОРНЯК"}
          />
          <TeamInfoType2 
            title="СУЭК-Кузбасс-1"
            team="ШАХТЁРИКИ"
            img={decor1}
          />
          <TeamInfoType2 
            title="АО Кузбассэнерго"
            team="«Сборная Кузбасса - КУЗБАССЭНЕРГО»"
            check={true}
          />
          <TeamInfoType2 
            title={`АО "Абаканская ТЭЦ"`}
            team="Хакасия-СГК"
          />
          <TeamInfoType2 
            title={`Филиал АО «Енисейская ТГК (ТГК-13)» - «Красноярская ГРЭС-2»`}
            team="ЭНЕРГИЯ"
            check={true}
          />
          <TeamInfoType2 
            title={`АО «Енисейская ТГК (ТГК-13)»`}
            team="Енисей-СГК"
          />
          <TeamInfoType2 
            title={`Красноярск СУЭК`}
            team="СК 1"
            img={decor2}
            checkImg={true}
          />
          <TeamInfoType1 
            title={"Красноярск СУЭК"}
            team={"СК 2"}
          />
          <TeamInfoType2 
            title={`Красноярск СУЭК`}
            team="СК 3"
            img={decor3}
            checkImg={true}
          />
          <TeamInfoType1 
            title={`"ООО"СУЭК-ХАКАСИЯ""`}
            team={"-"}
          />
        </div>
        <img src={fox} alt="" className="absolute right-[-50px] md:right-[180px] bottom-[-200px] md:bottom-[-50px] w-[251px] h-[236px] z-[-1]" />
      </div>
    </>
  )
}

export default Section1

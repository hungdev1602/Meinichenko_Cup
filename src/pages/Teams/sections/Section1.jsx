import TeamInfoType1 from "../components/TeamInfoType1"
import TeamInfoType2 from "../components/TeamInfoType2"
import decor1 from "/images/team_decor_1.png"
import decor2 from "/images/team_decor_2.png"
import decor3 from "/images/team_decor_3.png"
import bodyDecor1 from "/images/body_decor_1.png"
import bodyDecor2 from "/images/body_decor_2.png"
const Section1 = () => {
  return (
    <>
      <div className="mt-[73px] mb-[130px] relative">
        <div className="text-[48px] font-[700] font-actay uppercase text-center mb-[30px]">Команды участников</div>

        <div className="grid grid-cols-4 gap-[20px]">
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

        <img src={bodyDecor1} alt="" className="absolute top-[250px] left-[-150px] z-[-1]"/>
        <img src={bodyDecor2} alt="" className="absolute top-0 right-[-150px] z-[-1]"/>
      </div>
    </>
  )
}

export default Section1
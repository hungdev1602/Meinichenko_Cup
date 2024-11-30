import OnlineBroadcast from "../../components/OnlineBroadcast/OnlineBroadcast"
import Section1 from "./sections/Section1"
import Section2 from "./sections/Section2"
import Section3 from "./sections/Section3"
import Section5 from "./sections/Section5"
import Section6 from "./sections/Section6"
import Section7 from "./sections/Section7"

const Home = () => {
  return (
    <>
      <div className="mt-[32px]">
        <Section1 />
        <div className="container mx-auto">
          <Section2 />
          <Section3 />
          <OnlineBroadcast />
          <Section5 />
          <Section6 />
          <Section7 />
        </div>
      </div>
    </>
  )
}

export default Home
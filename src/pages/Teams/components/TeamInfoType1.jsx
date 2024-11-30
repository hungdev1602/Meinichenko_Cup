/* eslint-disable react/prop-types */

const TeamInfoType1 = ({title, team}) => {
  return (
    <>
      <div className="p-[15px] bg-[#ffffff32] rounded-[10px]">
        <div className="text-[14px] font-[400]">{title}</div>
        <div className="text-[24px] font-[700] font-actay mt-[88px]">{team}</div>
      </div>
    </>
  )
}

export default TeamInfoType1
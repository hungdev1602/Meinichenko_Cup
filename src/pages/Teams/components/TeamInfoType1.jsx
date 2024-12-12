/* eslint-disable react/prop-types */

const TeamInfoType1 = ({title, team}) => {
  return (
    <>
      <div className="p-[10px] sm:p-[15px] bg-[#ffffff32] rounded-[10px]">
        <div className="text-[12px] sm:text-[14px] font-[400]">{title}</div>
        <div className="w-[150px] xl:w-[260px] text-[10px] sm:text-[16px] xl:text-[18px] font-[700] font-actay mt-[88px]">{team}</div>
      </div>
    </>
  )
}

export default TeamInfoType1
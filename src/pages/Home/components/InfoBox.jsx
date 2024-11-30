/* eslint-disable react/prop-types */

const InfoBox = ({ img, title, desc}) => {
  return (
    <>
      <div className="p-[20px] bg-[#4D6580] rounded-[20px]">
        <div className="w-[70px] h-[70px] truncate">
          <img src={img} alt={title} className="w-full h-full object-cover"/>
        </div>
        <div className="text-[20px] font-[700] font-actay mt-[43px] uppercase">{title}</div>
        <div className="text-[20px] font-[400] mt-[15px]">{desc}</div>
      </div>
    </>
  )
}

export default InfoBox
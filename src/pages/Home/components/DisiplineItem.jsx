/* eslint-disable react/prop-types */

const DisiplineItem = ({ id, text, style = "mb-0 lg:mb-[-10px]" }) => {
  if(id == "02/" || id == "09/" || id == "10/"){
    style = "mb-[-18px] md:mb-[-10px]"
  }
  return (
    <>
      <div className="pt-[10px] pl-[10px] h-[50px] sm:h-[71px] border border-[#FF5200] rounded-[10px]">
        <div className={"text-[14px] font-[400] opacity-[0.8] " + style}>{id}</div>
        <div className="w-[157px] lg:w-[190px] text-[12px] sm:text-[15px] lg:text-[20px] font-[400] mx-auto text-center uppercase whitespace-normal leading-[25px]">{text}</div>
      </div>
    </>
  )
}

export default DisiplineItem
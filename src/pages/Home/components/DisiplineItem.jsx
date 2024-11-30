/* eslint-disable react/prop-types */

const DisiplineItem = ({ id, text, style = "mb-[-10px]" }) => {
  console.log(style)
  return (
    <>
      <div className="pt-[10px] pl-[10px] h-[71px] border border-[#FF5200] rounded-[10px]">
        <div className={"text-[14px] font-[400] opacity-[0.8] " + style}>{id}</div>
        <div className="w-[190px] text-[20px] font-[400] mx-auto text-center uppercase whitespace-normal leading-[25px]">{text}</div>
      </div>
    </>
  )
}

export default DisiplineItem
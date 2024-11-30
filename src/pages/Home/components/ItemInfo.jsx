/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Mask from "/images/Mask_1.png"
const ItemInfo = (props) => {
  const {
    id,
    img,
    title,
    text
  } = props;
  return (
    <>
      <div className="pt-[25px] pl-[25px] bg-[#4C6580] h-[261px] rounded-[15px] truncate relative">
        <div className="inline-flex justify-center items-center w-[50px] h-[50px] bg-[#FF5200] text-[20px] rounded-[10px]">{id}/</div>
        <div className="text-[24px] font-[700] mt-[48px] font-actay">{title}</div>
        <div className={"w-[526px] text-[24px] font-[300] mt-[9px] whitespace-normal leading-[25px]"}>{text}</div>

        <img src={img} alt="" className="absolute top-0 right-0 z-[0]"/>
      </div>
    </>
  )
}

export default ItemInfo
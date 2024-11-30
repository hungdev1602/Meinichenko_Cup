/* eslint-disable react/no-unknown-property */
import { LiaTelegramPlane } from "react-icons/lia";
import { SlSocialVkontakte } from "react-icons/sl";

const OnlineBroadcast = () => {
  return (
    <>
      <div className="mt-[30px] mb-[130px]" id="broadcast">
        <div className="text-[48px] font-[700] font-actay text-center uppercase mb-[30px]">смотрите онлайн трансляцию фестивля в vk</div>

        <iframe src="https://vk.com/video_ext.php?oid=-22822305&id=456241864&hd=2" width="1160" height="545" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>

        <div className="text-[32px] font-[700] font-actay text-center mt-[50px]">Подписывайтесь на нас в социальных сетях</div>

        <div className="mt-[40px] flex justify-center gap-[20px]">
          <a href="/" target="_blank" className="w-[290px] h-[150px] inline-flex justify-center items-center bg-[#111821] rounded-[20px]">
            <LiaTelegramPlane size={70}/>
          </a>
          <a href="/" target="_blank" className="w-[290px] h-[150px] inline-flex justify-center items-center bg-[#111821] rounded-[20px]">
          <SlSocialVkontakte size={70}/>
          </a>
        </div>
      </div>
      
    </>
  )
}

export default OnlineBroadcast
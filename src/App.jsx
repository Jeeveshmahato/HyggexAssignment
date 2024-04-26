
import img1 from '../src/assets/Component 40.png'
import img2 from '../src/assets/Group 1.png'
import img3 from '../src/assets/Frame.png'
import img4 from '../src/assets/1.png'
import img5 from '../src/assets/Vector.png'
import img6 from '../src/assets/few.png'
import img7 from '../src/assets/xc.png'
import img8 from '../src/assets/xvdc.png'
import img9 from '../src/assets/df.png'
import img10 from '../src/assets/sdv.png'
import img11 from '../src/assets/Component 40.png'
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";

const App = () => {
  return (
    <>
      <div className=' bg-[#F9F9F9] font-Inter  py-10 px-32'>
        <div className=' flex justify-between items-center'>
          <img className=' w-[191px] h-[39px]' src={img1} alt="" />
          <div className=' text-[18px] items-center font-[400] flex gap-10'>
            <p>Home</p>
            <p>Flashcard</p>
            <p>Contact</p>
            <p>FAQ</p>
            <button className=' bg-gradient-to-b from-[#06296F] to-[#164DBF] text-white px-6 py-2 rounded-[32px]'>Login</button>
          </div>
        </div>
        <div className=' text-[18px] items-center mt-12 font-[500] flex gap-2'>
          <GoHome />
          <IoIosArrowForward />
          <p>Flashcard</p>
          <IoIosArrowForward />
          <p>Mathematics</p>
          <IoIosArrowForward />
          <p className=' text-[#06286E] font-[600] '>Relation and Function</p>
        </div>
        <p className=' text-[32px] font-[700] text-[#06296F]  mt-12 -gradient-to-b from-[#06296F] to-[#164DBF]'>Relations and Functions ( Mathematics )</p>
        <div className=' flex flex-col gap-8 justify-center mt-10 items-center'>
          <div className=' flex gap-10  text-[#696671]  text-[20px] font-[500]'>
            <p className=' font-[700]  text-[#06296F] underline-offset-[14px] underline decoration-[#06286E] '>Study</p>
            <p>Quiz</p>
            <p>Test</p>
            <p>Game</p>
            <p>Others</p>
          </div>
          <div className=' p-8 rounded-[42.507px]  w-[712px] h-[324px] bg-gradient-to-l from-[#06296F] to-[#164DBF]'>
            <div className=' flex justify-between'>

              <img className=' w-[34px] h-[34px]' src={img4} alt="" />
              <img className=' w-[34px] h-[34px]' src={img3} alt="" />
            </div>
            <div className=' w-full h-full flex items-center justify-center'>
              <p className=' text-[38.257px] font-[700] font-Lato text-white mb-12'>9 + 6 + 7x - 2x - 3</p>
            </div>
          </div>
          <div className=' flex w-[50%]  items-center  justify-between'>
            <img className=' w-[30px] h-[30px]' src={img5} alt="" />
            <div className=' flex gap-10 items-center'>
              <img className=' w-[60px] h-[60px]' src={img6} alt="" />
              <p className=' text-[24px] font-[700]'>01/10</p>
              <img className=' w-[60px] h-[60px]' src={img7} alt="" />
            </div>
            <img className=' w-[30px] h-[30px]' src={img8} alt="" />

          </div>
        </div>
        <div className=' mt-10 items-center px-10 flex justify-between'>
          <div className=' flex  items-center'>
            <img className=' w-[98.796px] h-[100.663px]' src={img2} alt="" />
            <div>
              <p className=' text-[12.4px] font-[400] text-[#696671]'>Published by</p>
              <img className=' w-[85.143px] h-[24.543px]' src={img11} alt="" />
            </div>
          </div>
          <div className=' flex gap-3  items-center'>
            <img src={img9} alt="" />
            <p className=' text-[28px] font-[600] text-[#06286E]'>Create Flashcard</p>

          </div>
        </div>
        <p className=' text-[#06286E] mt-20 text-[40px] font-[700]'>FAQ</p>
        <div className=' flex  flex-col gap-5 mt-10'>
        <div className=' p-4 w-[50%] border border-[#217EEC] rounded-[12px] flex justify-between'>
          <p className=' text-[16px] font-[600]'>Can education flashcards be used for all age groups?</p>
          <img className=' w-[24px] h-[24px]' src={img10} alt="" />
        </div>
        <div className=' p-4 w-[50%] border border-[#217EEC] rounded-[12px] flex justify-between'>
          <p className=' text-[16px] font-[600]'>How do education flashcards work?</p>
          <img className=' w-[24px] h-[24px]' src={img10} alt="" />
        </div>
        <div className=' p-4 w-[50%] border border-[#217EEC] rounded-[12px] flex justify-between'>
          <p className=' text-[16px] font-[600]'>Can education flashcards be used for test preparation?</p>
          <img className=' w-[24px] h-[24px]' src={img10} alt="" />
        </div>
        </div>
        
      </div>
    </>
  )
}

export default App
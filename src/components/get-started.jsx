import styles from "../style"
import { arrowUp } from "../assets"

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[99%] h-[99%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient flex">Get <img className="w-[23px] h-[23px] ml-2 object-contain" src={arrowUp} alt="arrow up"/></span>
          <span className="text-gradient">Started </span>
        </p>
      </div>
    </div>
  </div>
)


export default GetStarted
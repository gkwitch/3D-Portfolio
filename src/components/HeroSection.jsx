import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse
    items-center justify-between xl:px-24 px-10 relative overflow-hidden">

    {/*Left Side */}
    <div className=" z-40 xl:mb-0 mb-[20%]">
      <motion.h1
      initial={{ opacity: 0, y:80}}
      animate={{ opacity:1, y:0}}
      transition={{
        type:"spring",
        stiffines: 40,
        damping: 25,
        delay: 1.3,
        duration: 1.5,
      }}
      className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6">
        Build Fast <br /> Reliable Results
      </motion.h1>
      <motion.p 
      initial={{ opacity: 0, y:80}}
      animate={{ opacity:1, y:0}}
      transition={{
        type:"spring",
        stiffnes: 40,
        damping: 25,
        delay: 1.8,
        duration: 1.5,
      }}
      className="text-xl md:text-1xl lg:text-2xl text-purple-200 max-w-2xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non repellendus quis nobis illo ipsam sapiente commodi? Quidem quaerat exercitationem eligendi dolorem quia, at possimus dolores ad modi, velit deleniti rerum.
      </motion.p>
    </div>
    {/*Right Side */}
    <Spline className="absolute xl:right-[-28%] right-0 top-[20%] lg:top-0" scene="https://prod.spline.design/EPjmX3tlnnMPkRoQ/scene.splinecode" />
    </section>
  )
}

export default HeroSection
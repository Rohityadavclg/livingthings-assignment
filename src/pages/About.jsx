import React from "react"

 
import Footer from "../components/common/footer";

const About = () => {
  return (
    <div>
      <section className="bg-white">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
            Driving Innovation in AC repair
            
            <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
            Once active, our smart E-mode helps you save on your AC’s energy usage by 25% on an average.
            </p>
          </header>
          <div className="sm:h-[70px] lg:h-[150px]"></div>
          
        </div>
      </section>

      

       
      <Footer />
    </div>
  )
}

export default About

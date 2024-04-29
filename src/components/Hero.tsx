import React from "react";

const Hero = () => {
  return (
    <section className="max-h-full container  w-full  max-w-full">
      <div className="relative h-[600px] max-h-full">
        <img
          src="/public/herobackground@2x.png"
          alt=""
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute  inset-0 ">
          <div className="  h-full flex justify-center items-center px-8 md:px-12 lg:px-32 text-white">
            <div className="flex  flex-col gap-8 md:gap-8 ">
              {/* entertaining */}
              <div className="text-[40px] leading-[45px] lg:text-[60px] lg:leading-[75px] font-extrabold  text-center  ">
                <span>Ensuring secure data accessibility</span>
                <br />
                <span>anywhere care is delivered</span>
              </div>
              {/* text */}
              <div className="text-center text-lg md:text-3xl font-bold flex flex-col gap-4">
                <p>
                  Digital solutions designed to revolutionize patient care and
                  foster operational excellence.
                </p>
                <p>
                  Omnione is more than just a digital solution; it's a pathway
                  to enhanced healthcare delivery.
                </p>
              </div>
              {/* button */}
              <div>
                <button>hey</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

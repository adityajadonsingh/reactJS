import aditya from "../../assets/aditya.jpg";
import Social from "../../Components/Social";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="container mx-auto px-10">
          <div className="flex flex-wrap">
            <div className="content lg:w-3/5 w-full lg:pr-10 my-auto">
              <div className="wrapper lg:text-start text-center">
                <h1 className="text-white md:text-4xl text-2xl font-bold">
                  I am Aditya Jadon
                </h1>
                <span className="block font-extrabold">Web Developer +</span>
                <span className="block font-extrabold mt-[-25px]">
                  UX Designer
                </span>
                <p className="text-white md:text-2xl text-lg md:mt-5 mt-0 lg:pr-5 pr-0 font-normal">
                  I break down complex user experinece problems to create
                  integritiy focussed solutions that connect billions of people
                </p>
                <div className="flex lg:justify-start justify-center">
                  <Social padding={"mt-10"} />
                </div>
              </div>
            </div>
            <div className="image-box lg:w-2/5 lg:mt-0 mt-14 lg:block flex justify-center w-full relative">
              <div className="box">
                <img src={aditya} alt="Aditya Jadon" />
              </div>
            </div>
          </div>
          <div className="numberFact w-full flex flex-wrap relative justify-center z-10 md:mt-20 mt-14">
            <div className="item lg:w-1/3 md:w-1/2 w-full lg:mb-0 mb-8">
              <div className="flex justify-center items-center gap-x-3 text-[#dddddd]">
                <div className="number">
                  <span className="font-black md:text-6xl text-5xl">1.5+</span>
                </div>
                <div className="text md:text-xl text-lg">
                  <span className="block">
                    Years Of <br /> Experience
                  </span>
                </div>
              </div>
            </div>
            <div className="item lg:w-1/3 md:w-1/2 w-full lg:mb-0 mb-8">
              <div className="flex justify-center items-center gap-x-3 text-[#dddddd]">
                <div className="number">
                  <span className="font-black md:text-6xl text-5xl">100+</span>
                </div>
                <div className="text md:text-xl text-lg">
                  <span className="block">
                    Created <br /> Designs
                  </span>
                </div>
              </div>
            </div>
            <div className="item lg:w-1/3 md:w-1/2 w-full lg:mb-0 mb-8">
              <div className="flex justify-center items-center gap-x-3 text-[#dddddd]">
                <div className="number">
                  <span className="font-black md:text-6xl text-5xl">10+</span>
                </div>
                <div className="text md:text-xl text-lg">
                  <span className="block">
                    Projects <br /> Completed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;

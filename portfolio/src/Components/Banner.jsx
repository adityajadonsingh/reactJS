import aditya from "../assets/aditya.jpg"
import Social from "./Social";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="container mx-auto">
          <div className="flex">
            <div className="content w-3/5 pr-10 my-auto">
              <div className="wrapper">
                <h1 className="text-white text-4xl font-bold">I am Aditya Jadon</h1>
                <span className="block font-extrabold">Web Developer +</span>
                <span className="block font-extrabold">UX Designer</span>
                <p className="text-white text-2xl mt-5 pr-5 font-normal">
                  I break down complex user experinece problems to create
                  integritiy focussed solutions that connect billions of people
                </p>
                <Social padding={"mt-10"}/>
              </div>
            </div>
            <div className="image-box w-2/5 relative">
                <div className="box">
                    <img src={aditya} alt="Aditya Jadon" />
                </div>
            </div>
            
          </div>
          <div className="numberFact w-full flex relative z-10 mt-14">
                <div className="item w-1/4">
                    <div className="flex">
                        <div className="number">
                            <span className="font-black text-5xl">1.5+</span>
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

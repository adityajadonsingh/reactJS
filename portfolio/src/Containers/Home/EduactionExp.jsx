import Heading from "../../Components/Heading";
import Exp_Card from "../../Components/Exp_Card";

const experienceData = [{
    id: 1,
    duration : "Feb 2024 - Present",
    designation : "Ass. Web Designer",
    company : "Krishi Jagran"
},
{
    id: 2,
    duration : "Sept 2023 - Jan 2024",
    designation : "Web Developer",
    company : "FMD India"
},
{
    id: 3,
    duration : "April 2023 - Sept 2023",
    designation : "Web Developer",
    company : "DigiDotes"
},
{
    id: 4,
    duration : "Nov 2022 - March 2023",
    designation : "Web Developer Intern",
    company : "DigiDotes"
}
]
const educationData = [{
    id: 1,
    duration : "Feb 2024 - Present",
    designation : "MERN Stack Dev",
    company : "Geekster"
},
{
    id: 2,
    duration : "2024 - 2019",
    designation : "B.Tech Hons. (Cyber Security)",
    company : "Quantum Univerity"
},
{
    id: 3,
    duration : "2019 - 2018",
    designation : "12th",
    company : "DPSG, Palam Vihar"
},
{
    id: 4,
    duration : "2017 - 2016",
    designation : "10th",
    company : "Chiranjiv Bharati School"
}
]


const EduactionExp = () => {
  return (
    <>
      <div className="edu-exp" id="exp">
        <div className="container mx-auto flex flex-wrap justify-evenly">
          <div className="card p-5 lg:w-2/5 w-full">
            <div className="wrapper">
              <div className="icon-box flex lg:justify-start justify-center gap-x-4">
                <div className="icn"><i className="bi bi-laptop"></i></div>
                <Heading title={"My Experience"} position={"justify-start"} />
              </div>
              <ul className="mt-10">
                {
                    experienceData.map((item, idx) => <li key={idx+"exp_card"} className="mb-6"><Exp_Card  duration={item.duration} designation={item.designation} company={item.company}/></li>)
                }
              </ul>
            </div>
          </div>
          <div className="card p-5 lg:w-2/5 w-full">
            <div className="wrapper">
              <div className="icon-box flex lg:justify-start justify-center gap-x-4">
                <div className="icn"><i className="bi bi-book"></i></div>
                <Heading title={"My Eduaction"} position={"justify-start"} />
              </div>
              <ul className="mt-10">
                {
                    educationData.map((item, idx) => <li key={idx+"exp_card"} className="mb-6"><Exp_Card  duration={item.duration} designation={item.designation} company={item.company}/></li>)
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EduactionExp;

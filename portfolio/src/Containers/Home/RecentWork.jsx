import Heading from "../../Components/Heading";
import Work from "../../Components/Work";
import shakti from "../../assets/shakti-vardhak.png"
import digidotes from "../../assets/digidotes.png"
import molecular from "../../assets/molecularit.png"
import fmd from "../../assets/fmd-india.png"
import evolve from "../../assets/evolve-clinic.png"
import caaq from "../../assets/caaq.png"

const data = [{
    id: 1,
    projectName : "Shakti Vardhak Hybrid Seeds",
    img : shakti,
    link : "https://shaktivardhakhspl.com/"
},
{
    id: 2,
    projectName : "Molecular",
    img : molecular,
    link : "https://www.molecularit.com/"
},
{
    id: 3,
    projectName : "The Evolve Clinic",
    img : evolve,
    link : "https://www.theevolveclinic.com/"
},
{
    id: 4,
    projectName : "DigiDotes",
    img : digidotes,
    link : "https://digidotes.com/"
},
{
    id: 5,
    projectName : "CAAQ",
    img : caaq,
    link : "https://caaq.in/"
},
{   id: 6,
    projectName : "FMD India",
    img : fmd,
    link : "https://www.fmdindia.in/"
}
]

const RecentWork = () => {
  return (
    <>
      <div className="recent-work" id="portfolio">
        <div className="container mx-auto px-10">
          <Heading
            title={"My Recent Works"}
            position={"items-center"}
            para={
              "Explore a selection of projects showcasing my expertise in web design, development, and creative solutions"
            }
          />
            <div className="flex lg:mt-16 mt-10 flex-wrap">
                {
                    data.map((item) => <Work key={`${item.id}_workCard`} project={item.projectName} imgPath={item.img} link={item.link}/>)
                }
                
            </div>
        </div>
      </div>
    </>
  );
};

export default RecentWork;

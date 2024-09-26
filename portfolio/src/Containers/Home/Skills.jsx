import Heading from "../../Components/Heading";
import SkillCard from "../../Components/SkillCard";
import reactIcn from "../../assets/skill-icns/react.png";
import htmlIcn from "../../assets/skill-icns/html-5.png";
import jScriptIcn from "../../assets/skill-icns/java-script.png";
import cssIcn from "../../assets/skill-icns/css-3.png";
import javaIcn from "../../assets/skill-icns/java.png";
import tailIcn from "../../assets/skill-icns/Tailwind-CSS.png";
import bootstrapIcn from "../../assets/skill-icns/Bootstrap.png";
import photoshopIcn from "../../assets/skill-icns/adobe-photoshop.png"
const skillData = [
  {
    imgPath: reactIcn,
    skill_name: "React JS",
  },
  {
    imgPath: jScriptIcn,
    skill_name: "JavaScript",
  },
  {
    imgPath: javaIcn,
    skill_name: "Java",
  },
  {
    imgPath: tailIcn,
    skill_name: "Tailwind CSS",
  },
  {
    imgPath: bootstrapIcn,
    skill_name: "Bootstrap",
  },
  {
    imgPath: photoshopIcn,
    skill_name: "Adobe Photoshop",
  },
  {
    imgPath: htmlIcn,
    skill_name: "HTML 5",
  },
  {
    imgPath: cssIcn,
    skill_name: "CSS 3",
  },
];

const Skills = () => {
  return (
    <>
      <div className="skills" id="#skills">
        <div className="container mx-auto px-10">
          <Heading
            title={"My Skills"}
            position={"items-center"}
            para={
              "Proficient in web development with expertise in React, JavaScript, HTML, CSS, and modern design tools"
            }
          />
          <div className="flex mt-10 flex-wrap justify-center">

            {
                skillData.map((item, idx) => <SkillCard key={idx+"skill_card"} img={item.imgPath} skill={item.skill_name} />)
            }
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

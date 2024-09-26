
const SkillCard = ({img, skill}) => {
  return (
    <>
      <div className="skill-item lg:w-1/6 md:w-1/3 w-1/2 p-3">
        <div className="wrapper flex flex-col items-center justify-center">
            <img src={img} alt={skill} />
        </div>
        <span className="block text-center md:text-xl text-lg text-[#8750f7] font-semibold mt-5">{skill}</span>
      </div>
    </>
  );
};

export default SkillCard;

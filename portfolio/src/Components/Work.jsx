const Work = ({project, imgPath, link }) => {
  return (
    <>
      <div className="work-card lg:w-1/3 md:w-1/2 w-full relative lg:p-5 p-2">
        <div className="wrapper">
          <a href={link} target="_blank">
            <img src={imgPath} alt={project} />
            <div className="project-name absolute">
              <span className="block">{project}</span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Work;

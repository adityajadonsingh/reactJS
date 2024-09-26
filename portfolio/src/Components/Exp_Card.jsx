const Exp_Card = ({ duration, designation, company}) => {
    
  return (
    <>
      <div className="exp-card mb-5 lg:text-start text-center">
            <span className="block duration font-bold md:text-2xl text-lg">{duration}</span>
            <span className="block designation font-bold md:text-4xl text-2xl py-1">{designation}</span>
            <span className="block company text-lg">{company}</span>
      </div>
    </>
  );
};

export default Exp_Card;

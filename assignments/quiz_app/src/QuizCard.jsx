const QuizCard = (props) => {
  const allAnswers = [props.question.correct_answer, ...props.question.incorrect_answers];
  const shuffleAnswers = allAnswers.sort(() => Math.random() - 0.5);
  const checkAnswer = (selectedIdx) => {
    if(shuffleAnswers[selectedIdx] === props.question.correct_answer){
      props.setScore(props.score + 1);
    }
    props.currentQuestionFunc(props.currentQuestion + 1);
  }
  console.log(props.score);
  return (
    <>
      <div className="w-full flex gap-x-2">
        <span className="block font-bold text-nowrap text-xl">
          Question {props.questionIdx + 1}.
        </span>
        <span className="block text-xl text-[#575757]">
          {props.question.question}
        </span>
      </div>
      <div className="options mt-5 flex justify-end">
        <ul className="list-disc w-5/6">
        {
          shuffleAnswers.map((item, idx) => {
            return <li className="my-2" key={`${idx}-options`}>
            <button className="bg-[#5e5ee6] hover:bg-[#6a6add] py-2 px-5 rounded text-white text-lg font-bold" onClick={() => checkAnswer(idx)}>
              {item}
            </button>
          </li> 
          })
        }
          
          
        </ul>
      </div>
    </>
  );
};

export default QuizCard;

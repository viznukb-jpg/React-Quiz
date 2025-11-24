import Options from "./Options";

export default function Question({ question, answer, dispatch }) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} asnwer={answer} dispatch={dispatch} />
    </div>
  );
}

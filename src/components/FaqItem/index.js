// Write your code here.
const FaqItem = props => {
  const {faqDetails} = props
  const {questionText, answerText} = faqDetails
  return (
    <div>
      <h1>{questionText}</h1>
      <p>{answerText}</p>
    </div>
  )
}

export default FaqItem

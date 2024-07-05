// Write your code here.
const FaqItem = props => {
  const {faqDetails} = props
  const {questionText, answerText} = faqDetails
  return (
    <div>
      <h1>{questionText}</h1>
      <button type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
          alt="plus"
        />
      </button>
      <hr />
      <p>{answerText}</p>
    </div>
  )
}

export default FaqItem

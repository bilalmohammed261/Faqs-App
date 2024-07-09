// Write your code here.
const FaqItem = props => {
  const {faqDetails, toggleIsFaqClicked} = props
  const {questionText, answerText, isClicked, id} = faqDetails
  const imgUrl = isClicked
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const altText = isClicked ? 'minus' : 'plus'
  const faqAnswerText = isClicked ? answerText : ''

  const onClickFaq = () => {
    console.log(id)

    toggleIsFaqClicked(id)
  }

  return (
    <li>
      <h1>{questionText}</h1>
      <button type="button" onClick={onClickFaq}>
        <img src={imgUrl} alt={altText} />
      </button>
      <hr />
      <p>{faqAnswerText}</p>
    </li>
  )
}

export default FaqItem

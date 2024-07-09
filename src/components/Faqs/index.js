// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  constructor(props) {
    super(props)
    const updatedFaqsList = props.faqsList.map(faq => ({
      ...faq,
      isClicked: false,
    }))
    this.state = {
      faqsList: updatedFaqsList,
    }
  }

  toggleIsFaqClicked = id => {
    this.setState(prevState => ({
      faqsList: prevState.faqsList.map(eachFaq => {
        if (id === eachFaq.id) {
          return {...eachFaq, isClicked: !eachFaq.isClicked}
        }
        return eachFaq
      }),
    }))
  }

  render() {
    const {faqsList} = this.state
    return (
      <div className="app-container">
        <h1>FAQs</h1>
        <ul>
          {faqsList.map(eachFaq => (
            <FaqItem
              key={eachFaq.id}
              faqDetails={eachFaq}
              toggleIsFaqClicked={this.toggleIsFaqClicked}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Faqs

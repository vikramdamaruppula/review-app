import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReviewIndex: 0}

  handleLeftBtn = () => {
    const {activeReviewIndex} = this.state

    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  renderCurrentReviews = reviews => {
    const {imgUrl, username, companyName, description} = reviews

    return (
      <div className="review-container">
        <img src={imgUrl} alt={username} className="image" />
        <p className="username"> {username} </p>
        <p className="companyName"> {companyName} </p>
        <p className="description"> {description} </p>
      </div>
    )
  }

  handRightBtn = () => {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state

    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state

    const currentReviews = reviewsList[activeReviewIndex]

    return (
      <div className="app-container">
        <h1 className="heading"> Reviews </h1>
        <div className="carousel-container">
          <button
            type="button"
            onClick={this.handleLeftBtn}
            className="arrow-button"
            // testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>

          {this.renderCurrentReviews(currentReviews)}

          <button
            type="button"
            onClick={this.handRightBtn}
            className="arrow-button"
            // testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel

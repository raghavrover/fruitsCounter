import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoCount: 0,
    bananaCount: 0,
  }

  addMangoCount = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  addBananaCount = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="bg-container">
        <div className="fruits-count-card">
          <h1 className="fruits-count-heading">
            Bob ate<span className="count"> {mangoCount} </span>mangoes
            <span className="count"> {bananaCount} </span>bananas
          </h1>
          <div className="fruits-container">
            <div className="fruit-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="fruit-img"
                alt="mango"
              />
              <button
                className="eat-fruit-btn"
                type="button"
                onClick={this.addMangoCount}
              >
                Eat Mango
              </button>
            </div>
            <div className="fruit-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="fruit-img"
                alt="banana"
              />
              <button
                className="eat-fruit-btn"
                type="button"
                onClick={this.addBananaCount}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter

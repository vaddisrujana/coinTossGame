import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    toss: Math.floor(Math.random() * 2),
    total: 0,
    heads: 0,
    tails: 0,
    img: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onclick = () => {
    const {toss} = this.state
    console.log(toss)
    this.setState({toss: Math.floor(Math.random() * 2)})
    if (toss === 0) {
      this.setState(prevState => ({heads: prevState.total + 1}))
      this.setState({
        img: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    } else {
      this.setState(prevState => ({tails: prevState.total + 1}))
      this.setState({
        img: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
    }
    this.setState(prevState => ({total: prevState.total + 1}))
  }

  render() {
    const {total, heads, tails, img} = this.state
    return (
      <div className="background">
        <div className="background1">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          <div className="background3">
            <img src={img} className="image" alt="toss result" />
            <button className="button" type="button" onClick={this.onclick}>
              Toss Coin
            </button>
          </div>
          <div className="background2">
            <p className="para">Total:{total}</p>
            <p className="para">Heads:{heads}</p>
            <p className="para">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss

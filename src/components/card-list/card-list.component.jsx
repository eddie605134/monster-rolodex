import { Component } from 'react'
import './card-list.style.css'
import Card from '../card/card.component.jsx'


class CardList extends Component {

  render () {
    const { monsters } = this.props
    return <div className="card-list">
      {
        monsters.map((monster, index) => {
          return <Card monster={monster} key={monster.id}/>
        })
      }
    </div>
  }
}

export default CardList
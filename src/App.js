import { Component } from 'react'
import './App.css';

import CardList from './components/card-list/card-list.component.jsx'
import SearchBox from './components/search-box/search-box.component.jsx'

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        this.setState(() => {
          return {
            monsters: users
          }
        })
      })
  }

  onSearchChange =  (e) => {
    const searchField = e.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField }
    })
  }

  render () {

    const { monsters, searchField } = this.state
    const { onSearchChange } = this

    const filterMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })

    return (
      <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox placeholder={'search monsters'} className={'search-box'} onChangeHandler={onSearchChange}/>
        <CardList monsters={filterMonsters} />
      </div>
    )
  };
}

export default App;

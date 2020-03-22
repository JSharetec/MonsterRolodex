import React, {Component} from 'react';

import { CardList} from './components/card-list/cart-list.component'

import { SearchBox} from './components/searchbox/search-box.component'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
     monsters: [],
     searchField: ''
    };
  }
  render() {
    const {monsters, searchField}= this.state;
    const filterMonsters = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    // console.log(filterMonsters);
    return (
      <div className="App">
      <h1>Monster Rolodex </h1>
      <SearchBox placeholder="Type a monster" 
      handleChange = {e  => {
        this.setState({ searchField: e.target.value}) }}   />
  
      <CardList monsters = {filterMonsters}>
     
      </CardList>
    

      </div>
    );
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {response.json()
      .then( users =>{this.setState({monsters:users });});
      });
  }
}

export default App;

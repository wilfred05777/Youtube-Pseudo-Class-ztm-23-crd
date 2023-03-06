// @ts-nocheck
import React from 'react'
import './App.css'
import { Component } from 'react'

class App extends Component {
  items = [
    {
      id: 1,
      name: 'lizardman'
    },
    {
      id: 2,
      name: 'pandas'
    }
  ]

  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users }
        })
      )
  }

  render() {
    const filterMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField)
    })
    return (
      <div className='App'>
        <input
          type='search'
          placeholder='search monsters'
          onChange={(e) => {
            const searchField = e.target.value.toLocaleLowerCase()

            this.setState(() => {
              return { searchField }
            })
          }}
        />

        {filterMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h2>{monster.name}</h2>
            </div>
          )
        })}

        {/* {this.items.map((item) => {
          return { item }
        })} */}
      </div>
    )
  }
}

export default App

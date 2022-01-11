import React from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList>
          {this.state.monsters.map((monster, i) => (
            <h1 key={monster.name + "_" + i}>{monster.name}</h1>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;

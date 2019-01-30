import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    x: [],
    ingredient: ""
  };
  getResult = async () => {
    let url = `https://www.food2fork.com/api/search?key=860cb3c611ca804653c40c1b5794f393&q=${
      this.state.ingredient
    }&count=10`;
    let data = await fetch(url);
    let fooddata = await data.json();
    let y = fooddata;
    this.setState({ x: y.recipes });
  };
  changeIngredient = e => {
    this.setState({ ingredient: e.target.value });
    console.log(this.state.ingredient);
  };
  render() {
    return (
      <div className="App">
        <input
          onChange={this.changeIngredient}
          placeholder="enter ingredients with comma"
        />
        <button onClick={this.getResult}>tıkla</button>
        <h6>Recipes</h6>
        <ul>
          {this.state.x.map(recipe => {
            return <li>{recipe.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
